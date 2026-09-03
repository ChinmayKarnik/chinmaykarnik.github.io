import type { Metadata } from "next";
import localFont from "next/font/local";
import StyledComponentsRegistry from "@/lib/registry";
import GlobalStyle from "@/lib/GlobalStyle";

const wotfard = localFont({
  src: [
    {
      path: "../public/fonts/wotfard/wotfard-regular-webfont.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/wotfard/wotfard-regular-italic-webfont.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/fonts/wotfard/wotfard-medium-webfont.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/wotfard/wotfard-semibold-webfont.woff2",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-body",
});

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
    <html lang="en" className={wotfard.variable}>
      <body>
        <StyledComponentsRegistry>
          <GlobalStyle />
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
