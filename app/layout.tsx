import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Recursive } from 'next/font/google';
import { ThemeProvider } from "@/components/theme-provider";

const recursive = Recursive({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Sahal Belam",
  description: "sahal Belam Developer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={recursive.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
