import type { Metadata } from "next";
import "./globals.css";
import ReduxProvider from "./Provider";


export const metadata: Metadata = {
  title: "Nestor news",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ReduxProvider>
          {children}
        </ReduxProvider>
      </body>
    </html>
  );
}
