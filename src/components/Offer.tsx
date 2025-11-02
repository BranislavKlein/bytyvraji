import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface ApartmentData {
  number: number;
  floor: string;
  area: number;
  price: number;
}

const apartmentsData: ApartmentData[] = [
  { number: 1, floor: '1.NP', area: 71.46, price: 215000 },
  { number: 2, floor: '1.NP', area: 71.59, price: 215000 },
  { number: 3, floor: '1.NP', area: 72.86, price: 218500 },
  { number: 4, floor: '1.NP', area: 72.86, price: 218500 },
  { number: 5, floor: '1.NP', area: 74.06, price: 222000 },
  { number: 6, floor: '1.NP', area: 70.35, price: 211000 },
  { number: 7, floor: '1.NP', area: 63.74, price: 191000 },
  { number: 8, floor: '1.NP', area: 69.78, price: 209000 },
  { number: 9, floor: '2.NP', area: 65.68, price: 197000 },
  { number: 10, floor: '2.NP', area: 27.68, price: 93000 },
  { number: 11, floor: '2.NP', area: 60.3, price: 183000 },
  { number: 12, floor: '2.NP', area: 61.12, price: 183500 },
  { number: 13, floor: '2.NP', area: 61.12, price: 183500 },
  { number: 14, floor: '2.NP', area: 61.12, price: 183500 },
  { number: 15, floor: '2.NP', area: 56.82, price: 171000 },
  { number: 16, floor: '2.NP', area: 56.65, price: 169000 },
  { number: 17, floor: '2.NP', area: 46.05, price: 138500 },
  { number: 18, floor: '2.NP', area: 35.04, price: 109000 },
  { number: 19, floor: '2.NP', area: 45.39, price: 138000 },
  { number: 20, floor: '2.NP', area: 45.71, price: 138000 },
  { number: 21, floor: '2.NP', area: 52.1, price: 156000 },
  { number: 22, floor: '2.NP', area: 53.32, price: 159000 },
  { number: 23, floor: '3.NP', area: 81.15, price: 245000 },
  { number: 24, floor: '3.NP', area: 82.21, price: 244000 },
  { number: 25, floor: '3.NP', area: 82.21, price: 244000 },
  { number: 26, floor: '3.NP', area: 82.21, price: 244000 },
  { number: 27, floor: '3.NP', area: 82.21, price: 244000 },
  { number: 28, floor: '3.NP', area: 81.86, price: 244000 },
  { number: 29, floor: '3.NP', area: 68.36, price: 209000 },
  { number: 30, floor: '3.NP', area: 37.78, price: 109000 },
  { number: 31, floor: '3.NP', area: 48.51, price: 145000 },
  { number: 32, floor: '3.NP', area: 55.36, price: 165000 },
  { number: 33, floor: '3.NP', area: 58.26, price: 174000 },
  { number: 34, floor: '3.NP', area: 69.33, price: 207000 },
  { number: 35, floor: '3.NP', area: 69.96, price: 209000 },
  { number: 36, floor: '3.NP', area: 72.11, price: 215000 },
  { number: 37, floor: '3.NP', area: 69.96, price: 209000 },
  { number: 38, floor: '3.NP', area: 69.96, price: 209000 },
  { number: 39, floor: '3.NP', area: 69.02, price: 207000 },
];

