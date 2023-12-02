"use client";
import React from "react";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";
// import people from "../const";
// import kousalya from "../public/assets/kousalya.jpeg";

import Chinna from "../../public/assets/Testimonials/Chinna.png";
import ChinnaCompany from "../../public/assets/Testimonials/Chinna_Company.jpeg";
// import r360 from "../../public/assets/r360.jpg";
// import Suhas from "../../public/assets/suhas.jpeg";
// import adp from "../../public/assets/adpsuhas.png";
// import seetesh from "../../public/assets/seetesh.jpeg";
// import neosoft from "../../public/assets/neosoft.jpg";
// import umesh from "../../public/assets/umesh.jpeg";
// import mantralabs from "../../public/assets/umeshmantra.png";
// import sangeeta from "../../public/assets/sangeeta.jpeg";
// import optimum from "../../public/assets/optimum.jpg";
// import yajna from "../../public/assets/yajnadutta.jpeg";
// import template from "../../public/assets/template.png";

const people = [
  {
    name: "Chinna Veeraiah",
    title: "Sr. Software Engineer",
    role: "Admin",
    hike: "70% hike",
    imageUrl: Chinna,
    companyUrl: ChinnaCompany,
  },
  {
    name: "Chinna Veeraiah",
    title: "Sr. Software Engineer",
    role: "Admin",
    hike: "70% hike",
    imageUrl: Chinna,
    companyUrl: ChinnaCompany,
  },
  {
    name: "Chinna Veeraiah",
    title: "Sr. Software Engineer",
    role: "Admin",
    hike: "70% hike",
    imageUrl: Chinna,
    companyUrl: ChinnaCompany,
  },
  {
    name: "Chinna Veeraiah",
    title: "Sr. Software Engineer",
    role: "Admin",
    hike: "70% hike",
    imageUrl: Chinna,
    companyUrl: ChinnaCompany,
  },
  {
    name: "Chinna Veeraiah",
    title: "Sr. Software Engineer",
    role: "Admin",
    hike: "70% hike",
    imageUrl: Chinna,
    companyUrl: ChinnaCompany,
  },
  {
    name: "Chinna Veeraiah",
    title: "Sr. Software Engineer",
    role: "Admin",
    hike: "70% hike",
    imageUrl: Chinna,
    companyUrl: ChinnaCompany,
  },
  {
    name: "Chinna Veeraiah",
    title: "Sr. Software Engineer",
    role: "Admin",
    hike: "70% hike",
    imageUrl: Chinna,
    companyUrl: ChinnaCompany,
  },
  {
    name: "Chinna Veeraiah",
    title: "Sr. Software Engineer",
    role: "Admin",
    hike: "70% hike",
    imageUrl: Chinna,
    companyUrl: ChinnaCompany,
  },

  // More people...
];

// const [name, title, role, hike, imageUrl, companyUrl] = people;
function Testimonials() {
  return (
    <div className="bg-gradient-to-r from-purple-400 to-purple-600 h-[540px]">
      <div className="text-center text-4xl font-bold text-purple-300 mt-24 pt-12">
        Testimonials
      </div>
      <div
        x-data="{}"
        x-init="$nextTick(() => {
    let ul = $refs.logos;
    ul.insertAdjacentHTML('afterend', ul.outerHTML);
    ul.nextSibling.setAttribute('aria-hidden', 'true');
  })"
        class="w-full mt-10  inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%"
      >
        <ul
          x-ref="logos"
          class="flex items-center justify-center md:justify-start [&_img]:max-w-7xl animate-infinite-scroll"
        >
          {people.map((person) => (
            <li key={person.name} className="card">
              <div className="col-span-1 flex flex-col rounded-lg bg-white text-center shadow my-4 mx-2 p-4 w-56">
                <Image
                  className="mx-auto h-28 w-28 flex-shrink-0 rounded-full"
                  src={person.imageUrl}
                  alt=""
                />
                <h3 className="text-md font-bold text-green-600">
                  {person.name}
                </h3>
                <dl className="mt-1 flex flex-grow flex-col justify-between">
                  <dt className="sr-only">Title</dt>
                  <dd className="text-md text-black font-bold">
                    {person.title}
                  </dd>
                  <Image
                    className="mx-auto h-16 w-16"
                    src={person.companyUrl}
                  />
                </dl>
                <div className="flex items-center justify-center md:justify-center">
                  <div className="mt-2 flex items-center gap-2 px-5 py-3 text-white duration-150 border rounded-md bg-indigo-600">
                    <span className="text-white font-bold">{person.hike}</span>
                  </div>
                </div>
              </div>
              <div></div>
            </li>
          ))}
        </ul>
        {/* Repeat the same set of card components for infinite scroll effect */}
        <ul
          x-ref="logos"
          class="flex items-center justify-center md:justify-start [&_img]:max-w-7xl animate-infinite-scroll"
        >
          {people.map((person) => (
            <li key={person.email} className="card">
              <div className="col-span-1 flex flex-col rounded-lg bg-white text-center shadow my-4 mx-2 p-4 w-56">
                <Image
                  className="mx-auto h-28 w-28 flex-shrink-0 rounded-full"
                  src={person.imageUrl}
                  alt=""
                />
                <h3 className="text-md font-bold text-green-600">
                  {person.name}
                </h3>
                <dl className="mt-1 flex flex-grow flex-col justify-between">
                  <dt className="sr-only">Title</dt>
                  <dd className="text-md text-black font-bold">
                    {person.title}
                  </dd>
                  <Image
                    className="mx-auto h-16 w-16"
                    src={person.companyUrl}
                  />
                </dl>
                <div className="flex items-center justify-center md:justify-center">
                  <div className="mt-2 flex items-center gap-2 px-5 py-3 text-white duration-150 border rounded-md bg-indigo-600 ">
                    <span className="text-white font-bold">{person.hike}</span>
                  </div>
                </div>
              </div>
              <div></div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Testimonials;
