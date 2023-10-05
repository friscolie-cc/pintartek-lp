"use client";
import Headers from "@components/Headers";
import Hero from "@components/Hero";
import Service from "@components/Service";
import VissionMission from "@components/VissionMission";
import { ReactNode } from "react";

export default function Layout(): ReactNode {
  return (
    <>
      <div className="border-b">
        <Headers />
      </div>
      <Hero />
      <Service />
      <VissionMission />
    </>
  );
}
