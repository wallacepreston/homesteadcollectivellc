import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Logo from "./Logo"

const navigation = [
  { name: 'Why Choose Us', href: '/#why-choose-us' },
  { name: 'Sell Your Home', href: '/sell', className: 'block px-3 py-2 rounded-md text-base bg-cyan-600 hover:bg-cyan-500 text-white font-bold' },
  { name: 'Meet Preston', href: '/about' },
]

export const Nav = () => {

  return <Disclosure as="nav" id="navbar" className="bg-gray-800">
  {({ open }) => (
    <>
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="sr-only">Open main menu</span>
              {open ? (
                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
              )}
            </Disclosure.Button>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-between">
            <div className="flex flex-shrink-0 items-center">
              <Link to="/">
                <div className="flex flex-shrink-0 items-center">
                  {/* <StaticImage
                    className="bio-avatar logo-avatar"
                    formats={["auto", "webp", "avif"]}
                    src="../img/about/code-revolution.png"
                    width={30}
                    height={30}
                    quality={95}
                    alt="Coding Revolution logo"
                  />
                  <span className="logo-header text-cyan-400">
                    Coding Revolution
                  </span> */}
                  {/* DevRocket */}
                  <Logo width={200} height={40} tagline={true} />
                </div>
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:block flex flex-justify-center flex-align-center">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={item.className ? item.className : 'text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-md font-bold'}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Disclosure.Panel className="sm:hidden mobile-menu">
        <div className="space-y-1 px-2 pt-2 pb-3">
          {navigation.map((item) => (
            <Disclosure.Button
              key={item.name}
              as="a"
              href={item.href}
              className={item.className ? item.className : 'text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'}
            >
              {item.name}
            </Disclosure.Button>
          ))}
        </div>
      </Disclosure.Panel>
    </>
  )}
</Disclosure>
};