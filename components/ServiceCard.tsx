// components/ServiceCard.tsx
import React from "react";
import {
  Card,
  Title,
  List,
  ListItem,
  Button,
  useMantineTheme,
} from "@mantine/core";
import { IconCheck } from "@tabler/icons-react";

// Define the Props for ServiceCard
interface ServiceCardProps {
  title: string;
  items: string[];
  id: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, items, id }) => {
  const theme = useMantineTheme();

  return (
    <Card
      id={id}
      shadow="lg"
      padding="xl"
      radius="md"
      withBorder
      sx={{
        flex: 1,
        minHeight: 400,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        transition: "transform 0.3s",
        "&:hover": {
          transform: "translateY(-5px)",
          boxShadow: theme.shadows.xl,
        },
      }}
    >
      <div>
        <Title
          order={3}
          sx={{
            color: theme.colors.cyan[6], // Secondary Accent
            borderBottom: `2px solid ${theme.colors.blue[9]}`,
            paddingBottom: theme.spacing.sm,
            marginBottom: theme.spacing.xl,
          }}
        >
          {title}
        </Title>

        <List
          spacing="sm"
          size="md"
          center
          icon={<IconCheck size={18} color={theme.colors.blue[9]} />}
        >
          {items.map((item, index) => (
            <ListItem key={index}>{item}</ListItem>
          ))}
        </List>
      </div>

      <Button
        component="a"
        href="#contact"
        color="blue"
        radius="sm"
        mt="md"
        fullWidth
      >
        Get a Quote
      </Button>
    </Card>
  );
};

export default ServiceCard;
