import Page from "@shared/Component/Page";
import { ReactNode } from "react";
import Image from "next/image";
import { poppins } from "@shared/Utils";
import Content from "./Content/Component";
import { Services } from "@shared/Constant/Services";

export default function Service(): ReactNode {
  return (
    <Page id="service">
      <div
        className={`flex flex-col w-full mx-auto ${poppins.className} space-y-20`}
      >
        {Services.map((it, index) => (
          <Content {...it} key={index} />
        ))}
      </div>
    </Page>
  );
}
