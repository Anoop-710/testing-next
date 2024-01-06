"use client";
import React, { useState, useEffect } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Logo from "../../public/assets/iqslogo.jpg";
import Image from "next/image";
import Dropdown from "./Dropdown";
import Link from "next/link";

const Navbar = () => {
  const navigation = [
    { name: "Home", href: "../home" },
    { name: "Courses", href: "/#courses" },
    { name: "Placements", href: "/#testimonials" },
    { name: "Internship", href: "../internship" },
    { name: "About Us", href: "/#about" },
    { name: "Contact", href: "../contact" },
  ];

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };
  return (
    <div className="px-6 pt-6 lg:px-8 ">
      <nav className="flex items-center justify-between" aria-label="Global">
        <div className="flex lg:flex-1 ">
          <Link href="/home" className="-m-1.5 p-1.5">
            {/* <span className="sr-only">Your Company</span> */}
            <Image className="h-30 w-36" src={Logo} alt="" />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12 text-lg">
          {navigation.map((item) => (
            <div key={item.name}>
              <Link href={item.href}>
                <span className="text-md font-semibold leading-6 text-purple-800 hover:text-blue-500">
                  {item.name}
                </span>
              </Link>
              {item.name === "Courses" && <Dropdown />}{" "}
              {/* Render the dropdown component for 'About' */}
            </div>
          ))}
        </div>
      </nav>
      <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <Dialog.Panel
          focus="true"
          className="fixed inset-0 z-10 overflow-y-auto bg-white px-6 py-6 lg:hidden"
        >
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <Image className="h-20 w-32" src={Logo} alt="" />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={closeMobileMenu}
                    className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-purple-800 hover:text-blue-500"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-6 text-gray-900 hover:bg-gray-400/10"
                >
                  Log in
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </div>
  );
};

export default Navbar;
