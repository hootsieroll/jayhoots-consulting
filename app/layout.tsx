import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "In Session Co. — Engineering Leadership for Startups",
  description:
    "Senior engineering leadership without the full-time overhead. Fractional CTO, front-end architecture, design systems, and team mentorship — with Jay Hoots.",
  openGraph: {
    title: "In Session Co. — Engineering Leadership for Startups",
    description:
      "Senior engineering leadership without the full-time overhead. Fractional CTO, front-end architecture, design systems, and team mentorship.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased bg-bg text-white">{children}</body>
    </html>
  );
}
