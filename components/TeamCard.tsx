import { Card, Image, Text, Stack } from "@mantine/core";

type Props = {
  name: string;
  role: string;
  image: string;
};

export default function TeamCard({ name, role, image }: Props) {
  return (
    <Card
      shadow="xl"
      padding="xl"
      radius="lg"
      withBorder
      style={{
        backgroundColor: "rgba(0, 119, 182, 0.5)", 
        color: "#ffffff",
        width: 260,
        flexShrink: 0,
        borderRadius: "16px",
        boxShadow: "0 8px 20px rgba(0, 0, 0, 0.25)",
        transition: "transform 0.3s ease",
      }}
      className="hover:scale-105"
    >
      <div className="flex justify-center mb-4">
        <Image
          src={image}
          alt={name}
          height={160}
          width={160}
          fit="cover"
          radius="xl"
          style={{
            borderRadius: "50%",
            objectFit: "cover",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
          }}
        />
      </div>

      <Stack align="center" gap="xs">
        <Text size="lg" fw={700} c="#caf0f8">
          {name}
        </Text>
        <Text size="sm" opacity={0.85}>
          {role}
        </Text>
      </Stack>
    </Card>
  );
}
