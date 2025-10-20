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
import classes from "@/styles/Services.module.css";

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
      // FIXED: Replaced 'sx' with 'className' to apply custom styling and hover effects
      className={classes.card}
    >
      <div>
        <Title
          order={3}
          // FIXED: Replaced 'sx' with 'className' for title styling
          className={classes.cardTitle}
        >
          {title}
        </Title>

        <List
          // Custom list styling moved to CSS module
          className={classes.list}
          center
          // The icon is still best managed here as it requires theme colors
          icon={<IconCheck size={18} color={theme.colors.blue[9]} />}
        >
          {items.map((item, index) => (
            <ListItem
              key={index}
              // Apply list item styling (spacing, color) via CSS module
              className={classes.listItem}
            >
              {item}
            </ListItem>
          ))}
        </List>
      </div>

      <Button
        component="a"
        href={`#${id}-form`} // Added a unique link target for better UX
        // Apply button class for custom background/hover/transition
        className={classes.cardButton}
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