export default function Offer() {
  const [expandedFloor, setExpandedFloor] = useState<string | null>('1.NP');
  const [sortBy, setSortBy] = useState<'number' | 'area' | 'price'>('number');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');

  const floors = ['1.NP', '2.NP', '3.NP'];

  const handleSort = (field: 'number' | 'area' | 'price') => {
    if (sortBy === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(field);
      setSortDirection('asc');
    }
  };

  const getSortedApartments = (floorApartments: ApartmentData[]) => {
    return [...floorApartments].sort((a, b) => {
      const multiplier = sortDirection === 'asc' ? 1 : -1;
      if (sortBy === 'number') return (a.number - b.number) * multiplier;
      if (sortBy === 'area') return (a.area - b.area) * multiplier;
      if (sortBy === 'price') return (a.price - b.price) * multiplier;
      return 0;
    });
  };

  const totalArea = apartmentsData.reduce((sum, apt) => sum + apt.area, 0);
  const totalPrice = apartmentsData.reduce((sum, apt) => sum + apt.price, 0);

  return (
    <section id="offer" className="py-20 bg-gradient-to-b from-white to-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-light text-stone-800 mb-4 tracking-wide">
            Cenová ponuka
          </h2>
          <div className="h-1 w-24 bg-amber-600 mx-auto mb-6"></div>
          <p className="text-stone-600 text-lg font-light max-w-2xl mx-auto">
            Prehľad všetkých bytov v projekte s aktuálnymi cenami a rozmermi
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-6 border border-stone-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="text-3xl font-light text-amber-600 mb-2">{apartmentsData.length}</div>
            <div className="text-stone-600 text-sm uppercase tracking-wider font-light">Celkový počet bytov</div>
          </div>
          <div className="bg-white p-6 border border-stone-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="text-3xl font-light text-amber-600 mb-2">{totalArea.toFixed(2)} m²</div>
            <div className="text-stone-600 text-sm uppercase tracking-wider font-light">Celková plocha</div>
          </div>
          <div className="bg-white p-6 border border-stone-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="text-3xl font-light text-amber-600 mb-2">{totalPrice.toLocaleString('sk-SK')} €</div>
            <div className="text-stone-600 text-sm uppercase tracking-wider font-light">Celková hodnota</div>
          </div>
        </div>

        <div className="space-y-6">
          {floors.map((floor) => {
            const floorApartments = apartmentsData.filter(apt => apt.floor === floor);
            const sortedFloorApartments = getSortedApartments(floorApartments);
            const isExpanded = expandedFloor === floor;
            const floorTotal = floorApartments.reduce((sum, apt) => sum + apt.price, 0);
            const avgPrice = floorTotal / floorApartments.length;

            return (
              <div key={floor} className="bg-white border border-stone-200 shadow-sm overflow-hidden">
                <button
                  onClick={() => setExpandedFloor(isExpanded ? null : floor)}
                  className="w-full px-6 py-5 flex items-center justify-between bg-gradient-to-r from-stone-800 to-stone-700 hover:from-stone-700 hover:to-stone-600 transition-all"
                >
                  <div className="flex items-center gap-6">
                    <h3 className="text-xl font-light text-white tracking-wide">{floor}</h3>
                    <div className="flex gap-6 text-sm text-stone-300">
                      <span>{floorApartments.length} bytov</span>
                      <span>•</span>
                      <span>Priemerná cena: {avgPrice.toLocaleString('sk-SK', { maximumFractionDigits: 0 })} €</span>
                    </div>
                  </div>
                  {isExpanded ? (
                    <ChevronUp className="w-5 h-5 text-white" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-white" />
                  )}
                </button>

                {isExpanded && (
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-stone-50 border-b border-stone-200">
                        <tr>
                          <th
                            onClick={() => handleSort('number')}
                            className="px-6 py-4 text-left text-xs font-semibold text-stone-700 uppercase tracking-wider cursor-pointer hover:bg-stone-100 transition-colors"
                          >
                            <div className="flex items-center gap-2">
                              Byt č.
                              {sortBy === 'number' && (
                                <span className="text-amber-600">
                                  {sortDirection === 'asc' ? '↑' : '↓'}
                                </span>
                              )}
                            </div>
                          </th>
                          <th className="px-6 py-4 text-left text-xs font-semibold text-stone-700 uppercase tracking-wider">
                            Poschodie
                          </th>
                          <th
                            onClick={() => handleSort('area')}
                            className="px-6 py-4 text-right text-xs font-semibold text-stone-700 uppercase tracking-wider cursor-pointer hover:bg-stone-100 transition-colors"
                          >
                            <div className="flex items-center justify-end gap-2">
                              Výmera
                              {sortBy === 'area' && (
                                <span className="text-amber-600">
                                  {sortDirection === 'asc' ? '↑' : '↓'}
                                </span>
                              )}
                            </div>
                          </th>
                          <th
                            onClick={() => handleSort('price')}
                            className="px-6 py-4 text-right text-xs font-semibold text-stone-700 uppercase tracking-wider cursor-pointer hover:bg-stone-100 transition-colors"
                          >
                            <div className="flex items-center justify-end gap-2">
                              Cena
                              {sortBy === 'price' && (
                                <span className="text-amber-600">
                                  {sortDirection === 'asc' ? '↑' : '↓'}
                                </span>
                              )}
                            </div>
                          </th>
                          <th className="px-6 py-4 text-right text-xs font-semibold text-stone-700 uppercase tracking-wider">
                            Cena/m²
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-stone-100">
                        {sortedFloorApartments.map((apartment, index) => {
                          const pricePerSqm = apartment.price / apartment.area;
                          return (
                            <tr
                              key={apartment.number}
                              className={`hover:bg-amber-50/30 transition-colors ${
                                index % 2 === 0 ? 'bg-white' : 'bg-stone-50/50'
                              }`}
                            >
                              <td className="px-6 py-4 whitespace-nowrap">
                                <span className="inline-flex items-center justify-center w-10 h-10 bg-amber-600 text-white text-sm font-semibold">
                                  {apartment.number}
                                </span>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-stone-600 font-light">
                                {apartment.floor}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-right text-sm text-stone-900 font-medium">
                                {apartment.area.toFixed(2)} m²
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-right text-base font-semibold text-amber-700">
                                {apartment.price.toLocaleString('sk-SK')} €
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-right text-sm text-stone-500 font-light">
                                {pricePerSqm.toLocaleString('sk-SK', { maximumFractionDigits: 0 })} €/m²
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                      <tfoot className="bg-stone-100 border-t-2 border-stone-300">
                        <tr>
                          <td colSpan={2} className="px-6 py-4 text-sm font-semibold text-stone-900 uppercase tracking-wider">
                            Poschodie spolu
                          </td>
                          <td className="px-6 py-4 text-right text-sm font-semibold text-stone-900">
                            {floorApartments.reduce((sum, apt) => sum + apt.area, 0).toFixed(2)} m²
                          </td>
                          <td className="px-6 py-4 text-right text-base font-bold text-amber-700">
                            {floorTotal.toLocaleString('sk-SK')} €
                          </td>
                          <td></td>
                        </tr>
                      </tfoot>
                    </table>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-12 bg-gradient-to-r from-amber-600 to-amber-700 text-white p-8 shadow-lg">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <h3 className="text-2xl font-light mb-2">Celková suma projektu</h3>
              <p className="text-sm text-amber-100 font-light">39 bytových jednotiek</p>
            </div>
            <div className="text-right">
              <div className="text-4xl font-light mb-1">{totalPrice.toLocaleString('sk-SK')} €</div>
              <div className="text-sm text-amber-100 font-light">
                Celková plocha: {totalArea.toFixed(2)} m²
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-blue-50 border-l-4 border-blue-600 p-6">
          <p className="text-sm text-blue-900 font-light leading-relaxed">
            <span className="font-semibold">Poznámka:</span> Uvedené ceny sú orientačné a platné k dátumu vydania tohoto cenníka.
            Výmery bytov sú približné a môžu sa líšiť od konečných rozmerov. Pre aktuálne ceny, dostupnosť
            a detailné informácie nás prosím kontaktujte.
          </p>
        </div>
      </div>
    </section>
  );
}
