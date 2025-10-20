// components/Gallery.tsx
import { Title, Text } from "@mantine/core";
import classes from "@/styles/Gallery.module.css";
import Image from "next/image";

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
    <Title order={2} mb="sm" style={{ color: "#003366" }}>
      Our Work
    </Title>
    <Text size="lg" mb="xl" style={{ color: "#333" }}>
      A glimpse into our installations, repairs, and service excellence.
    </Text>

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
