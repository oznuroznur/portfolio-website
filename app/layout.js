import { DM_Sans, Inter } from "next/font/google";

import Preloader from "@/layout/Preloader";
import "../public/assets/css/animate.min.css";
import "../public/assets/css/bootstrap.min.css";
import "../public/assets/css/flaticon.min.css";
import "../public/assets/css/fontawesome-5.14.0.min.css";
import "../public/assets/css/nice-select.min.css";
import "../public/assets/css/slick.min.css";
import "../public/assets/css/style.css";
import "./globals.css";

/** google fonts */
const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-inter",
  display: "swap",
});
const dm_sans = DM_Sans({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-dm_sans",
  display: "swap",
});

/** Font family */
const fontFamily = `${inter.variable} ${dm_sans.variable} `;

export const metadata = {
  title: {
    template:
      "Öznur | Personal Portfolio",
    default:
      "Öznur | Personal Portfolio ", // a default is required when creating a template
  },
  description: "Öznur | Personal Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${fontFamily} scroll-smooth`}>
      <head>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />
        <meta
          name="description"
          content={metadata.description}
        />
        <title>{metadata.title.default}</title>
        <link rel="icon" href="/assets/images/hero/banner.png" />
      </head>
      <body>
        <Preloader />
        {children}
      </body>
    </html>
  );
}
