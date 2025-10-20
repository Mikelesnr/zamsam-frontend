// components/Header.tsx
import React from "react";
import {
  AppShell,
  Group,
  Button,
  Anchor,
  Text,
  Title,
  useMantineTheme,
} from "@mantine/core";

const Header: React.FC = () => {
  const theme = useMantineTheme();

  return (
    <AppShell.Header p="md">
      <Group justify="space-between" align="center" h="100%">
        <Title
          order={3}
          sx={{
            fontWeight: 700,
            color: theme.colors.blue[9], // Deep Arctic Blue
          }}
        >
          Zamsam{" "}
          <Text
            span
            inherit
            sx={{
              fontSize: "1.1rem",
              fontWeight: 500,
              color: theme.colors.gray[8],
            }}
          >
            Engineering
          </Text>
        </Title>

        <Group gap="lg" visibleFrom="sm">
          <Anchor href="#services" c="dark" fw={500}>
            Services
          </Anchor>
          <Anchor href="#installations" c="dark" fw={500}>
            Installations
          </Anchor>
          <Anchor href="#repairs" c="dark" fw={500}>
            Repairs
          </Anchor>

          <Button
            component="a"
            href="tel:0800-ZAMSAM"
            color="cyan" // Cyan Ice
            variant="light"
            radius="md"
            fw={600}
          >
            CALL NOW
          </Button>
        </Group>
      </Group>
    </AppShell.Header>
  );
};

export default Header;
