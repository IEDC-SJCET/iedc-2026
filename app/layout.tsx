import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "IEDC BOOTCAMP SJCET",
  description:
    "",
  openGraph: {
    title: "IEDC BOOTCAMP SJCET",
    description:
      "",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
