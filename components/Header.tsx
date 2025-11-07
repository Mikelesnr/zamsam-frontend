"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { AppShell, Group, Button, Text, Title } from "@mantine/core";
import {
  IconHome,
  IconInfoCircle,
  IconPhoneCall,
  IconMenu2,
  IconX,
} from "@tabler/icons-react";
import { usePathname } from "next/navigation";
import classes from "@/styles/Header.module.css";

const MOBILE_BREAKPOINT = 840;

const Header: React.FC = () => {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  // ✅ Auto-close mobile menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= MOBILE_BREAKPOINT) {
        setMobileOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navLinks = [
    { label: "Home", href: "/", icon: <IconHome size={16} /> },
    { label: "About Us", href: "/about", icon: <IconInfoCircle size={16} /> },
    {
      label: "Contact Us",
      href: "/contact",
      icon: <IconPhoneCall size={16} />,
    },
  ];

  return (
    <AppShell.Header>
      <div className={classes.header}>
        {/* Logo */}
        <Title order={3} className={classes.logo}>
          Zamsam{" "}
          <Text span inherit className={classes.logoAccent}>
            Engineering
          </Text>
        </Title>

        {/* Desktop Nav */}
        <Group className={classes.nav} visibleFrom="sm">
          {navLinks.map(({ label, href, icon }) => (
            <Link
              key={href}
              href={href}
              className={`${classes.navLink} ${
                pathname === href ? classes.activeLink : ""
              }`}
            >
              <Group gap={6} align="center">
                <Text className={classes.navText}>
                  {icon} {label}
                </Text>
              </Group>
            </Link>
          ))}
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

        {/* Mobile Burger */}
        <button
          className={classes.burger}
          onClick={() => setMobileOpen((prev) => !prev)}
        >
          {mobileOpen ? <IconX size={24} /> : <IconMenu2 size={24} />}
        </button>
      </div>

      {/* Mobile Nav Menu */}
      {mobileOpen && (
        <div className={classes.mobileMenu}>
          {navLinks.map(({ label, href, icon }) => (
            <Link
              key={href}
              href={href}
              className={`${classes.navLink} ${
                pathname === href ? classes.activeLink : ""
              }`}
              onClick={() => setMobileOpen(false)}
            >
              <Group gap={6} align="center">
                <Text className={classes.navText}>
                  {icon} {label}
                </Text>
              </Group>
            </Link>
          ))}
          <Button
            component="a"
            href="tel:+263773296227"
            className={classes.ctaButton}
            variant="filled"
            radius="md"
            fullWidth
            mt="md"
          >
            CALL NOW
          </Button>
        </div>
      )}
    </AppShell.Header>
  );
};

export default Header;
