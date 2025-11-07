// components/Gallery.tsx
import classes from "@/styles/Gallery.module.css";
import Image from "next/image";
import SectionTitle from "./SectionTitle";

const galleryImages = [
  "/images/zamsam-cold-room.jpg",
  "/images/zamsam-aircon.jpg",
  "/images/zamsam-freezer.jpg",
  "/images/zamsam-coldroom.jpg",
  "/images/zamsam-freezer2.jpg",
  "/images/poster-zamsam.jpg",
];

const Gallery = () => (
  <div className={classes.galleryContainer} id="our-work">
    <SectionTitle
      title="Our Work"
      subtitle="A glimpse into our installations, repairs, and service excellence."
      align="left"
      titleColor="#0c0c0cff"
      subtitleColor="#0c0c0cff"
    />

    <div className={classes.gallery}>
      {galleryImages.map((src, index) => (
        <div className={classes.galleryImage} key={index}>
          <Image src={src} fill alt={`Zamsam project ${index + 1}`} />
        </div>
      ))}
    </div>
  </div>
);

export default Gallery;
