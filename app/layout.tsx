"use client";
import Header from "./components/layout/Header";
import SideBar from "./components/layout/SideBar";
useStore;
import "./globals.css";
import useStore from "./store";

export default function RootLayout({ children }: any) {
  const { login } = useStore();

  return (
    <html lang="en">
      <body className="">
        <div className="overflow-x-hidden z-30">
          <Header />
          <div className="flex">
            <SideBar />
            <main className={`p-4 mt-20  ${login ? " ml-32" : ""} w-full `}>
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
