"use client";
import "./globals.css";
import Button from "@/components/Button";
import ReduxProvider from "@/providers/reduxProviders";
import { useRouter } from "next/navigation";
import { Toaster } from "react-hot-toast";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col overflow-x-hidden w-screen h-screen">
        <ReduxProvider>{children}</ReduxProvider>
        <Toaster position="bottom-right" reverseOrder={false} />
      </body>
    </html>
  );
}
