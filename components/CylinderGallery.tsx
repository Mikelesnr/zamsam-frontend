import styles from "@/styles/CylinderGallery.module.css";
import SectionTitle from "./SectionTitle";
import Image from "next/image";
import { useEffect, useState } from "react";

type Props = {
  images: string[];
};

export default function CylinderGallery({ images }: Props) {
  const [isMobile, setIsMobile] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Auto-scroll effect
  useEffect(() => {
    if (!isMobile) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000); // 4s per slide
    return () => clearInterval(interval);
  }, [isMobile, images.length]);

  const prevSlide = () =>
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  const nextSlide = () =>
    setCurrentIndex((prev) => (prev + 1) % images.length);

  return (
    <div className={styles.galleryContainer}>
      <SectionTitle
        title="Our Work"
        subtitle="A glimpse into our installations, repairs, and service excellence."
        align="left"
        titleColor="#0c0c0cff"
        subtitleColor="#0c0c0cff"
      />

      {/* Desktop Cylinder Gallery */}
      {!isMobile && (
        <div className={styles.gallery} id="our-work">
          <div className={styles.box} style={{ "--total": images.length } as React.CSSProperties}>
  {images.map((src, i) => (
    <span key={i} style={{ "--i": i } as React.CSSProperties}>
      <Image
        src={src}
        alt={`Gallery image ${i + 1}`}
        width={400}
        height={300}
        style={{ objectFit: "cover", borderRadius: "8px" }}
      />
    </span>
  ))}
</div>
        </div>
      )}

      {/* Mobile Carousel */}
      {isMobile && (
        <div className={styles.carouselWrapper}>
          <button className={styles.arrow} onClick={prevSlide}>
            &#10094;
          </button>
          <div className={styles.mobileCarousel}>
            {images.map((src, i) => (
              <div
                key={i}
                className={`${styles.carouselItem} ${
                  i === currentIndex ? styles.active : ""
                }`}
              >
                <Image
                  src={src}
                  alt={`Mobile image ${i + 1}`}
                  width={300}
                  height={200}
                  style={{ objectFit: "cover", borderRadius: "8px" }}
                />
              </div>
            ))}
          </div>
          <button className={styles.arrow} onClick={nextSlide}>
            &#10095;
          </button>
        </div>
      )}
    </div>
  );
}
