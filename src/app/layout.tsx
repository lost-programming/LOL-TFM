import React from "react";
import { Inter } from "next/font/google";
import RecoilRootWrapper from "./recoilRootWrapper";
import Menu from "@/components/menu/menu";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <RecoilRootWrapper>
          <Menu />
          {children}
        </RecoilRootWrapper>
      </body>
    </html>
  );
}
