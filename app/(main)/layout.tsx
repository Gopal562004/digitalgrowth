import type { Metadata } from "next";
import "@/app/styles/globals.css";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "DigitalGrowth — Engineering Studio, Mumbai",
  description:
    "Lean, founder-led engineering studio in Mumbai building fast websites, digital storefronts, and bespoke web platforms. Direct developer access, zero agency middlemen.",
  icons: {
    icon: [{ url: "/icons/digitalgrowth.png", type: "image/png" }],
    apple: [{ url: "/icons/digitalgrowth.png", type: "image/png" }],
    shortcut: ["/icons/digitalgrowth.png"],
  },
};

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Inter:ital,wght@0,300;0,400;0,500;1,300;1,400&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
        <Toaster
          position="bottom-right"
          toastOptions={{
            style: {
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "11px",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              border: "1px solid #DCD9D0",
              borderRadius: "0",
              background: "#F7F5F0",
              color: "#121211",
              boxShadow: "none",
            },
          }}
        />
      </body>
    </html>
  );
}
