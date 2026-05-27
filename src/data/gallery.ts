import gallery1 from "../assets/gallery/gallery-1.jpg";
import gallery2 from "../assets/gallery/gallery-2.jpg";
import gallery3 from "../assets/gallery/gallery-3.jpg";
import gallery4 from "../assets/gallery/gallery-4.jpg";
import gallery5 from "../assets/gallery/gallery-5.jpg";
import gallery6 from "../assets/gallery/gallery-6.jpg";
import gallery7 from "../assets/gallery/gallery-7.jpg";

export interface GalleryImage {
  id: number;
  src: string;
  className: string;
  alt: string;
}

export const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: gallery1,
    className: "md:col-span-2 md:row-span-2",
    alt: "Arambha students collaborating in a group training session",
  },
  {
    id: 2,
    src: gallery2,
    className: "md:col-span-1 md:row-span-1",
    alt: "Interactive digital classroom and learning platform",
  },
  {
    id: 3,
    src: gallery3,
    className: "md:col-span-1 md:row-span-1",
    alt: "Skill development workshop on professional ethics",
  },
  {
    id: 4,
    src: gallery4,
    className: "md:col-span-1 md:row-span-1",
    alt: "Student presenting final project and receiving feedback",
  },
  {
    id: 5,
    src: gallery5,
    className: "md:col-span-1 md:row-span-1",
    alt: "Group brainstorm and team-building exercise",
  },
  {
    id: 6,
    src: gallery6,
    className: "md:col-span-1 md:row-span-2",
    alt: "One-on-one mentorship and career guidance session",
  },
  {
    id: 7,
    src: gallery7,
    className: "md:col-span-2 md:row-span-1",
    alt: "Graduation and certificate distribution ceremony",
  },
];
