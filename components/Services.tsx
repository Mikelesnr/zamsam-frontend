// components/Services.tsx
import React from "react";
import {
  Box,
  Title,
  Text,
  Container,
  Grid,
  useMantineTheme,
} from "@mantine/core";
import ServiceCard from "@/components/ServiceCard";

const Services: React.FC = () => {
  const theme = useMantineTheme();

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

  return (
    <Box
      id="services"
      py={theme.spacing.xl * 3}
      bg={theme.colors.gray[1]}
      sx={{ textAlign: "center" }}
    >
      <Container size="lg">
        <Title order={2} mb="md" color="blue.9">
          Our Expert Cooling Services
        </Title>
        <Text size="lg" mb={theme.spacing.xl * 2}>
          We handle everything from new **installations** to reliable emergency
          **repairs**.
        </Text>

        <Grid gutter="xl">
          <Grid.Col span={{ base: 12, sm: 6 }}>
            <ServiceCard
              id="installations"
              title="Installations & Upgrades"
              items={installations}
            />
          </Grid.Col>
          <Grid.Col span={{ base: 12, sm: 6 }}>
            <ServiceCard
              id="repairs"
              title="Repairs & Servicing"
              items={repairs}
            />
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;
