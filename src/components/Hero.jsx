"use client";
import React, { Component } from "react";
import Image from "next/image";
import Logo1 from "../../public/assets/company1.png";
import Logo2 from "../../public/assets/company2.png";
import HeroCards from "./HeroCards";
import Admission from "./Admission";
function Hero() {
  return (
    <div className="w-full pt-12" id="insights">
      <div>
        <h1 className="text-4xl  mt-2  bg-gradient-to-r from-violet-300 to-fuchsia-600  text-transparent bg-clip-text transition delay-2s50 duration-500 ease-in-out text-center">
          <b>100% Placement Guaranteed Program</b>
        </h1>

        <div className="text-3xl mt-12 text-center text-blue-900 font-semibold">
          <h2>Our Students are hired by</h2>
          <h3>200+ companies</h3>
        </div>
      </div>

      <HeroCards />

      {/* Company images / scroll carousel */}
      <div
        x-data="{}"
        x-init="$nextTick(() => {
                let ul = $refs.logos;
                ul.insertAdjacentHTML('afterend', ul.outerHTML);
                ul.nextSibling.setAttribute('aria-hidden', 'true');
            })"
        class="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%"
      >
        <ul
          x-ref="logos"
          class="flex items-center justify-center md:justify-start [&_img]:max-w-7xl animate-infinite-scroll"
        >
          <li>
            <Image src={Logo1} alt="company1" />
          </li>
          <li>
            <Image src={Logo2} alt="company2" />
          </li>
        </ul>
        <ul
          x-ref="logos"
          class="flex items-center justify-center md:justify-start [&_img]:max-w-7xl animate-infinite-scroll"
        >
          <li>
            <Image src={Logo1} alt="company1" />
          </li>
          <li>
            <Image src={Logo2} alt="company2" />
          </li>
        </ul>
      </div>

      {/* Join */}
      <div>
        <h2 className="text-4xl text-center text-yellow-400 font-bold mt-12">
          Join IQSchool
        </h2>
        <h2 className="text-4xl text-center text-purple-700 font-bold">
          Admission process
        </h2>
      </div>

      <Admission />
    </div>
  );
}

export default Hero;
