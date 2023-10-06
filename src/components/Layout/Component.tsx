"use client";
import Footer from "@components/Footer";
import Headers from "@components/Headers";
import Hero from "@components/Hero";
import Service from "@components/Service";
import VissionMission from "@components/VissionMission";
import { ReactNode } from "react";

export default function Layout(): ReactNode {
  return (
    <>
      <div className="border-b lg:sticky lg:top-0 bg-white lg:z-50">
        <Headers />
      </div>
      <Hero />
      <Service />
      <VissionMission />
      <Footer />
    </>
  );
}
