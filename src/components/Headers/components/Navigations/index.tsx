import React from "react";
import { Link as Scroll } from "react-scroll";
import Link from "next/link";

import { RoutePath } from "@shared/Constant";

interface Props {
  isMobile?: boolean;
}

export const Navigations = ({ isMobile }: Props) => {
  if (isMobile) {
    return (
      <div
        className={`absolute z-[1000] flex h-screen w-full flex-col bg-mobileOverlay bg-opacity-80 pb-3`}
      >
        <div
          className={`absolute z-[1000] flex h-full w-3/4 flex-col space-y-8 border bg-secondaryWhite px-5 pb-3 pt-12 shadow-md`}
        >
          {RoutePath.map((route) => (
            <Link
              href={route.link}
              key={route.title}
              className="base-text border-b-2 text-lg 2xl:text-xl"
            >
              {route.title}
            </Link>
          ))}
        </div>
      </div>
    );
  }
  return (
    <div className="hidden sm:ml-6 sm:block">
      <div className="flex items-center space-x-4">
        {RoutePath.map((route) =>
          route.scroll ? (
            <Scroll
              to={route.link}
              smooth
              duration={700}
              key={route.title}
              className="base-text cursor-pointer border-primaryBlack p-2 font-medium transition-all duration-75 ease-in-out hover:border-b-2 hover:border-b-black text-gray-700 text-lg"
            >
              {route.title}
            </Scroll>
          ) : (
            <Link
              href={route.link}
              key={route.title}
              className="base-text block border-primaryBlack p-2 text-lg font-medium transition-all duration-75 ease-in-out hover:border-b-2 hover:border-b-black text-gray-700"
            >
              {route.title}
            </Link>
          )
        )}
      </div>
    </div>
  );
};
