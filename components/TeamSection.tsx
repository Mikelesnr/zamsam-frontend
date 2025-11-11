import SectionTitle from "./SectionTitle";
import TeamCarousel from "./TeamCarousel";
import Image from "next/image";

const teamMembers = [
  {
    name: "Michael Mwanza Snr",
    role: "Director",
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
      className="py-20 px-6 relative z-10"
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
          <Image
            src="/images/team-image.png"
            alt="Zamsam Engineering Team"
            width={800}
            height={500}
            className="rounded-lg shadow-lg mx-auto"
          />
        </div>

        <TeamCarousel members={teamMembers} />
      </div>
    </section>
  );
}
