import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import StyledComponentsRegistry from "@/lib/registry";
import GlobalStyle from "@/lib/GlobalStyle";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
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
    <html lang="en" className={plusJakartaSans.variable}>
      <body>
        <StyledComponentsRegistry>
          <GlobalStyle />
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
