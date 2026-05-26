import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ChevronLeft, ChevronRight, Download } from "lucide-react";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";

import gallery1 from "../../assets/gallery/gallery-1.jpg";
import gallery2 from "../../assets/gallery/gallery-2.jpg";
import gallery3 from "../../assets/gallery/gallery-3.jpg";
import gallery4 from "../../assets/gallery/gallery-4.jpg";
import gallery5 from "../../assets/gallery/gallery-5.jpg";
import gallery6 from "../../assets/gallery/gallery-6.jpg";
import gallery7 from "../../assets/gallery/gallery-7.jpg";

interface GalleryImage {
  id: number;
  src: string;
  className: string;
}

const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: gallery1,
    className: "md:col-span-2 md:row-span-2",
  },
  {
    id: 2,
    src: gallery2,
    className: "md:col-span-1 md:row-span-1",
  },
  {
    id: 3,
    src: gallery3,
    className: "md:col-span-1 md:row-span-1",
  },
  {
    id: 4,
    src: gallery4,
    className: "md:col-span-1 md:row-span-1",
  },
  {
    id: 5,
    src: gallery5,
    className: "md:col-span-1 md:row-span-1",
  },
  {
    id: 6,
    src: gallery6,
    className: "md:col-span-1 md:row-span-2",
  },
  {
    id: 7,
    src: gallery7,
    className: "md:col-span-2 md:row-span-1",
  },
];

export default function GalleryGrid() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === "Escape") setSelectedIndex(null);
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex]);

  const handleNext = () => {
    setSelectedIndex((prev) =>
      prev !== null ? (prev + 1) % galleryImages.length : null
    );
  };

  const handlePrev = () => {
    setSelectedIndex((prev) =>
      prev !== null ? (prev - 1 + galleryImages.length) % galleryImages.length : null
    );
  };

  return (
    <div className="w-full">
      <BentoGrid className="px-4 py-8">
        {galleryImages.map((image, index) => (
          <BentoGridItem
            key={image.id}
            className={`${image.className} min-h-[220px] md:min-h-0 overflow-hidden relative rounded-3xl p-0 border border-slate-900/[0.04] dark:border-white/[0.04]`}
            onClick={() => setSelectedIndex(index)}
          >
            {/* Visual Hover Scale container */}
            <div className="w-full h-full relative overflow-hidden group">
              <img
                src={image.src}
                alt={`Arambha Gallery Image ${image.id}`}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />
            </div>
          </BentoGridItem>
        ))}
      </BentoGrid>

      {/* Immersive Lightbox Modal */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center backdrop-blur-md"
            onClick={() => setSelectedIndex(null)}
          >
            {/* Header controls */}
            <div className="absolute top-6 left-6 right-6 flex justify-between items-center z-[110]">
              <span className="text-white/60 text-sm font-sans tracking-widest">
                {selectedIndex + 1} / {galleryImages.length}
              </span>
              <div className="flex items-center gap-4">
                <a
                  href={galleryImages[selectedIndex].src}
                  download={`arambha-gallery-${galleryImages[selectedIndex].id}.jpg`}
                  onClick={(e) => e.stopPropagation()}
                  className="text-white/70 hover:text-white p-2 rounded-full bg-white/5 hover:bg-white/10 transition-all flex items-center justify-center"
                  title="Download Image"
                >
                  <Download size={22} />
                </a>
                <button
                  onClick={() => setSelectedIndex(null)}
                  className="text-white/70 hover:text-white p-2 rounded-full bg-white/5 hover:bg-white/10 transition-all flex items-center justify-center"
                  title="Close"
                >
                  <X size={22} />
                </button>
              </div>
            </div>

            {/* Navigation buttons */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              className="absolute left-6 text-white/50 hover:text-white p-3 rounded-full bg-white/5 hover:bg-white/10 transition-all z-[110]"
            >
              <ChevronLeft size={30} />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              className="absolute right-6 text-white/50 hover:text-white p-3 rounded-full bg-white/5 hover:bg-white/10 transition-all z-[110]"
            >
              <ChevronRight size={30} />
            </button>

            {/* Centered Image Container */}
            <motion.div
              key={selectedIndex}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative max-w-[85vw] max-h-[80vh] flex items-center justify-center p-4"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={galleryImages[selectedIndex].src}
                alt={`Arambha Gallery Large Image ${galleryImages[selectedIndex].id}`}
                className="max-w-full max-h-full object-contain rounded-2xl shadow-2xl border border-white/5 select-none"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
