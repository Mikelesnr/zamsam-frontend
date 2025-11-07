// app/privacy/page.tsx
import styles from "@/styles/Legal.module.css";
import { Metadata } from "next";

// 1. Define Metadata for the page
export const metadata: Metadata = {
  title: "Privacy Policy | Zamsam Engineering",
  description:
    "Privacy policy for data submitted to Zamsam Engineering via contact form.",
};

const PrivacyPolicyPage = () => {
  return (
    <main className={styles.legalContainer}>
      <h1 className={styles.title}>Privacy Policy</h1>

      <p className={styles.intro}>
        This policy explains how Zamsam Engineering handles your personal
        information submitted via our website&apos;s contact form.
      </p>

      <section className={styles.section}>
        <h2 className={styles.subtitle}>
          1. Information We Collect and How It Is Used
        </h2>
        <p>
          When you use the <strong>Contact Us</strong> form on our website, the
          information you provide (Name, Email Address, Phone Number, and
          Inquiry Details) is{" "}
          <strong>not stored in a permanent database</strong>.
        </p>
        <p>
          Instead, your submission generates an <strong>email record</strong>{" "}
          that is sent directly to Zamsam Engineering staff. This email record
          constitutes the entirety of the personal data trail we keep.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.subtitle}>2. How We Use the Email Data</h2>
        <p>
          We use the information in the email record solely for the following
          purposes:
        </p>
        <ul>
          <li>
            To <strong>respond to your service requests</strong> and inquiries.
          </li>
          <li>
            To <strong>schedule appointments</strong> and provide quotes for our
            services.
          </li>
          <li>To communicate with you regarding your service job.</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2 className={styles.subtitle}>3. Data Sharing</h2>
        <p>
          We <strong>do not sell, trade, or otherwise transfer</strong> your
          personally identifiable information to outside parties. Your
          information is kept confidential and used only internally by Zamsam
          Engineering staff relevant to your service request.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.subtitle}>4. Security</h2>
        <p>
          We take reasonable precautions to protect the information you submit.
          However, please remember that the email communication method is not
          100% secure.
        </p>
      </section>

      <p className={styles.date}>Last Updated: November 2025</p>
    </main>
  );
};

export default PrivacyPolicyPage;
