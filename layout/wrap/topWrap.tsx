"use client"
import {Footer} from "@/layout/components/footer/footer";
import {Header} from "@/layout/components/header/header";
import {ReactNode} from "react";


export function TopWrap({ children }: { children: ReactNode}) {
  return (
    <>
        <Header/>
            {children}
        <Footer/>
    </>
  );
}