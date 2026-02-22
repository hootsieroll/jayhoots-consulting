import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jay Hoots — Fractional CTO & Engineering Leader",
  description:
    "Senior engineering leadership for startups and growing companies. Fractional CTO, front-end architecture, design systems, and team mentorship.",
  openGraph: {
    title: "Jay Hoots — Fractional CTO & Engineering Leader",
    description:
      "I help startups and growing companies build better software, make smarter architecture decisions, and scale with confidence.",
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
