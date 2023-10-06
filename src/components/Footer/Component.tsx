import Page from "@shared/Component/Page";
import { ReactNode } from "react";
import Content from "./Content";

export default function Footer(): ReactNode {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <path
          fill="#0A121E"
          fillOpacity="1"
          d="M0,64L80,58.7C160,53,320,43,480,80C640,117,800,203,960,197.3C1120,192,1280,96,1360,48L1440,0L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
      </svg>
      <section className="bg-[#0A121E]">
        <Page id="footer">
          <div className="w-full mx-auto lg:container flex flex-col lg:flex-row justify-between py-5 space-y-5 lg:space-y-0">
            <Content
              title="Company"
              list={["Privacy Policy", "Cookies Policy"]}
            />
            <Content title="Product" list={["Mock", "Mock", "Mock", "Mock"]} />
            <Content
              title="Knowledge"
              list={["Mock", "Mock", "Mock", "Mock"]}
            />
            <Content
              title="Something"
              list={["Mock", "Mock", "Mock", "Mock"]}
            />
          </div>
          <div className="w-full mx-auto lg:container flex lg:justify-start justify-center py-5">
            <p className="text-white text-base lg:text-lg">
              © Copyright 2021 My Saas Startup
            </p>
          </div>
        </Page>
      </section>
    </>
  );
}
