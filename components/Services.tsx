// components/Services.tsx
import React from "react";
import { Box, Title, Container, Card, List, Button } from "@mantine/core";
import SectionTitle from "./SectionTitle";

import classes from "@/styles/Services.module.css";

const Services: React.FC = () => {
  // const theme = useMantineTheme();

  const installations: string[] = [
    "Cold Room Installation (Custom & Prefab)",
    "Air Conditioning Installations (Residential & Commercial)",
  ];

  const repairs: string[] = [
    "Refrigerator Repairs (Domestic & Commercial)",
    "Cold Room Repairs & Maintenance",
    "Air Conditioning Repairs (NAS, Split, Central)",
    "Service for Working Refrigeration Appliances",
  ];

  const ServiceCard = ({
    title,
    items,
  }: {
    title: string;
    items: string[];
  }) => (
    <Card shadow="md" padding="lg" radius="md" withBorder>
      <Title order={3} mb="md" style={{ color: "#00ccff" }}>
        {title}
      </Title>
      <List spacing="sm" size="md" center style={{ color: "white" }}>
        {items.map((item, index) => (
          <List.Item key={index}>{item}</List.Item>
        ))}
      </List>
      <Button mt="lg" color="blue" variant="filled">
        Get Service
      </Button>
    </Card>
  );

  return (
    <Box
      id="services"
      // Use the CSS Module class for section padding, background, and text alignment
      className={classes.servicesSection}
    >
      <Container size="lg">
        <SectionTitle
          title="Our Services"
          subtitle="We handle everything from new **installations** to reliable emergency
          **repairs**"
          align="center"
          titleColor="#ffffff"
          subtitleColor="#ffffff"
        />

        {/* Use a wrapper class around the Grid for layout control (cardContainer) */}
        <div>
          <div className={classes.cardContainer}>
            <ServiceCard
              title="Installations & Upgrades"
              items={installations}
            />
            <ServiceCard title="Repairs & Servicing" items={repairs} />
          </div>
        </div>
      </Container>
    </Box>
  );
};

export default Services;
