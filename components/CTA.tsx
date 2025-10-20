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

const CTA: React.FC = () => {
  const theme = useMantineTheme();

  return (
    <Box
      id="contact"
      py={theme.spacing.xl * 4}
      bg={theme.colors.blue[9]}
      sx={{ textAlign: "center" }}
    >
      <Container size="md">
        <Title order={2} mb="md" color="cyan.4">
          Need Urgent Service? Call Zamsam Engineering Now.
        </Title>
        <Text size="lg" mb="xl" color={theme.white} fw={300}>
          Fast, reliable repairs and maintenance to keep your systems running
          efficiently.
        </Text>

        <Button
          component="a"
          href="tel:0800-ZAMSAM"
          color="cyan" // Secondary Accent button
          size="xl"
          radius="lg"
          fw={800}
          leftSection={<IconPhoneCall size={24} />}
          sx={{
            "&:hover": {
              backgroundColor: theme.colors.cyan[5],
              transform: "scale(1.03)",
            },
          }}
        >
          CALL FOR EMERGENCY REPAIR
        </Button>

        <Text mt="xl" size="md" color={theme.white} opacity={0.9}>
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
