import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "azenprotocol",
  description: "azen official website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="/logo.ico" />
      </head>
      <body
      >
        {children}
      </body>
    </html>
  );
}
