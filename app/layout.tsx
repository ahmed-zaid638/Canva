"use client";
import Header from "./components/layout/Header";
import SideBar from "./components/layout/SideBar";
import "./globals.css";
import useUser from "./hooks/useUser";
import useStore from "./store";
import { Roboto } from "next/font/google";
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export default function RootLayout({ children }: any) {
  const { login } = useStore();

  return (
    <html lang="en">
      <body className={roboto.className}>
        <div className="overflow-x-hidden z-30">
          <Header />
          <div className="flex">
            <SideBar />
            <main className={` mt-20  ${login ? " ml-32" : ""} w-full `}>
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
