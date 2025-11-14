import type { Metadata } from "next";
import "./globals.css";
import { Cairo } from "next/font/google";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["400", "600", "700"]
});

export const metadata: Metadata = {
  title: "شلاظة نيسواز مغربية",
  description: "سلطة صحية، بنينة، وواجدة في ثواني. تواصل معانا على واتساب وحافظ على صحتك."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={cairo.className}>{children}</body>
    </html>
  );
}
