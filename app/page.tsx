"use client"; // Required for AppShell

import { AppShell } from "@mantine/core"; // 👈 FIX: Removed 'type Metadata' from Mantine import

// --- Imports for Page Content ---

import Hero from "@/components/Hero";
import Services from "@/components/Services";
import CTA from "@/components/CTA";
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
      <AppShell.Main>
        <main>
          <Hero
            title="Expert Refrigeration & Air Conditioning Solutions"
            subtitle="Reliable Cold Room Installation, AC Repairs, and Commercial Servicing for all your cooling needs."
            buttonText="Request a Consultation"
            buttonLink="#contact"
            note="Servicing All Working Refrigeration Appliances"
          />

          <Services />
          <CylinderGallery images={galleryImages} />
          <CTA />
        </main>
      </AppShell.Main>
    </AppShell>
  );
};

export default Home;
