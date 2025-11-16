// components/CTA.tsx
import React from "react";
import { Box, Container, Text, Button } from "@mantine/core";
import { IconPhoneCall } from "@tabler/icons-react";
import classes from "@/styles/CTA.module.css";
import SectionTitle from "./SectionTitle";

const CTA: React.FC = () => {
  // const theme = useMantineTheme();

  return (
    <Box id="contact" py={160} ta="center" className={classes.ctaSection}>
      <Container size="md" pb="xl">
        <SectionTitle
          title="Need Urgent Service?"
          subtitle="Call Zamsam Engineering Now."
          align="center"
          titleColor="#fffefeff"
          subtitleColor="#ffffffff"
        />

        <Text size="lg" mb="xl" fw={300}>
          Fast, reliable repairs and maintenance to keep your systems running
          efficiently.
        </Text>

        <Button
          component="a"
          href="tel:+263773296227"
          color="cyan"
          size="xl"
          radius="lg"
          fw={800}
          className={classes.ctaButton}
        >
          <span className={classes.ctaText}>
          <IconPhoneCall size={24} /> CALL FOR EMERGENCY REPAIR
          </span>
        </Button>

        <Text mt="xl" size="md" opacity={0.9}>
          <Text span fw={600} mr="sm">
            Office:
          </Text>{" "}
          +263 773 296 227 |
          <Text span fw={600} mx="sm">
            Email:
          </Text>{" "}
          zamsamrefrigeration@gmail.com
        </Text>
      </Container>
    </Box>
  );
};

export default CTA;
