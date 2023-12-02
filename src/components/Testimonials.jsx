"use client";
import React from "react";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";

import Chinna from "../../public/assets/Testimonials/Chinna.png";
import ChinnaCompany from "../../public/assets/Testimonials/Chinna_Company.jpeg";
import Mahesh_Kollu from "../../public/assets/Testimonials/Mahesh_Kollu.jpg";
import MaheshKolluCompany from "../../public/assets/Testimonials/Mahesh_Kollu_Company.png";
import Kiran from "../../public/assets/Testimonials/Kiran.jpg";
import KiranCompany from "../../public/assets/Testimonials/Kiran_Company.jpg";
import SaiLakshmi from "../../public/assets/Testimonials/SaiLakshmi.jpg";
import SaiLakshmiCompany from "../../public/assets/Testimonials/SaiLakshmi_Company.jpg";
import VengaiahAbburi from "../../public/assets/Testimonials/Vengaiah_Abburi.jpg";
import VengaiahAbburiCompany from "../../public/assets/Testimonials/Vengaiah_Abburi_Company.jpg";
import Sivalingappa from "../../public/assets/Testimonials/Sivalingappa.jpg";
import SivalingappaCompany from "../../public/assets/Testimonials/Sivalingappa_Company.jpg";
import ParasNaidu from "../../public/assets/Testimonials/Paras_Naidu.jpg";
import ParasNaiduCompany from "../../public/assets/Testimonials/Paras_Naidu_Company.jpg";
import Bharathi from "../../public/assets/Testimonials/Bharathi.jpg";
import BharathiCompany from "../../public/assets/Testimonials/Bharathi_Company.jpeg";
import Naresh from "../../public/assets/Testimonials/Naresh.jpg";
import NareshCompany from "../../public/assets/Testimonials/Naresh_Company.jpeg";
import Raj_Kumar from "../../public/assets/Testimonials/Raj_Kumar.jpg";
import RajKumarCompany from "../../public/assets/Testimonials/Raj_Kumar_Company.jpg";

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
    name: "Mahesh Kollu",
    title: "Sr. Software Engineer",
    hike: "50% hike",
    imageUrl: Mahesh_Kollu,
    companyUrl: MaheshKolluCompany,
  },
  {
    name: "Kiran",
    title: "Sr. Software Engineer",
    hike: "90% hike",
    imageUrl: Kiran,
    companyUrl: KiranCompany,
  },
  {
    name: "SaiLakshmi",
    title: "Sr. Software Engineer",
    hike: "70% hike",
    imageUrl: SaiLakshmi,
    companyUrl: SaiLakshmiCompany,
  },
  {
    name: "Vengaiah Abburi",
    title: "Associate Consultant",
    hike: "85% hike",
    imageUrl: VengaiahAbburi,
    companyUrl: VengaiahAbburiCompany,
  },
  {
    name: "Sivalingappa",
    title: "Cloud Associate",
    hike: "55% hike",
    imageUrl: Sivalingappa,
    companyUrl: SivalingappaCompany,
  },
  {
    name: "Paras Naidu",
    title: "S/W Software Engineer",
    hike: "78% hike",
    imageUrl: ParasNaidu,
    companyUrl: ParasNaiduCompany,
  },
  {
    name: "Bharathi",
    title: "Java Developer",
    hike: "110% hike",
    imageUrl: Bharathi,
    companyUrl: BharathiCompany,
  },
  {
    name: "Naresh",
    title: "Sr. Software Engineer",
    hike: "70% hike",
    imageUrl: Naresh,
    companyUrl: NareshCompany,
  },
  {
    name: "Raj Kumar",
    title: "Associate Engineer",
    hike: "65% hike",
    imageUrl: Raj_Kumar,
    companyUrl: RajKumarCompany,
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
