import { Mulish, Nunito } from "next/font/google";
import "./globals.css";

const mulish = Mulish({
  subsets: ["latin"],
  weight: ["400", "500", "700", "800", "900"],
  variable: "--font-mulish",
});

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-nunito",
});

export const metadata = {
  title: "Sprout - Budgeting, but make it campus-simple",
  description: "Sprout is the chat-first money buddy that turns rent, ramen, and random paychecks into a clear spending plan—no spreadsheets, no stress.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${mulish.variable} ${nunito.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
