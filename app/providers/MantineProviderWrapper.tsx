"use client";

import { MantineProvider, createTheme, AppShell } from "@mantine/core";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const theme = createTheme({
  primaryColor: "blue",
  fontFamily: "var(--font-roboto), sans-serif",
  headings: {
    fontFamily: "var(--font-merriweather), serif",
  },
});

export function MantineProviderWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <MantineProvider theme={theme}>
      <AppShell header={{ height: 80 }} footer={{ height: 120 }} padding="md">
        <AppShell.Header>
          <Header />
        </AppShell.Header>

        <AppShell.Main>{children}</AppShell.Main>

        <AppShell.Footer>
          <Footer />
        </AppShell.Footer>
      </AppShell>
    </MantineProvider>
  );
}
