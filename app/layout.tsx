import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Ishit Aron | Profile Dashboard",
  description: "Full Stack Developer & Computer Science Student - Portfolio Dashboard showcasing projects, skills, and experience in a DevOps monitoring style interface.",
  keywords: ["Ishit Aron", "Full Stack Developer", "Portfolio", "React", "Next.js", "DevOps", "Dashboard"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body
        className={`${jetbrainsMono.variable} font-mono antialiased bg-devops-navy min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
