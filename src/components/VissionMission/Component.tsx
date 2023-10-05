import Page from "@shared/Component/Page";
import Tabs from "@shared/Component/Tabs";
import {
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@shared/Component/Tabs/Component";
import { poppins } from "@shared/Utils";
import { ReactNode, useState } from "react";

export default function VissionMission(): ReactNode {
  const [checkRef, setCheckRef] = useState<string>("account");

  const handleRef = (value: string) => {
    setCheckRef(value);
  };

  return (
    <Page id="vissionMission">
      <div
        className={`w-full flex flex-col mx-auto justify-center items-center ${poppins.className}`}
      >
        <Tabs
          defaultValue="account"
          className="w-full flex flex-col lg:flex-row"
        >
          <TabsList className="flex justify-start flex-col w-full max-w-md space-y-3">
            <TabsTrigger
              value="account"
              aria-label="account"
              className="shadow-md border rounded-md p-5"
              onClick={(value) => {
                handleRef(value.currentTarget.ariaLabel!);
              }}
            >
              <span className="flex flex-row w-full space-x-5">
                <p className="w-full text-xs">Image</p>
                <span className="flex flex-col w-full space-y-3">
                  <p className="font-semibold">
                    Find relevant media contacts - multiline title
                  </p>
                  {checkRef === "account" && (
                    <p className="break-words whitespace-pre-wrap text-left">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Voluptas eos dolores magni provident? Natus, nisi iure
                      necessitatibus, eius iusto laudantium nostrum ipsum
                      repellendus cupiditate totam inventore ea ex?
                      Voluptatibus, pariatur.
                    </p>
                  )}
                </span>
              </span>
            </TabsTrigger>
            <TabsTrigger
              value="password"
              className="shadow-md border rounded-md p-5"
              aria-label="password"
              onClick={(value) => {
                handleRef(value.currentTarget.ariaLabel!);
              }}
            >
              <span className="flex flex-row w-full space-x-5">
                <p className="w-full">Image</p>
                <span className="flex flex-col w-full space-y-3">
                  <p className="font-semibold">
                    Find relevant media contacts - multiline title
                  </p>
                  {checkRef === "password" && (
                    <p className="break-words whitespace-pre-wrap text-left">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Voluptas eos dolores magni provident? Natus, nisi iure
                      necessitatibus, eius iusto laudantium nostrum ipsum
                      repellendus cupiditate totam inventore ea ex?
                      Voluptatibus, pariatur.
                    </p>
                  )}
                </span>
              </span>
            </TabsTrigger>
          </TabsList>
          <TabsContent
            value="account"
            className="w-full shadow-md border rounded-md p-5 h-full"
          >
            Make changes to your account here.
          </TabsContent>
          <TabsContent
            value="password"
            className="w-full shadow-md border rounded-md p-5 h-full"
          >
            Change your password here.
          </TabsContent>
        </Tabs>
      </div>
    </Page>
  );
}
