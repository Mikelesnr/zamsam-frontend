"use client";

import { Carousel } from "@mantine/carousel";
import Autoplay from "embla-carousel-autoplay";
import TeamCard from "./TeamCard";
import "@mantine/carousel/styles.css";

type Member = {
  name: string;
  role: string;
  image: string;
};

type Props = {
  members: Member[];
};

export default function TeamCarousel({ members }: Props) {
  return (
    <div className="max-w-full px-4">
      <Carousel
  withControls
  withIndicators={false}
  slideGap="sm"
  plugins={[Autoplay({ delay: 4000 })]}
  slideSize={{ base: "80%", sm: "50%", lg: "33.3333%" }}
  styles={{
    viewport: { overflow: "hidden" },
    container: { justifyContent: "flex-start" }, 
    controls: {
      top: "50%",
      transform: "translateY(-50%)",
      justifyContent: "space-between",
    },
    control: {
      backgroundColor: "#003366",
      color: "#ffffff",
      borderRadius: "50%",
      width: 36,
      height: 36,
      boxShadow: "0 2px 6px rgba(0,0,0,0.3)",
    },
  }}
>
        {members.map((member: Member) => (
          <Carousel.Slide key={member.name}>
            <div className="flex justify- px-2">
              <TeamCard {...member} />
            </div>
          </Carousel.Slide>
        ))}
      </Carousel>
    </div>
  );
}
