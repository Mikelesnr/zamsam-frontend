// components/SectionTitle.tsx
import styles from "@/styles/SectionTitle.module.css";
import clsx from "clsx";

type Props = {
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  titleColor?: string;
  subtitleColor?: string;
};

export default function SectionTitle({
  title,
  subtitle,
  align = "center",
  titleColor = "#003366",
  subtitleColor = "#555",
}: Props) {
  return (
    <div className={clsx(styles.sectionTitle, styles[align])}>
      <h2 className={styles.title} style={{ color: titleColor }}>
        {title}
      </h2>
      {subtitle && (
        <p className={styles.subtitle} style={{ color: subtitleColor }}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
