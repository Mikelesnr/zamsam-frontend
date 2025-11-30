import SectionTitle from "./SectionTitle";
import TeamCarousel from "./TeamCarousel";
import TeamCircleLayout from "./TeamCircleLayout";

const teamMembers = [
  {
    name: "Michael Mwanza Snr",
    role: "Managing Director",
    image: "/images/about/michael.png",
  },
  {
    name: "Monica Mwanza",
    role: "Director",
    image: "/images/about/monica.png",
  },
  {
    name: "Thomas Manyange",
    role: "Senior Technician",
    image: "/images/about/thomas.png",
  },
  {
    name: "Lissa Chidhumo",
    role: "Technician",
    image: "/images/about/lisa.png",
  },
  {
    name: "Michael Mwanza Jnr",
    role: "Site Management and Internal Systems Support",
    image: "/images/about/mike.png",
  },
];

export default function TeamSection() {
  return (
    <section
      id="team"
      className="py-20 px-6 relative z-10 rounded-xl"
      style={{
        backgroundColor: "rgba(28, 35, 41, 0.7)", // semi-transparent blue
        backdropFilter: "blur(6px)", // optional: frosted glass effect
      }}
    >
      <div className="max-w-5xl mx-auto text-center">
        <SectionTitle
          title="Meet Our Team"
          subtitle="Skilled professionals committed to quality and service."
          titleColor="#00ccff"
          subtitleColor="#f0f0f0"
          align="center"
        />

        {/* Main team image only on tablet and up */}
        <div className="hidden md:block mt-10 mb-6">
          <TeamCircleLayout
            centerImage="/images/about/michael.png"
            edgeImages={[
              "/images/about/monica.png",
              "/images/about/thomas.png",
              "/images/about/lisa.png",
              "/images/about/mike.png",
            ]}
            backgroundImage="/images/about/zamsamtruck.jpg"
          />
        </div>

        <TeamCarousel members={teamMembers} />
      </div>
    </section>
  );
}
