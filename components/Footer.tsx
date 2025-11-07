// components/Footer.tsx
import styles from "@/styles/Footer.module.css";
import { FaFacebook, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.contact}>
          <h4>Contact Us</h4>
          <p>
            Phone: <a href="tel:+263773296227">+263 773 296 227</a>
          </p>
          <p>
            Email:{" "}
            <a href="mailto:zamsamrefrigeration@gmail.com">
              zamsamrefrigeration@gmail.com
            </a>
          </p>
        </div>

        <div className={styles.links}>
          <h4>Connect</h4>
          <ul>
            <li>
              <a href="/contact">Contact Us</a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/profile.php?id=100064347210270"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook /> Facebook
              </a>
            </li>
            <li>
              <a
                href="https://wa.link/7e2fnk"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp /> WhatsApp
              </a>
            </li>
            <li>
              <a href="/terms">Terms & Conditions</a>
            </li>
            <li>
              <a href="/privacy">Privacy Policy</a>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>© 2025 Zamsam Engineering. All rights reserved.</p>
      </div>
    </footer>
  );
}
