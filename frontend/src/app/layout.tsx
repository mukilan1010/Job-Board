"use client";

import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <MantineProvider
          theme={{
            fontFamily: "Inter, sans-serif",
            primaryColor: "blue",
          }}
        >
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
