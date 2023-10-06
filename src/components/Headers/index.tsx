import { Navigations } from "@components/Headers/components";
import { Disclosure, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import pintartekLogo from "@assets/pintartek_logo.png";
import Image from "next/image";

const Headers = () => {
  return (
    <Disclosure as="nav">
      {({ open }) => (
        <>
          <div className={`container mx-auto px-2 lg:px-9 sticky top-0`}>
            <div className="relative flex h-24 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <Disclosure.Button className="headers">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex w-full flex-1 items-center justify-center sm:justify-between">
                <div className="relative flex flex-shrink-0 items-center">
                  <Link href={"/"}>
                    <Image
                      src={pintartekLogo}
                      width={160}
                      height={160}
                      alt="pintartek-logo"
                    />
                  </Link>
                </div>
                <Navigations />
              </div>
            </div>
          </div>
          <Transition
            show={open}
            enter="transform transition ease-in-out duration-500 sm:duration-700"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transform transition ease-in-out duration-500 sm:duration-700"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <Disclosure.Panel className=" sm:hidden">
              <Navigations isMobile />
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  );
};

export default Headers;
