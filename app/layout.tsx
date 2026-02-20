import type { Metadata } from "next";
import { Imperial_Script, Playfair_Display, Gentium_Book_Plus } from "next/font/google";
import "./globals.css";


/* Custom Font */
const gentium = Gentium_Book_Plus({
  subsets: ["latin"],
  weight: ["400", "700"], // regular + bold
  variable: "--font-gentium",
});

/* Custom Font */
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair",
});

const imperialScript = Imperial_Script({
  subsets: ["latin"],
  weight: "400", // only one available weight
  variable: "--font-imperial-script", // CSS variable name
});

const BASE_DOMAIN = process.env.NEXT_PUBLIC_URL ?? ""


export const metadata: Metadata = {
  title: "Andre and Mariel Wedding",
  description: "Celebrate the special day of Andre and Mariel with details about their wedding, venue, and faq.",
  openGraph: {
    title: "Andre and Mariel Wedding",
    description: "Celebrate the special day of Andre and Mariel with details about their wedding, venue, and faq.",
    url: BASE_DOMAIN,
    images: [`${BASE_DOMAIN}/preview-image.png`], // Absolute URL
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${gentium.variable} ${playfair.variable} ${imperialScript.variable} antialiased bg-[#faf8f1]`}
      >
        {children}
      </body>
    </html>
  );
}
