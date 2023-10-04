import React from 'react'
import { Disclosure, Transition } from '@headlessui/react'
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'

type DataProps = {
  title: string
  link: string
}

interface Props {
  data: DataProps[]
}

export const DisclosureMenu = ({ data }: Props) => {
  return (
    <Disclosure>
      {({ open }) => (
        <>
          <Disclosure.Button className="base-text border-b-2 text-left text-lg 2xl:text-xl">
            <span className="flex flex-row justify-between">
              Products
              {open ? (
                <ChevronUpIcon className="w-6" />
              ) : (
                <ChevronDownIcon className="w-6" />
              )}
            </span>
          </Disclosure.Button>
          <Transition
            enter="transform transition ease-in-out duration-500 sm:duration-700"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transform transition ease-in-out duration-500 sm:duration-700"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <Disclosure.Panel
              className="flex flex-col space-y-5 px-5
        text-gray-500"
            >
              {data.map((child) => (
                <Disclosure.Button
                  as={Link}
                  key={child.title}
                  href={child.link}
                  title={child.title}
                >
                  {child.title}
                </Disclosure.Button>
              ))}
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  )
}
