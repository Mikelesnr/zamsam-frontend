// components/Hero.tsx
import React from "react";
import {
  Box,
  Container,
  Title,
  Text,
  Button,
  useMantineTheme,
  Overlay,
} from "@mantine/core";
import Image from "next/image"; // Import the Next.js Image component
import classes from "@/styles/Hero.module.css";

const Hero: React.FC = () => {
  const theme = useMantineTheme();

  return (
    <Box className={classes.hero}>
      {/* Dark Overlay for Text Readability */}
      <Overlay color="#000" opacity={0.6} zIndex={0} />

      {/* Hero Content */}
      <Container size="md" className={classes.content}>
        <Title
          order={1}
          style={{
            fontSize: "3rem",
            marginBottom: theme.spacing.md,
            color: theme.colors.cyan[4],
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
          color="blue"
          size="lg"
          radius="md"
          fw={700}
          style={{
            border: `2px solid ${theme.colors.cyan[4]}`,
            boxShadow: theme.shadows.xl,
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
