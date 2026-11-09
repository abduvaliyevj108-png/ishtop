import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ishtop - Zamonaviy Ish Qidiruv Platformasi",
  description: "O'zbekistondagi eng so'nggi va daromadli vakansiyalar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uz" suppressHydrationWarning>
      <body className={`${inter.className} flex min-h-screen flex-col justify-between`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div>
            <Navbar />
            {children}
          </div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}