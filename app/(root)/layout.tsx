import { Inter } from "next/font/google";
import "../globals.css";
import Header from "@/components/shared/header";
import Footer from "@/components/footer";

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
      <div className={`${inter.className} antialiased flex-grow`}>
        {children}
      </div>
      <Footer />
    </div>
  );
}
