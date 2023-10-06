import Page from "@shared/Component/Page";
import Tabs from "@shared/Component/Tabs";
import {
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@shared/Component/Tabs/Component";
import { poppins } from "@shared/Utils";
import { ReactNode, useState } from "react";
import demo_illustration from "@assets/demo-illustration-3.png";
import Image from "next/image";
import { TabsData } from "@shared/Constant/Tabs";

export default function VissionMission(): ReactNode {
  const [checkRef, setCheckRef] = useState<string>("tabsOne");

  const handleRef = (value: string) => {
    setCheckRef(value);
  };

  return (
    <Page id="vissionMission">
      <div
        className={`w-full flex flex-col mx-auto justify-center items-center ${poppins.className}`}
      >
        <div className="flex justify-center flex-col items-center w-full mx-auto container p-5 space-y-5">
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
            <p className="text-base font-bold">FEATURES</p>
          </div>
          <div className="flex justify-center w-full">
            <h1 className="text-4xl lg:text-5xl leading-tight font-bold -tracking-[0.06em]">
              What are you signing in for?
            </h1>
          </div>
        </div>

        <Tabs
          defaultValue="tabsOne"
          className="w-full flex flex-col lg:flex-row lg:space-x-5 py-5"
        >
          <TabsList className="flex justify-start flex-col w-full max-w-md space-y-3">
            {TabsData.map((it, index) => (
              <TabsTrigger
                value={it.value}
                aria-label={it.value}
                className="shadow-md border rounded-md p-5 w-full"
                onClick={(value) => {
                  handleRef(value.currentTarget.ariaLabel!);
                }}
                key={index}
              >
                <span className="flex flex-row w-full space-x-5">
                  <p className="text-xs">Mock</p>
                  <span className="flex flex-col w-full space-y-3">
                    <p className="font-semibold break-words whitespace-pre-wrap text-left">
                      {it.title}
                    </p>
                    {checkRef === it.value && (
                      <p className="break-words whitespace-pre-wrap text-left">
                        {it.description}
                      </p>
                    )}
                  </span>
                </span>
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent
            value="tabsOne"
            className="w-full shadow-md border rounded-md p-5 h-full"
          >
            <Image src={demo_illustration} alt="mock" />
          </TabsContent>
          <TabsContent
            value="tabsTwo"
            className="w-full shadow-md border rounded-md p-5 h-full"
          >
            <Image src={demo_illustration} alt="mock" />
          </TabsContent>
          <TabsContent
            value="tabsThree"
            className="w-full shadow-md border rounded-md p-5 h-full"
          >
            <Image src={demo_illustration} alt="mock" />
          </TabsContent>
        </Tabs>
      </div>
    </Page>
  );
}
