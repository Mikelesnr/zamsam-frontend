// components/Hero.tsx
import React from "react";
import {
  Box,
  Container,
  Title,
  Text,
  Button,
  useMantineTheme,
} from "@mantine/core";

const Hero: React.FC = () => {
  const theme = useMantineTheme();

  return (
    <Box
      sx={{
        // Mimicking the Deep Arctic Blue background with opacity/image effect
        minHeight: 450,
        display: "flex",
        alignItems: "center",
        textAlign: "center",
        padding: theme.spacing.xl * 3,
        backgroundImage:
          'linear-gradient(to right, rgba(0, 51, 102, 0.9), rgba(0, 51, 102, 0.7)), url("/images/hero-bg.jpg")',
        backgroundSize: "cover",
        color: theme.white,
      }}
    >
      <Container size="md">
        <Title
          order={1}
          sx={{
            fontSize: "3rem",
            marginBottom: theme.spacing.md,
            color: theme.colors.cyan[4], // Secondary Accent for H1
          }}
        >
          Expert Refrigeration & Air Conditioning Solutions
        </Title>

        <Text size="xl" mb="xl" fw={300}>
          Reliable Cold Room Installation, AC Repairs, and Commercial Servicing
          for all your cooling needs.
        </Text>

        <Button
          component="a"
          href="#contact"
          color="blue" // Primary Blue for button
          size="lg"
          radius="md"
          fw={700}
          sx={{
            // Custom styling for strong contrast
            border: `2px solid ${theme.colors.cyan[4]}`,
            boxShadow: theme.shadows.xl,
            "&:hover": {
              backgroundColor: theme.colors.blue[8],
            },
          }}
        >
          Request a Free Consultation
        </Button>

        <Text mt="xl" size="sm" opacity={0.8}>
          Servicing All Working Refrigeration Appliances
        </Text>
      </Container>
    </Box>
  );
};

export default Hero;
