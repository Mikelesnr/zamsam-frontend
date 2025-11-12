import styles from "@/styles/CylinderGallery.module.css";
import SectionTitle from "./SectionTitle";
import Image from "next/image";

type Props = {
  images: string[];
};

export default function CylinderGallery({ images }: Props) {
  return (
    <div className={styles.galleryContainer} >
      <SectionTitle
        title="Our Work"
        subtitle="A glimpse into our installations, repairs, and service excellence."
        align="left"
        titleColor="#0c0c0cff"
        subtitleColor="#0c0c0cff"
      />
      <div className={styles.gallery} id="our-work">
        <div className={styles.box}>
          {images.map((src, i) => (
            <span key={i} style={{ "--i": i + 1 } as React.CSSProperties}>
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
    </div>
  );
}
