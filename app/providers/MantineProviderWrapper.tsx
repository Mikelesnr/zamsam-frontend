// app/MantineProviderWrapper.tsx (CLIENT COMPONENT)

"use client";

import { MantineProvider, createTheme } from "@mantine/core";

// NOTE: We don't re-import the fonts here, as they are already loaded
// and applied as CSS variables by the root layout.

// 2. Define the Custom Mantine Theme
const theme = createTheme({
  // --- COLOR MODIFICATION ---
  // Mantine has default 'blue' and 'cyan' palettes which are close to your brand.
  // We set the primary color to 'blue' to ensure Mantine components match the branding.
  primaryColor: "blue",

  // If you wanted to use the custom blue/cyan colors from globals.css inside Mantine:
  // colors: {
  //   'zamsam-blue': ['#E9EDFC', '#C1CCF6', '#99ABF0', '#7189EA', '#4968E4', '#003366', '#1A39B2', '#142B85', '#0D1D59', '#070E2C'], // A custom 10-shade palette is required
  // },
  // primaryColor: 'zamsam-blue',

  // --- FONT MODIFICATION ---
  // Use the CSS variable directly as a string, which is the reliable method
  // when defining the theme in a separate Client Component.
  fontFamily: "var(--font-roboto), sans-serif",

  headings: {
    fontFamily: "var(--font-merriweather), serif",
  },

  // You can also apply the base font size if desired
  // defaultFontSize: 'md',
});

// 3. Define the Wrapper Component
export function MantineProviderWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return <MantineProvider theme={theme}>{children}</MantineProvider>;
}
