import type { ReactNode } from "react";
import TopBar from "@/shared/components/main/Header";
import NavBar from "@/shared/components/main/NavBar";

interface MainProps {
  children: ReactNode;
}

export default function Main({ children }: MainProps) {
  return (
    <>
      <TopBar />
      <main className="pt-20 pb-24 space-y-stack-lg">{children}</main>
      <NavBar />
    </>
  );
}
