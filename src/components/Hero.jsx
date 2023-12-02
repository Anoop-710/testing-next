"use client";
import React, { Component } from "react";
import Image from "next/image";
import Logo1 from "../../public/assets/company1.png";
import Logo2 from "../../public/assets/company2.png";
import Aptitude from "../../public/assets/Aptitude.png";
import Scholarship from "../../public/assets/Scholarship.png";
import Learning from "../../public/assets/Learning.jpg";
import HeroCards from "./HeroCards";
function Hero() {
  return (
    <div className="w-full pt-4">
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

      <div className="bg-gradient-to-r from-slate-200 to-slate-300 mt-4 border rounded-md">
        <div className="overflow-y-hidden">
          <div className="mx-auto container f-f-p px-4 xl:px-0 py-24">
            <h1 className="focus:outline-none text-center text-3xl lg:text-4xl font-extrabold lg:leading-9 tracking-wider text-gray-900">
              How it works?
            </h1>
            <div className="md:mt-24 f-f-p">
              <div className="hidden md:flex justify-center w-full">
                <div className="flex flex-col items-center md:items-end md:pr-12 md:border-r-4 border-gray-300 relative md:w-1/2">
                  <div aria-label="sign up" role="img">
                    <Image
                      className="focus:outline-none mt-10 rounded-full"
                      src={Aptitude}
                      alt="Aptitude Test"
                      width={130}
                      height={130}
                    />
                  </div>
                  <div aria-label={2} role="img">
                    <img
                      className="focus:outline-none mt-24"
                      src="https://tuk-cdn.s3.amazonaws.com/can-uploader/3_step_center_aligned_how_it_worksSvg2.svg"
                      alt
                    />
                  </div>
                  <div className="flex mt-12 flex-col items-center lg:items-end md:w-8/12">
                    <h1 className="focus:outline-none text-xl font-bold leading-5">
                      Get Scholarship
                    </h1>
                    <h2 className="focus:outline-none text-gray-500 mt-3 pl-3 text-center md:text-right text-base leading-6 tracking-wide">
                      Elevate your academic journey with a scholarship that
                      recognizes your potential.
                    </h2>
                  </div>
                  <div aria-label="transactions" role="img">
                    <Image
                      className="focus:outline-none mt-24 rounded-full w-28 h-28"
                      src={Learning}
                      alt="Start Learning"
                      width={0}
                      height={0}
                    />
                  </div>
                  <img
                    className="hidden md:block absolute right-0 top-0 -mt-2 -mr-1"
                    src="https://cdn.tuk.dev/assets/components/111220/Fs7/line.png"
                    alt
                  />
                </div>
                <div className="flex flex-col items-center md:items-start md:pl-12 lg:border-gray-400 mt-20 md:mt-0 md:w-1/2">
                  <div aria-label={1} role="img">
                    <img
                      src="https://tuk-cdn.s3.amazonaws.com/can-uploader/3_step_center_aligned_how_it_worksSvg4.svg"
                      alt
                    />
                  </div>
                  <div className="flex mt-6 flex-col items-center md:items-start md:w-8/12">
                    <h1 className="focus:outline-none text-xl font-bold leading-5">
                      Take a Free Aptitude Test
                    </h1>
                    <h2 className="focus:outline-none text-gray-500 mt-3 text-base leading-6 tracking-wide">
                      Unlock your potential and discover your true calling with
                      our complimentary aptitude test{" "}
                    </h2>
                  </div>
                  <div aria-label="wallet" role="img">
                    <Image
                      className="focus:outline-none mt-32 rounded-full w-28 h-28"
                      src={Scholarship}
                      alt="Scholarship"
                      width={0}
                      height={0}
                    />
                  </div>
                  <div aria-label={3} role="img">
                    <img
                      className="focus:outline-none mt-20"
                      src="https://tuk-cdn.s3.amazonaws.com/can-uploader/3_step_center_aligned_how_it_worksSvg6.svg"
                      alt
                    />
                  </div>
                  <div className="flex mt-6 flex-col items-center md:items-start md:w-8/12">
                    <h1 className="focus:outline-none text-xl font-bold leading-5">
                      Start Learning
                    </h1>
                    <h2 className="focus:outline-none text-gray-500 mt-3 text-base leading-6 tracking-wide">
                      Embark on a journey of knowledge and growth, where every
                      lesson is a step toward your brighter future.
                    </h2>
                  </div>
                </div>
              </div>
              <div className="md:hidden flex flex-col items-center w-full">
                <Image
                  className="focus:outline-none my-10 w-40 h-40"
                  src={Aptitude}
                  alt="how it work"
                  width={0}
                  height={0}
                />
                <img
                  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/3_step_center_aligned_how_it_worksSvg4.svg"
                  alt
                />
                <div className="mt-10">
                  <h1 className="text-xl text-center tracking-wide leading-5 font-bold">
                    Take a Free Aptitude Test
                  </h1>
                  <h2 className="text-gray-500 mt-3 text-center text-base leading-6 tracking-wide">
                    Unlock your potential and discover your true calling with
                    our complimentary aptitude test.
                  </h2>
                </div>
                <Image
                  className="focus:outline-none rounded-full my-10 w-36 h-36"
                  src={Scholarship}
                  alt
                  width={0}
                  height={0}
                />
                <img
                  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/3_step_center_aligned_how_it_worksSvg2.svg"
                  alt
                />
                <div className="mt-10">
                  <h1 className="text-xl tracking-wide text-center leading-5 font-bold">
                    Get Scholarship
                  </h1>
                  <h2 className="text-gray-500 mt-3 pl-3 text-center text-base leading-6 tracking-wide">
                    Elevate your academic journey with a scholarship that
                    recognizes your potential.
                  </h2>
                </div>
                <Image
                  className="focus:outline-none rounded-full my-10 w-36 h-36"
                  src={Learning}
                  alt
                  width={0}
                  height={0}
                />
                <img
                  className
                  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/3_step_center_aligned_how_it_worksSvg6.svg"
                  alt
                />
                <div className="flex mt-10 flex-col items-center md:items-start md:w-8/12">
                  <h1 className="text-xl text-center tracking-wide leading-5 font-bold">
                    Start Learning
                  </h1>
                  <h2 className="text-gray-500 mt-3 text-center text-base leading-6 tracking-wide">
                    Embark on a journey of knowledge and growth, where every
                    lesson is a step toward your brighter future.
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
