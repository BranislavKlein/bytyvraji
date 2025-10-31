import { useState, useEffect } from 'react';
import { supabase, type Apartment } from '../lib/supabase';

export default function FloorPlan() {
  const [apartments, setApartments] = useState<Apartment[]>([]);
  const [selectedFloor, setSelectedFloor] = useState<number>(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchApartments();
  }, []);

  const fetchApartments = async () => {
    try {
      const { data, error } = await supabase
        .from('apartments')
        .select('*')
        .order('floor', { ascending: true })
        .order('apartment_number', { ascending: true });

      if (error) throw error;
      setApartments(data || []);
    } catch (error) {
      console.error('Error fetching apartments:', error);
    } finally {
      setLoading(false);
    }
  };

  const floors = Array.from(new Set(apartments.map(apt => apt.floor))).sort((a, b) => a - b);
  const filteredApartments = apartments.filter(apt => apt.floor === selectedFloor);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'available':
        return 'bg-green-500';
      case 'reserved':
        return 'bg-amber-500';
      case 'sold':
        return 'bg-stone-400';
      default:
        return 'bg-stone-500';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'available':
        return 'Voľný';
      case 'reserved':
        return 'Rezervovaný';
      case 'sold':
        return 'Predaný';
      default:
        return status;
    }
  };

  if (loading) {
    return (
      <section id="floorplan" className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-stone-600">Načítavam...</p>
        </div>
      </section>
    );
  }

  return (
    <section id="floorplan" className="py-20 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-light text-center text-stone-800 mb-6 tracking-wide">Pôdorys podlaží</h2>
        <div className="h-1 w-24 bg-amber-600 mx-auto mb-12"></div>
        <p className="text-center text-stone-600 mb-12 text-lg font-light">
          Vyberte si poschodie a pozrite si dostupné byty
        </p>

        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-4">
            {floors.map((floor) => (
              <button
                key={floor}
                onClick={() => setSelectedFloor(floor)}
                className={`px-8 py-4 font-light text-lg transition-all border ${
                  selectedFloor === floor
                    ? 'bg-stone-800 text-white border-stone-800 shadow-lg scale-105'
                    : 'bg-white text-stone-700 hover:bg-stone-50 border-stone-300 shadow-sm'
                }`}
              >
                {floor === 0 ? 'Prízemie' : floor === 7 ? 'Penthouse' : `${floor}. poschodie`}
              </button>
            ))}
          </div>
        </div>

        <div className="flex justify-center gap-8 mb-12">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-green-500"></div>
            <span className="text-sm text-stone-700 font-light">Voľný</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-amber-500"></div>
            <span className="text-sm text-stone-700 font-light">Rezervovaný</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-stone-400"></div>
            <span className="text-sm text-stone-700 font-light">Predaný</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredApartments.map((apartment) => (
            <div
              key={apartment.id}
              className="bg-white border border-stone-200 overflow-hidden hover:border-amber-600 hover:shadow-lg transition-all"
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-light text-stone-900">{apartment.apartment_number}</h3>
                  <span className={`px-3 py-1 rounded-full text-white text-xs font-semibold ${getStatusColor(apartment.status)}`}>
                    {getStatusText(apartment.status)}
                  </span>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-stone-600 font-light">Izby:</span>
                    <span className="font-medium text-stone-900">{apartment.rooms}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-stone-600 font-light">Plocha:</span>
                    <span className="font-medium text-stone-900">{apartment.area_sqm} m²</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-stone-600 font-light">Balkón:</span>
                    <span className="font-medium text-stone-900">{apartment.balcony ? 'Áno' : 'Nie'}</span>
                  </div>
                  {apartment.terrace && (
                    <div className="flex justify-between text-sm">
                      <span className="text-stone-600 font-light">Terasa:</span>
                      <span className="font-medium text-stone-900">Áno</span>
                    </div>
                  )}
                </div>

                <div className="pt-4 border-t border-stone-200">
                  <div className="text-3xl font-light text-amber-700">
                    {apartment.price.toLocaleString('sk-SK')} €
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredApartments.length === 0 && (
          <div className="text-center text-stone-600 py-12">
            <p className="font-light">Na tomto poschodí nie sú žiadne byty.</p>
          </div>
        )}
      </div>
    </section>
  );
}
