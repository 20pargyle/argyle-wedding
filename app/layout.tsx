import ToastProvider from "@/components/toast-provider";
import "./globals.css";
import type { Metadata } from "next";
import { Lato } from "next/font/google";

export const metadata: Metadata = {
  title: "Meg and Carter",
  description: "Wedding Website",
};

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={lato.className}>
        {children}
        <ToastProvider />
      </body>
    </html>
  );
}
