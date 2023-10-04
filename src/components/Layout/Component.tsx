"use client";
import Headers from "@components/Headers";
import Hero from "@components/Hero";
import { ReactNode } from "react";

export default function Layout(): ReactNode {
  return (
    <>
      <div className="border-b">
        <Headers />
      </div>
      <Hero />
    </>
  );
}
