import { Inter } from "next/font/google";
import "../globals.css";
import Header from "@/components/ui/shared/header";

const inter = Inter({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen flex-col">
      <Header />
      <div className={`${inter.className} antialiased`}>{children}</div>
    </div>
  );
}
