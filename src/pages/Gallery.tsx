import { motion } from "motion/react";
import GalleryGrid from "../components/gallery/GalleryGrid";

export default function Gallery() {
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

      {/* Bento Gallery Section */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-primary italic font-bold mb-4">
            Moments of Excellence
          </h2>
          <div className="w-24 h-[3px] bg-accent-gold" />
        </div>

        <GalleryGrid />
      </section>

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
            <button className="bg-accent-gold text-primary font-bold px-8 py-4 rounded-lg hover:brightness-110 active:scale-95 transition-all">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
