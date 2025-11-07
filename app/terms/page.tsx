// app/terms/page.tsx
import styles from "@/styles/Legal.module.css";
import { Metadata } from "next";

// 1. Define Metadata for the page
export const metadata: Metadata = {
  title: "Terms of Use | Zamsam Engineering",
  description: "Terms and conditions for using the Zamsam Engineering website.",
};

const TermsOfUsePage = () => {
  return (
    <main className={styles.legalContainer}>
      <h1 className={styles.title}>Terms of Use</h1>

      <section className={styles.section}>
        <h2 className={styles.subtitle}>1. Acceptance of Terms</h2>
        <p>
          By accessing and using the Zamsam Engineering website, you agree to
          comply with and be bound by these Terms and Conditions.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.subtitle}>2. Website Content</h2>
        <p>
          The content on this website (text, images, gallery photos, and
          graphics) is the property of Zamsam Engineering and is provided for
          your general information only. It is subject to change without notice.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.subtitle}>3. Service Disclaimer</h2>
        <p>
          The information provided on our services, including cold room
          installation and AC repairs, is for informational purposes only. All
          official **quotes, pricing, and service agreements** must be confirmed
          directly with Zamsam Engineering staff via phone or WhatsApp.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.subtitle}>4. Use of Contact Form</h2>
        <p>
          You agree that the information you provide through the Contact Us form
          is accurate and is provided for the sole purpose of inquiring about
          our refrigeration and air conditioning services.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.subtitle}>5. External Links</h2>
        <p>
          This website may contain links to external websites (like Facebook or
          the WhatsApp link) for your convenience. We are not responsible for
          the content or privacy practices of these external sites.
        </p>
      </section>

      <p className={styles.date}>Last Updated: November 2025</p>
    </main>
  );
};

export default TermsOfUsePage;
