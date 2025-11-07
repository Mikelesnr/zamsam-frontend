// components/Hero.tsx
import styles from "@/styles/Hero.module.css";

type Props = {
  title: string;
  subtitle: string;
  buttonText?: string;
  buttonLink?: string;
  note?: string;
};

export default function Hero({
  title,
  subtitle,
  buttonText = "Learn More",
  buttonLink = "#",
  note,
}: Props) {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1 className={styles.headline}>{title}</h1>
        <p className={styles.subhead}>{subtitle}</p>
        <a href={buttonLink} className={styles.ctaButton}>
          {buttonText}
        </a>
        {note && <p className={styles.tagline}>{note}</p>}
      </div>
    </section>
  );
}
