import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chinmay Karnik",
  description: "Chinmay Karnik",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
