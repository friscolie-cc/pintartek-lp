import { ReactNode } from "react";
import { Props } from "./Types";
import Image from "next/image";

export default function Content({
  description,
  firstHeader,
  secondHeader,
  src,
  flip,
}: Props): ReactNode {
  return (
    <div
      className={`flex flex-col ${
        flip ? "lg:flex-row-reverse" : "lg:flex-row"
      } w-full mx-auto lg:container justify-center`}
    >
      <div className="w-full p-5">
        <Image src={src} alt={`service-${src}`} />
      </div>
      <div className={`w-full flex flex-col`}>
        <div className="flex justify-start flex-row space-x-1 items-center py-5">
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
          <p className="text-base font-bold">{firstHeader}</p>
        </div>
        <div className="flex justify-start">
          <h1 className="text-4xl lg:text-5xl leading-tight font-bold -tracking-[0.06em]">
            {secondHeader}
          </h1>
        </div>
        <div className="flex justify-start">
          <p className="text-lg py-5 text-gray-700">{description}</p>
        </div>
      </div>
    </div>
  );
}
