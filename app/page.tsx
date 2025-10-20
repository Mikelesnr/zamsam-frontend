// pages/index.tsx
import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Services from "../components/Services";
import CTA from "../components/CTA";
import Image from "next/image";
// You would also have a Footer component

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>
          Zamsam Engineering: Expert Cold Room Installation & AC Repair
        </title>
        <meta
          name="description"
          content="Zamsam Engineering offers professional installation of Cold Rooms & Air Conditioning, plus reliable repairs for all refrigeration appliances. Contact us today!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Recommended: Add LocalBusiness Schema Markup here for strong SEO */}
      </Head>

      <div className="landing-page-container">
        <Header />
        <main>
          <Hero />
          <Services />
          <CTA />
          {/* <Footer /> */}
        </main>
      </div>
    </>
  );
};

export default Home;
