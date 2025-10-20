// /components/Footer.tsx

import {
  Text,
  Container,
  ActionIcon,
  Group,
  rem,
  Title,
  Anchor,
} from "@mantine/core";
import {
  IconBrandFacebook,
  IconBrandLinkedin,
  IconBrandWhatsapp,
  IconPhone,
  IconMail,
} from "@tabler/icons-react";
import classes from "@/styles/Footer.module.css";

const data = [
  {
    title: "Our Services",
    links: [
      { label: "Cold Room Installations", link: "#" },
      { label: "Air Conditioning Installations", link: "#" },
      { label: "Refrigeration Repairs", link: "#" },
      { label: "Scheduled Servicing & Maintenance", link: "#" },
      { label: "24/7 Emergency Call-outs", link: "#" },
    ],
  },
  {
    title: "Quick Links",
    links: [
      { label: "Home", link: "/" },
      { label: "About Us", link: "/about" },
      { label: "Our Work", link: "/gallery" },
      { label: "Request a Quote", link: "/quote" },
      { label: "Contact Us", link: "/contact" },
    ],
  },
];

export default function Footer() {
  const groups = data.map((group) => {
    const links = group.links.map((link, index) => (
      <Anchor<"a">
        key={index}
        className={classes.link}
        href={link.link}
        onClick={(event) => event.preventDefault()} // Replace with Next.js <Link> or router.push
      >
        {link.label}
      </Anchor>
    ));

    return (
      <div className={classes.wrapper} key={group.title}>
        <Title order={4} className={classes.title}>
          {group.title}
        </Title>
        {links}
      </div>
    );
  });

  return (
    <footer className={classes.footer}>
      <Container size="lg" className={classes.inner}>
        <div className={classes.logo}>
          <Title order={2} className={classes.logoText}>
            <span>Zam</span>Sam
          </Title>
          <Text size="xs" c="dimmed" className={classes.description}>
            Your trusted partner for all refrigeration needs. Expert
            installation, servicing, and repair of cold rooms and air
            conditioning systems.
          </Text>
          <Group mt="md">
            <IconPhone
              style={{ width: rem(18), height: rem(18) }}
              stroke={1.5}
            />
            <Text size="sm">123-456-7890 (Emergency)</Text>
          </Group>
          <Group>
            <IconMail
              style={{ width: rem(18), height: rem(18) }}
              stroke={1.5}
            />
            <Text size="sm">service@zamsam.com</Text>
          </Group>
        </div>
        <div className={classes.groups}>{groups}</div>
      </Container>
      <Container size="lg" className={classes.afterFooter}>
        <Text c="dimmed" size="sm">
          © {new Date().getFullYear()} ZamSam Refrigeration. All rights
          reserved.
        </Text>

        <Group gap="xs" justify="flex-end" wrap="nowrap">
          <ActionIcon size="lg" variant="default" radius="xl">
            <IconBrandFacebook
              style={{ width: rem(18), height: rem(18) }}
              stroke={1.5}
            />
          </ActionIcon>
          <ActionIcon size="lg" variant="default" radius="xl">
            <IconBrandLinkedin
              style={{ width: rem(18), height: rem(18) }}
              stroke={1.5}
            />
          </ActionIcon>
          <ActionIcon size="lg" variant="default" radius="xl">
            <IconBrandWhatsapp
              style={{ width: rem(18), height: rem(18) }}
              stroke={1.5}
            />
          </ActionIcon>
        </Group>
      </Container>
    </footer>
  );
}
