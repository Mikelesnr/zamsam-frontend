import Image from "next/image";
import Hero from "@/components/Hero";
import SectionTitle from "@/components/SectionTitle";
import TeamSection from "@/components/TeamSection";

export default function AboutPage() {
  return (
    <main className="relative text-[#f0f0f0] min-h-screen">
      {/* Content */}
      <div className="relative z-10">
        {/* Hero */}
        <Hero
          title="Trusted Technicians. Proven Results."
          subtitle="Zamsam Engineering delivers expert refrigeration and air conditioning services with professionalism and precision."
          buttonText="Meet Our Team"
          buttonLink="#team"
          note="Serving Harare and surrounding areas with pride."
        />

        {/* About Section */}
        <section className="py-16 px-6 rounded-xl">
          <div className="px-6 mx-auto text-center rounded-xl p-8" style={{backgroundColor:'rgba(0,0,0,0.9)'}}>
            <SectionTitle
              title="Who We Are"
              subtitle="Reliable, certified, and customer-focused — our technicians bring years of experience to every job."
              titleColor="#00ccff"
              subtitleColor="#f0f0f0"
              align="center"
            />
            <p className="text-lg mb-6">
              Zamsam Engineering is built on a foundation of technical
              excellence and customer trust. Our team of certified technicians
              is known for professionalism, punctuality, and precision — whether
              servicing a domestic split unit or installing a full-scale
              industrial cold room.
            </p>
            <p className="text-lg mb-6">
              We believe in doing things right the first time. Every repair,
              installation, and service call is handled with care, backed by
              deep expertise and a commitment to long-term performance.
            </p>
          </div>
        </section>

                {/* Mobility Section */}
        <section id="mobility" className="py-20 px-6">
          <div
            className="max-w-5xl mx-auto rounded-xl p-8 flex flex-col md:flex-row items-center gap-8"
            style={{ backgroundColor: "rgba(0,0,0,0.9)" }}
          >
            {/* Text */}
            <div className="flex-1 text-center md:text-left">
              <SectionTitle
                title="Mobile & Fully Equipped"
                subtitle="Our technicians are always on the move — bringing expertise and equipment directly to you."
                titleColor="#00ccff"
                subtitleColor="#f0f0f0"
                align="left"
              />
              <p className="text-lg mt-6">
                Zamsam Engineering operates from a dedicated workshop where
                complex repairs and system builds are handled with care. This
                base ensures our technicians have access to specialized tools
                and resources for high‑quality results.
              </p>
              <p className="text-lg mt-4">
                Beyond the workshop, our team is fully prepared for outside
                jobs. With vehicles stocked for service calls, we bring the
                same level of professionalism and equipment directly to your
                site — whether it’s a home, office, or industrial facility.
              </p>
            </div>

            {/* Vehicle Image */}
            <div className="flex-1 flex justify-center">
              <Image
                src="/images/about/zamsamtruck.jpg" // replace with your branded truck image path
                alt="Zamsam Service Truck"
                width={500}
                height={300}
                className="rounded-lg border-4 border-[#00ccff]"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </section>


        {/* Team Section */}
        <div className="px-6 rounded-xl">
          <TeamSection />
        </div>

        {/* Services Section */}
        <section id="services" className="py-20 px-6">
          <div className="max-w-5xl mx-auto rounded-xl p-8" style={{backgroundColor:'rgba(0,0,0,0.9)'}}>
            <SectionTitle
              title="Our Services"
              subtitle="Comprehensive cooling solutions for homes and businesses."
              titleColor="#00ccff"
              subtitleColor="#f0f0f0"
              align="center"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-[var(--color-accent-cyan)]">
                  Repairs
                </h3>
                <ul className="list-disc list-inside">
                  <li>Domestic refrigeration and aircon repairs</li>
                  <li>Industrial cold room and freezer repairs</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-[var(--color-accent-cyan)]">
                  Unit Servicing
                </h3>
                <ul className="list-disc list-inside">
                  <li>Routine maintenance for domestic units</li>
                  <li>Commercial servicing for industrial systems</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-[var(--color-accent-cyan)]">
                  Installations
                </h3>
                <ul className="list-disc list-inside">
                  <li>Cold room design and installation</li>
                  <li>Air conditioning setup for homes and offices</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
