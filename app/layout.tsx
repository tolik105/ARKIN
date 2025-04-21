import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ThemeProvider } from "next-themes";
import Script from "next/script";
import { FloatingToggle } from "@/components/floating-toggle";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AKRIN | Modern Web Solutions",
  description:
    "AKRIN is your trusted partner for modern web solutions. Built with Next.js, Tailwind CSS, TypeScript and framer motion.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script src="https://cal.com/embed.js" strategy="lazyOnload" />
      </head>
      <body
        className={cn("antialiased dark:bg-black bg-white", inter.className)}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <Footer />
          <FloatingToggle />
        </ThemeProvider>
      </body>
    </html>
  );
}
