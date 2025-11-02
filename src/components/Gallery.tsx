import { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import { motion } from 'framer-motion';
import { Camera } from 'lucide-react';

interface GalleryImage {
  id: number;
  image_url: string;
  title: string;
}

export default function Gallery() {
  const imageNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 10];
  const images: GalleryImage[] = imageNumbers.map((num) => ({
    id: num,
    image_url: `https://bytyvraji.sk/${num}e.jpg`,
    title: `Apartmánový dom Vraje ${num}`,
  }));

  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const slides = images.map((img) => ({
    src: img.image_url,
    alt: img.title,
  }));

  return (
    <section id="gallery" className="py-24 bg-gradient-to-b from-white to-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="h-px w-12 bg-amber-600"></div>
            <Camera className="w-6 h-6 text-amber-600" />
            <div className="h-px w-12 bg-amber-600"></div>
          </div>
          <h2 className="text-5xl md:text-6xl font-light text-stone-900 mb-6 tracking-tight">
            Galéria projektu
          </h2>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto font-light leading-relaxed">
            Pozrite si vizualizácie a fotografie nášho exkluzívnego apartmánového domu v malebnom prostredí Vrají
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {images.map((image, idx) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-2xl transition-all duration-500"
              onClick={() => {
                setIndex(idx);
                setOpen(true);
              }}
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-stone-200">
                <img
                  src={image.image_url}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="bg-white/90 backdrop-blur-sm rounded-full p-4 transform scale-75 group-hover:scale-100 transition-transform duration-500">
                    <Camera className="w-6 h-6 text-amber-600" />
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-white text-sm font-medium tracking-wide drop-shadow-lg">
                    {image.title}
                  </p>
                </div>
              </div>

              <div className="absolute top-3 right-3 bg-amber-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                Zobraziť
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-2 text-stone-500 text-sm">
            <Camera className="w-4 h-4" />
            <span>Kliknutím na obrázok ho zväčšíte</span>
          </div>
        </motion.div>
      </div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={slides}
        styles={{
          container: { backgroundColor: 'rgba(0, 0, 0, 0.95)' },
        }}
        carousel={{
          finite: false,
        }}
        animation={{
          fade: 500,
          swipe: 500,
        }}
      />
    </section>
  );
}
