import type { Metadata } from "next";
import "./globals.css";
import Providers from "./providers";

export const metadata: Metadata = {
  title: "Freelanceify | simplifies the freelance experiences",
  description: "Generated by create next app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <Providers>
          <div>{children}</div>
          {/* <div className="container xl:max-w-screen-xl">{children}</div> */}
        </Providers>
      </body>
    </html>
  );
}
