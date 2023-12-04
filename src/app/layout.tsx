import Menu from "@/components/menu/menu";
import { Inter } from "next/font/google";
import React from "react";
import RecoilRootWrapper from "./recoilRootWrapper";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className} style={{ background: "#F3F5F5" }}>
        <RecoilRootWrapper>
          <Menu />
          {children}
        </RecoilRootWrapper>
      </body>
    </html>
  );
}
