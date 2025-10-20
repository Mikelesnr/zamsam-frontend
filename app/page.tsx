"use client"; // Required for AppShell

import { AppShell } from "@mantine/core"; // 👈 FIX: Removed 'type Metadata' from Mantine import

// --- Imports for Page Content ---
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";

const Home: React.FC = () => {
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
          <Gallery />
          <CTA />
          <Footer />
        </main>
      </AppShell.Main>
    </AppShell>
  );
};

export default Home;
