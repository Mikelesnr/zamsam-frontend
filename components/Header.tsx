// components/Header.tsx

"use client";
import React from "react";
import { AppShell, Group, Button, Anchor, Text, Title } from "@mantine/core";
import classes from "@/styles/Header.module.css";

const Header: React.FC = () => {
  // const theme = useMantineTheme();

  return (
    <AppShell.Header>
      {/*
        FIX: Added w="100%" to the Group. This ensures the Group takes up the 
        full width of the header, allowing justify="space-between" to work
        correctly to separate the logo and the navigation.
      */}
      <Group
        className={classes.header}
        justify="space-between"
        align="center"
        h="100%"
        w="100%"
      >
        {/* Logo (Left Side) */}
        <Title order={3} className={classes.logo}>
          Zamsam{" "}
          <Text span inherit className={classes.logoAccent}>
            Engineering
          </Text>
        </Title>

        {/* Navigation Group (Right Side) */}
        <Group className={classes.nav} visibleFrom="sm">
          <Anchor href="/" className={classes.navLink}>
            Home
          </Anchor>
          <Anchor href="/about" className={classes.navLink}>
            About Us
          </Anchor>
          <Anchor href="/contact" className={classes.navLink}>
            Contact Us
          </Anchor>

          <Button
            component="a"
            href="tel:+263773296227"
            className={classes.ctaButton}
            variant="filled"
            radius="md"
          >
            CALL NOW
          </Button>
        </Group>
      </Group>
    </AppShell.Header>
  );
};

export default Header;
