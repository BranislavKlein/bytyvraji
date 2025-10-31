import { useState, useEffect } from 'react';
import { supabase, type Apartment } from '../lib/supabase';

export default function Offer() {
  const [apartments, setApartments] = useState<Apartment[]>([]);
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({
    available: 0,
    reserved: 0,
    sold: 0,
  });

  useEffect(() => {
    fetchApartments();
  }, []);

  const fetchApartments = async () => {
    try {
      const { data, error } = await supabase
        .from('apartments')
        .select('*')
        .order('price', { ascending: true });

      if (error) throw error;

      const apartmentData = data || [];
      setApartments(apartmentData);

      const available = apartmentData.filter(a => a.status === 'available').length;
      const reserved = apartmentData.filter(a => a.status === 'reserved').length;
      const sold = apartmentData.filter(a => a.status === 'sold').length;

      setStats({ available, reserved, sold });
    } catch (error) {
      console.error('Error fetching apartments:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <section id="offer" className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-stone-600">Načítavam...</p>
        </div>
      </section>
    );
  }

  return (
    <section id="offer" className="py-20 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-light text-center text-stone-800 mb-6 tracking-wide">Ponuka bytov</h2>
        <div className="h-1 w-24 bg-amber-600 mx-auto mb-12"></div>
        <p className="text-center text-stone-600 mb-12 text-lg font-light">
          Aktuálne dostupné byty v projekte 
        </p>

        <div className="flex justify-center gap-6 mb-12 flex-wrap">
          <div className="bg-green-50 px-8 py-4 border border-green-200">
            <span className="text-green-800 font-light">Voľné: <span className="font-semibold">{stats.available}</span></span>
          </div>
          <div className="bg-amber-50 px-8 py-4 border border-amber-200">
            <span className="text-amber-800 font-light">Rezervované: <span className="font-semibold">{stats.reserved}</span></span>
          </div>
          <div className="bg-stone-100 px-8 py-4 border border-stone-300">
            <span className="text-stone-800 font-light">Predané: <span className="font-semibold">{stats.sold}</span></span>
          </div>
        </div>

        <div className="overflow-x-auto shadow-sm border border-stone-200">
          <table className="w-full bg-white">
            <thead className="bg-stone-800 text-white">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-light tracking-wide">Byt č.</th>
                <th className="px-6 py-4 text-left text-sm font-light tracking-wide">Poschodie</th>
                <th className="px-6 py-4 text-left text-sm font-light tracking-wide">Izby</th>
                <th className="px-6 py-4 text-left text-sm font-light tracking-wide">Plocha</th>
                <th className="px-6 py-4 text-left text-sm font-light tracking-wide">Balkón/Terasa</th>
                <th className="px-6 py-4 text-left text-sm font-light tracking-wide">Cena</th>
                <th className="px-6 py-4 text-left text-sm font-light tracking-wide">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-200">
              {apartments.map((apartment) => {
                const getStatusColor = (status: string) => {
                  switch (status) {
                    case 'available':
                      return 'bg-green-100 text-green-800 border border-green-300';
                    case 'reserved':
                      return 'bg-amber-100 text-amber-800 border border-amber-300';
                    case 'sold':
                      return 'bg-stone-200 text-stone-700 border border-stone-300';
                    default:
                      return 'bg-stone-100 text-stone-800';
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

                return (
                  <tr key={apartment.id} className="hover:bg-stone-50 transition-colors">
                    <td className="px-6 py-4 text-sm font-semibold text-stone-900">
                      {apartment.apartment_number}
                    </td>
                    <td className="px-6 py-4 text-sm text-stone-700 font-light">
                      {apartment.floor === 0 ? 'Prízemie' : apartment.floor === 7 ? 'Penthouse' : `${apartment.floor}.`}
                    </td>
                    <td className="px-6 py-4 text-sm text-stone-700 font-light">{apartment.rooms}</td>
                    <td className="px-6 py-4 text-sm text-stone-700 font-light">{apartment.area_sqm} m²</td>
                    <td className="px-6 py-4 text-sm text-stone-700 font-light">
                      {apartment.terrace ? 'Terasa' : apartment.balcony ? 'Balkón' : '-'}
                    </td>
                    <td className="px-6 py-4 text-sm font-semibold text-amber-700">
                      {apartment.price.toLocaleString('sk-SK')} €
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 text-xs font-light ${getStatusColor(apartment.status)}`}>
                        {getStatusText(apartment.status)}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <div className="mt-8 text-center">
          <p className="text-stone-600 text-sm font-light">
            * Ceny sú orientačné a môžu sa líšiť. Pre aktuálne ceny a dostupnosť nás prosím kontaktujte.
          </p>
        </div>
      </div>
    </section>
  );
}
