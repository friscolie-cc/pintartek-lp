import HeroIllustration from "@components/HeroIllustration";
import Button from "@shared/Component/Button";
import Page from "@shared/Component/Page";
import { ReactNode } from "react";

export default function Hero(): ReactNode {
  return (
    <Page>
      <div className="w-full flex flex-col lg:flex-row mx-auto container">
        <div className="w-full flex flex-col">
          <div className="flex justify-start">
            <p className="text-base">
              THE COOLEST, SAAS PRODUCT YOU HAVE EVER SEEN
            </p>
          </div>
          <div className="flex justify-start">
            <h1 className="text-8xl leading-tight font-bold -tracking-[0.06em]">
              Make your life easier with our SaaS
            </h1>
          </div>
          <div className="flex justify-start">
            <p className="text-xl py-5 text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis, tempora qui. Explicabo voluptate iure ipsum molestias
              repudiandae perspiciatis nostrum praesentium, unde pariatur
              tempora magni rem. Necessitatibus facilis obcaecati ratione.
            </p>
          </div>
          <div className="flex justify-start w-full mx-auto">
            <Button>See More</Button>
          </div>
        </div>
        <div className="w-full mx-auto flex justify-center items-center">
          <HeroIllustration />
        </div>
      </div>
    </Page>
  );
}
