"use client"; // Required for AppShell

import { AppShell } from "@mantine/core"; // 👈 FIX: Removed 'type Metadata' from Mantine import

// --- Imports for Page Content ---
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import CylinderGallery from "@/components/CylinderGallery";

const Home: React.FC = () => {
  const galleryImages = [
    "/images/20240306_155904.jpg",
    "/images/IMG_20211113_115411.jpg",
    "/images/IMG_20210602_145348.jpg",
    "/images/20251030_144428.jpg",
    "/images/20251030_130902.jpg",
    "/images/20250327_120308.jpg",
    "/images/20221123_124848.jpg",
    "/images/20230331_131544.jpg",
    "/images/20240306_155904.jpg",
    "/images/20250327_120316.jpg",
    "/images/20250327_121311.jpg",
    "/images/20251030_095815.jpg",
  ];

  return (
    <AppShell
      header={{ height: 60 }} // Define header height for proper content offset
      padding="md"
    >
      {/* The Header component contains <AppShell.Header> internally */}
      <Header />

      <AppShell.Main>
        <main>
          <Hero />
          <Services />
          <CylinderGallery images={galleryImages} />
          <CTA />
          <Footer />
        </main>
      </AppShell.Main>
    </AppShell>
  );
};

export default Home;
