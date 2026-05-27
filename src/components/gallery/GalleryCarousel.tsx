import React from "react";
import { GalleryImage } from "../../data/gallery";

interface GalleryCarouselProps {
  images: GalleryImage[];
  onImageClick: (index: number) => void;
  speed: "slow" | "medium" | "fast";
  direction: "left" | "right";
  isPaused: boolean;
}

export default function GalleryCarousel({
  images,
  onImageClick,
  speed,
  direction,
  isPaused,
}: GalleryCarouselProps) {
  // Speed mapping to animation duration
  const durationMap = {
    slow: "55s",
    medium: "35s",
    fast: "18s",
  };

  const duration = durationMap[speed] || "35s";

  return (
    <div className="w-full overflow-hidden py-12 select-none relative bg-slate-50/50 rounded-3xl border border-slate-100">
      {/* Sleek edge fading gradients for luxury look */}
      <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

      {/* Main Marquee Track */}
      <div
        className="animate-marquee hover:[animation-play-state:paused] flex flex-row items-center gap-0"
        style={
          {
            "--marquee-duration": duration,
            "--marquee-direction": direction === "right" ? "reverse" : "normal",
            "--marquee-play-state": isPaused ? "paused" : "running",
          } as React.CSSProperties
        }
      >
        {/* Set 1 */}
        <div className="flex flex-row items-center shrink-0">
          {images.map((image, index) => (
            <div
              key={`set1-${image.id}`}
              onClick={() => onImageClick(index)}
              className="mr-6 h-[220px] sm:h-[300px] md:h-[380px] w-auto shrink-0 overflow-hidden rounded-2xl border border-slate-900/[0.04] bg-white shadow-[0_4px_20px_-4px_rgba(0,0,0,0.02)] transition-all duration-300 hover:shadow-[0_8px_30px_-6px_rgba(0,0,0,0.06)] hover:border-slate-950/[0.08] cursor-pointer group"
            >
              <div className="w-full h-full overflow-hidden relative">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="h-full w-auto object-contain transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/[0.02] group-hover:bg-black/0 transition-colors duration-500" />
              </div>
            </div>
          ))}
        </div>

        {/* Set 2 (Identical duplicate for seamless looping) */}
        <div className="flex flex-row items-center shrink-0" aria-hidden="true">
          {images.map((image, index) => (
            <div
              key={`set2-${image.id}`}
              onClick={() => onImageClick(index)}
              className="mr-6 h-[220px] sm:h-[300px] md:h-[380px] w-auto shrink-0 overflow-hidden rounded-2xl border border-slate-900/[0.04] bg-white shadow-[0_4px_20px_-4px_rgba(0,0,0,0.02)] transition-all duration-300 hover:shadow-[0_8px_30px_-6px_rgba(0,0,0,0.06)] hover:border-slate-950/[0.08] cursor-pointer group"
            >
              <div className="w-full h-full overflow-hidden relative">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="h-full w-auto object-contain transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/[0.02] group-hover:bg-black/0 transition-colors duration-500" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
