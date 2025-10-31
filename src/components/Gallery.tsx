import { useState } from 'react';
import { X } from 'lucide-react';

interface GalleryImage {
  id: number;
  image_url: string;
  title: string;
}

export default function Gallery() {
  const imageNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 10]; // removed 9
  const images: GalleryImage[] = imageNumbers.map((num) => ({
    id: num,
    image_url: `https://bytyvraji.sk/${num}e.jpg`,
    title: `Obrázok ${num}`,
  }));

  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  return (
    <section id="gallery" className="py-20 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-light text-center text-stone-800 mb-6 tracking-wide">Galéria</h2>
        <div className="h-1 w-24 bg-amber-600 mx-auto mb-12"></div>
        <p className="text-center text-stone-600 mb-12 text-lg font-light">
          Pozrite si vizualizácie a fotografie projektu
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image) => (
            <div
              key={image.id}
              className="relative group cursor-pointer overflow-hidden aspect-video bg-stone-200 border border-stone-200 hover:border-amber-600 transition-all"
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image.image_url}
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-stone-900 bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white text-lg font-light opacity-0 group-hover:opacity-100 transition-opacity duration-300 tracking-wide">
                  {image.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-amber-400 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X size={32} />
          </button>
          <div className="max-w-7xl max-h-full">
            <img
              src={selectedImage.image_url}
              alt={selectedImage.title}
              className="max-w-full max-h-[90vh] object-contain"
            />
            <p className="text-white text-center mt-4 text-xl font-light tracking-wide">{selectedImage.title}</p>
          </div>
        </div>
      )}
    </section>
  );
}
