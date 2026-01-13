import { Analytics } from "@vercel/analytics/react";
import Navbar from "@/app/_components/layout/Navbar";
import Footer from "@/app/_components/layout/Footer";
import Meta from "@/app/_components/seo/Meta";
import "@/app/styles/globals.css";

// export const metadata = {
//   title: "DigitalGrowth | Web Development & SEO Agency",
//   description:
//     "Helping small businesses grow with custom websites, SEO optimization, and digital solutions.",
// };


export const metadata = {
  title: "DigitalGrowth | Web Development & SEO Agency",
  description:
    "Helping small businesses grow with custom websites, SEO optimization, and digital solutions.",
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
        <Meta />
      </head>
      <body>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
        {/* Add Analytics here - after all content */}
        <Analytics />
      </body>
    </html>
  );
}
