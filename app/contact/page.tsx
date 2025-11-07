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
      await api.post("/api/contact", values);
      setSubmitted(true);
      form.reset();
    } catch (err: any) {
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
                        backgroundColor: "rgba(0, 0, 0, 0.4)", // transparent black
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
                          "rgba(0, 123, 255, 0.2)"; // transparent blue
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
                position: "relative",
                paddingBottom: "56.25%",
                height: 0,
              }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.9999999999995!2d31.053!3d-17.829!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1931a5f5f5f5f5f5%3A0x123456789abcdef!2sZamsam%20Engineering!5e0!3m2!1sen!2szw!4v1234567890"
                width="100%"
                height="100%"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  border: 0,
                  borderRadius: rem(12),
                }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </Group>
      </Container>
    </div>
  );
}
