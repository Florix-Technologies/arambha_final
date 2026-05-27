import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ChevronLeft,
  ChevronRight,
  Download,
  X,
} from "lucide-react";
import GalleryCarousel from "../components/gallery/GalleryCarousel";
import { galleryImages } from "../data/gallery";

export default function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  // Keyboard navigation for Lightbox
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

  // Lock body scroll when Lightbox is open
  useEffect(() => {
    if (selectedIndex !== null) {
      document.body.style.overflow = "hidden";
      document.documentElement.classList.add("lenis-stopped");
    } else {
      document.body.style.overflow = "";
      document.documentElement.classList.remove("lenis-stopped");
    }
    return () => {
      document.body.style.overflow = "";
      document.documentElement.classList.remove("lenis-stopped");
    };
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
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1600')",
            filter: "brightness(0.4)"
          }}
        />
        
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/40 z-0" />

        <div className="relative z-10 max-w-5xl w-full px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <span className="text-accent-gold font-bold tracking-[0.4em] uppercase text-xs md:text-sm mb-4 block">
              Arambha Skill Solutions Gallery
            </span>
            <motion.h1 
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
              className="text-white text-5xl md:text-7xl font-serif font-bold tracking-tight mb-6 leading-tight"
            >
              EMPOWERING <span className="text-accent-gold italic">FUTURE</span> <br /> PROFESSIONALS.
            </motion.h1>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-white/80 text-lg md:text-xl font-sans mb-0 max-w-2xl mx-auto font-light leading-relaxed"
          >
            A visual journey through our training programs, campus activities, and student success stories.
          </motion.p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif text-primary italic font-bold mb-4">
            Moments of Excellence
          </h2>
          <div className="w-24 h-[3px] bg-accent-gold" />
        </div>

        {/* Gallery Content */}
        <div className="relative mt-8">
          <GalleryCarousel
            images={galleryImages}
            onImageClick={setSelectedIndex}
            speed="medium"
            direction="left"
            isPaused={false}
          />
        </div>
      </section>

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
                  className="text-white/70 hover:text-white p-2 rounded-full bg-white/5 hover:bg-white/10 transition-all flex items-center justify-center cursor-pointer"
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
              className="absolute left-6 text-white/50 hover:text-white p-3 rounded-full bg-white/5 hover:bg-white/10 transition-all z-[110] cursor-pointer"
            >
              <ChevronLeft size={30} />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              className="absolute right-6 text-white/50 hover:text-white p-3 rounded-full bg-white/5 hover:bg-white/10 transition-all z-[110] cursor-pointer"
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
                alt={galleryImages[selectedIndex].alt}
                className="max-w-full max-h-full object-contain rounded-2xl shadow-2xl border border-white/5 select-none"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Newsletter / CTA Section */}
      <section className="bg-primary py-24 px-6 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-accent-gold/5 -skew-x-12 translate-x-1/2" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-accent-gold font-sans font-bold tracking-[0.3em] uppercase text-sm mb-4 block"
          >
            Join Our Community
          </motion.span>
          <h2 className="text-white text-4xl md:text-5xl font-serif mb-8 leading-tight">
            Stay inspired with monthly <br /> curated collections.
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input 
              type="email" 
              placeholder="Your email address"
              className="flex-grow bg-white/10 border border-white/20 px-6 py-4 rounded-lg text-white placeholder:text-white/40 focus:bg-white/20 outline-none transition-all"
            />
            <button className="bg-accent-gold text-primary font-bold px-8 py-4 rounded-lg hover:brightness-110 active:scale-95 transition-all cursor-pointer">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
