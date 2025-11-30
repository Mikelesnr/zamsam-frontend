"use client"; // Required for AppShell

import { AppShell } from "@mantine/core"; // 👈 FIX: Removed 'type Metadata' from Mantine import

// --- Imports for Page Content ---

import Hero from "@/components/Hero";
import Services from "@/components/Services";
import CTA from "@/components/CTA";
import CylinderGallery from "@/components/CylinderGallery";

const Home: React.FC = () => {
  const galleryImages = [
    "/images/home/zamsam1.jpg",
    "/images/home/zamsam2.jpg",
    "/images/home/zamsam3.jpg",
    "/images/home/zamsam4.jpg",
    "/images/home/zamsam5.jpg",
    "/images/home/zamsam6.jpg",
    "/images/home/zamsam7.jpg",
    "/images/home/zamsam8.jpg",
    "/images/home/zamsam9.jpg",
    "/images/home/zamsam10.jpg",
    "/images/home/zamsam11.jpg",
    "/images/home/zamsam12.jpg",
    "/images/home/zamsam13.jpg",
    "/images/home/zamsam14.jpg",
    // "/images/home/zamsam15.jpg",
    // "/images/home/zamsam16.jpg",
    // "/images/home/zamsam17.jpg",
    // "/images/home/zamsam18.jpg",
    // "/images/home/zamsam19.jpg",
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
            buttonLink="/contact"
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
