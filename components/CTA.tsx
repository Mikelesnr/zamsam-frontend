// components/CTA.tsx
import React from "react";
import {
  Box,
  Container,
  Title,
  Text,
  Button,
  useMantineTheme,
} from "@mantine/core";
import { IconPhoneCall } from "@tabler/icons-react";
import classes from "@/styles/CTA.module.css";

const CTA: React.FC = () => {
  // const theme = useMantineTheme();

  return (
    <Box id="contact" py={160} ta="center" className={classes.ctaSection}>
      <Container size="md">
        <Title order={2} mb="md" c="cyan.4">
          Need Urgent Service? Call Zamsam Engineering Now.
        </Title>
        <Text size="lg" mb="xl" fw={300}>
          Fast, reliable repairs and maintenance to keep your systems running
          efficiently.
        </Text>

        <Button
          component="a"
          href="tel:0800-ZAMSAM"
          color="cyan"
          size="xl"
          radius="lg"
          fw={800}
          leftSection={<IconPhoneCall size={24} />}
          className={classes.ctaButton}
        >
          CALL FOR EMERGENCY REPAIR
        </Button>

        <Text mt="xl" size="md" opacity={0.9}>
          <Text span fw={600} mr="sm">
            Office:
          </Text>{" "}
          **0800-ZAMSAM** |
          <Text span fw={600} mx="sm">
            Email:
          </Text>{" "}
          info@zamsamengineering.com
        </Text>
      </Container>
    </Box>
  );
};

export default CTA;
