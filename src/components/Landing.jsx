"use client";
import React, { useState, useEffect } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Logo from "../../public/assets/iqslogo.jpg";
import Image from "next/image";
import Dropdown from "./Dropdown";
import Register from "../../public/assets/register.jpg";

function Landing() {
  const stats = [
    { name: "Students placed", stat: "500+" },
    { name: "Students upskilled", stat: "1500+" },
    { name: "Workshops conducted ", stat: "300+" },
  ];
  const navigation = [
    { name: "Home", href: "#" },
    { name: "Courses", href: "#" },
    { name: "Placements", href: "#" },
    { name: "Careers", href: "#" },
    { name: "About Us", href: "#" },
    { name: "Contact", href: "#" },
  ];

  const text = [
    "Project-Based learning",
    "Beginners Friendly Curriculum",
    "Live-Interactive Sessions",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % text.length);
    }, 1500);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="relative isolate bg-white">
      <div className="px-6 pt-6 lg:px-8">
        <nav className="flex items-center justify-between" aria-label="Global">
          <div className="flex lg:flex-1 ">
            <a href="#" className="-m-1.5 p-1.5">
              {/* <span className="sr-only">Your Company</span> */}
              <Image className="h-30 w-36" src={Logo} alt="" />
            </a>
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
                <a
                  href={item.href}
                  className="text-md font-semibold leading-6 text-purple-800 hover:text-blue-500"
                >
                  {item.name}
                </a>
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
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-purple-800 hover:text-blue-500"
                    >
                      {item.name}
                    </a>
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
      <Image
        className="sm:absolute right-[380px] bottom-[220px] -z-10 opacity-60"
        src={Register}
        width={500}
        alt=""
      />
      <div className="mx-auto bg-regeal-blue max-w-8xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:gap-x-10 lg:px-8 bg-darkblue-700 border rounded-md mt-4">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto  sm:pl-16 ">
          <h1 className="max-w-lg text-4xl font-bold tracking-tight text-gray-200 sm:text-4xl">
            Rebalance your Tech Skills
          </h1>
          <h2 className="text-3xl leading-loose text-yellow-400">
            From Industry Experts
          </h2>
          <h2 className="text-3xl bg-gradient-to-r from-sky-300 to-violet-500 inline-block text-transparent bg-clip-text transition delay-2s50 duration-500 ease-in-out ">
            {text[currentIndex]}
          </h2>
          <div className="mt-10 flex items-center gap-x-6">
            <a
              href="#"
              className="rounded-md bg-indigo-600 px-3.5 py-1.5 text-lg font-bold leading-7 text-gray-200 shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Free Demo
            </a>
            <a href="#" className="text-lg font-bold leading-7 text-gray-100">
              Learn more <span aria-hidden="true">→</span>
            </a>
          </div>
          <div>
            <dl className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-3">
              {stats.map((item, index) => (
                <div
                  key={index}
                  className="overflow-hidden rounded-lg bg-gradient-to-r from-amber-300 to-amber-500 px-4 py-5 shadow sm:p-6"
                >
                  <dt className="truncate text-md font-medium text-gray-900">
                    {item.name}
                  </dt>
                  <dd className="mt-1 text-3xl font-semibold tracking-tight text-gray-900">
                    <Counter
                      targetCount={parseInt(item.stat, 10)}
                      duration={1000}
                    />
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
        <div className="mt-16 sm:mt-24 lg:mt-0 lg:flex-shrink-0 lg:flex-grow flex justify-center">
          <iframe
            className="w-full h-auto md:h-[400px] md:w-[600px] "
            width="700"
            height="500"
            src="https://www.youtube.com/embed/lncA5RvwvN8?autoplay=1&mute=1"
            title="How Iqschool Helped to Crack an Interview | Dream Job | Iqschool"
            allow="autoplay; encrypted-media"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
const Counter = ({ targetCount, duration }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = 50;
    const steps = Math.ceil(targetCount / (duration / interval));

    const timer = setInterval(() => {
      setCount((prevCount) => {
        const newCount = prevCount + steps;
        return newCount >= targetCount ? targetCount : newCount;
      });
    }, interval);
    return () => clearInterval(timer);
  }, [targetCount, duration]);
  return <div>{count}+</div>;
};

export default Landing;
