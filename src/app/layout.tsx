import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CapSil eccomerce apps",
  description: "CapSil eccomerce apps",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Cormorant:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,300&display=swap"
        rel="stylesheet"
      />

      <body>
        <div className="bg-capsil-bg font-cormorat">{children}</div>
      </body>
    </html>
  );
}
