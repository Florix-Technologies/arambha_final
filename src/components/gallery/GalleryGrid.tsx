import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import { GalleryImage } from "../../data/gallery";

interface GalleryGridProps {
  images: GalleryImage[];
  onImageClick: (index: number) => void;
}

export default function GalleryGrid({ images, onImageClick }: GalleryGridProps) {
  return (
    <div className="w-full">
      <BentoGrid className="px-4 py-8">
        {images.map((image, index) => (
          <BentoGridItem
            key={image.id}
            className={`${image.className} min-h-[220px] md:min-h-0 overflow-hidden relative rounded-3xl p-0 border border-slate-900/[0.04] dark:border-white/[0.04]`}
            onClick={() => onImageClick(index)}
          >
            {/* Visual Hover Scale container */}
            <div className="w-full h-full relative overflow-hidden group">
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />
            </div>
          </BentoGridItem>
        ))}
      </BentoGrid>
    </div>
  );
}
