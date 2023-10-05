import HeroIllustration from "@components/HeroIllustration";
import { ArrowLongRightIcon } from "@heroicons/react/24/solid";
import Button from "@shared/Component/Button";
import Page from "@shared/Component/Page";
import { poppins } from "@shared/Utils";
import { ReactNode } from "react";

export default function Hero(): ReactNode {
  return (
    <Page id="home">
      <div
        className={`w-full flex flex-col lg:flex-row mx-auto container ${poppins.className} pb-5`}
      >
        <div className="w-full flex flex-col">
          <div className="flex justify-start flex-row space-x-1 items-center">
            <span
              style={{
                content: "",
                position: "relative",
                bottom: "0",
                display: "inline-block",
                width: "0.9em",
                height: "0.9em",
                backgroundColor: "rgb(22,155,255)",
                lineHeight: 0,
                marginRight: "1em",
              }}
            />
            <p className="text-base font-bold">
              THE COOLEST, SAAS PRODUCT YOU HAVE EVER SEEN
            </p>
          </div>
          <div className="flex justify-start">
            <h1 className="text-7xl leading-tight font-bold -tracking-[0.06em]">
              Make your life easier with our SaaS
            </h1>
          </div>
          <div className="flex justify-start">
            <p className="text-lg py-5 text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis, tempora qui. Explicabo voluptate iure ipsum molestias
              repudiandae perspiciatis nostrum praesentium, unde pariatur
              tempora magni rem. Necessitatibus facilis obcaecati ratione.
            </p>
          </div>
          <div className="flex justify-start w-full mx-auto">
            <Button className="uppercase flex flex-row items-center justify-center space-x-3">
              <span>See More</span>
              <ArrowLongRightIcon className="w-5" />
            </Button>
          </div>
        </div>
        <div className="w-full mx-auto flex justify-center items-center">
          <HeroIllustration />
        </div>
      </div>
    </Page>
  );
}
