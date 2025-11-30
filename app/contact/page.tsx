"use client";

import {
  Container,
  TextInput,
  Textarea,
  Button,
  Stack,
  Paper,
  Notification,
  Group,
  rem,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { IconX } from "@tabler/icons-react";
import api from "@/lib/api";
import { useState } from "react";
import Hero from "@/components/Hero";
import SectionTitle from "@/components/SectionTitle";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validate: {
      name: (value) => (value.length < 2 ? "Your name too short" : null),
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      message: (value) => (value.length < 10 ? "Message too short" : null),
    },
  });

  const handleSubmit = async (values: typeof form.values) => {
    setError(null);
    setSubmitted(false);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!res.ok) {
        throw new Error("Failed to send message");
      }

      setSubmitted(true);
      form.reset();
    } catch (err) {
      console.error("❌ Contact form submission failed:", err);
      setError("Something went wrong. Please try again later.");
    }
  };

  return (
    <div
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        color: "#ffffff",
        minHeight: "100vh",
        paddingBottom: "4rem",
      }}
    >
      <Hero
        title="Contact Us"
        subtitle="We're here to help — reach out anytime."
      />

      <Container size="lg" py="xl" style={{ paddingTop: "2rem" }}>
        <Group
          align="start"
          justify="center"
          wrap="wrap"
          gap="xl"
          style={{ flexDirection: "row" }}
        >
          {/* Contact Form */}
          <div
            style={{ flex: 1, minWidth: 300, maxWidth: 500, margin: "0 auto" }}
          >
            <Paper
              shadow="xl"
              radius="lg"
              p="xl"
              withBorder
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                backdropFilter: "blur(4px)",
                textAlign: "center",
              }}
            >
              <SectionTitle title="Send Us a Message" titleColor="#ffffff" />
              <form onSubmit={form.onSubmit(handleSubmit)}>
                <Stack gap="md">
                  <TextInput
                    label="Your Name"
                    placeholder="John Doe"
                    size="md"
                    radius="md"
                    styles={{ label: { textAlign: "center" } }}
                    {...form.getInputProps("name")}
                  />
                  <TextInput
                    label="Your Email"
                    placeholder="you@example.com"
                    size="md"
                    radius="md"
                    styles={{ label: { textAlign: "center" } }}
                    {...form.getInputProps("email")}
                  />
                  <Textarea
                    label="Message"
                    placeholder="How can we help you?"
                    minRows={4}
                    autosize
                    size="md"
                    radius="md"
                    styles={{ label: { textAlign: "center" } }}
                    {...form.getInputProps("message")}
                  />

                  <Group gap="md" grow>
                    <Button
                      type="submit"
                      size="md"
                      radius="xl"
                      style={{
                        backgroundColor: "rgba(0, 0, 0, 0.4)",
                        color: "#ffffff",
                        padding: "0.6rem 1.5rem",
                        borderRadius: "999px",
                        cursor: "pointer",
                        marginTop: "1rem",
                        marginBottom: "1rem",
                        transition: "background-color 0.3s ease",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor =
                          "rgba(0, 123, 255, 0.2)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor =
                          "rgba(0, 0, 0, 0.4)";
                      }}
                    >
                      Send Message
                    </Button>

                    {submitted && !error && (
                      <Notification
                        color="green"
                        title="Success"
                        withCloseButton={false}
                      >
                        ✅ Message sent successfully!
                      </Notification>
                    )}

                    {error && (
                      <Notification
                        color="red"
                        title="Error"
                        icon={<IconX size={18} />}
                        withCloseButton={false}
                      >
                        {error}
                      </Notification>
                    )}
                  </Group>
                </Stack>
              </form>
            </Paper>
          </div>

          {/* Map Section */}
          <div
            style={{ flex: 1, minWidth: 300, maxWidth: 600, margin: "0 auto" }}
          >
            <SectionTitle title="Visit Us" titleColor="#ffffff" />
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                paddingTop: "1rem",
                paddingBottom: "2rem",
              }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d721.6209735479997!2d31.104307845737015!3d-17.81352205474739!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1931bb9e9e03b89f%3A0xa07a5f0ea326c0cb!2sZamsam%20Engineering!5e1!3m2!1sen!2szw!4v1762531007938!5m2!1sen!2szw"
                width="600"
                height="450"
                style={{
                  border: 0,
                  borderRadius: rem(12),
                  boxShadow: "0 0 12px rgba(0, 0, 0, 0.3)",
                }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </Group>
      </Container>
    </div>
  );
}
