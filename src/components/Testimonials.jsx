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
import Seetes from "../../public/assets/Testimonials/Seetes.jpg";
import SeetesCompany from "../../public/assets/Testimonials/Seetes_Company.jpg";
import Sangita from "../../public/assets/Testimonials/Sangita.jpg";
import SangitaCompany from "../../public/assets/Testimonials/Sangita_Company.jpeg";
import Maddini from "../../public/assets/Testimonials/Maddini_Kousalya.jpg";
import MaddiniCompany from "../../public/assets/Testimonials/Maddini_Kousalya_Company.jpg";
// import Yajna from "../../public/assets/Testimonials/Yajna.jpg";
// import YajnaCompany from "../../public/assets/Testimonials/Yajna_Company.png";
import Suhas from "../../public/assets/Testimonials/Suhas.jpg";
import SuhasCompany from "../../public/assets/Testimonials/Suhas_Company.png";
import Umesh from "../../public/assets/Testimonials/Umesh.jpg";
import UmeshCompany from "../../public/assets/Testimonials/Umesh_Company.png";
import Kankanala from "../../public/assets/Testimonials/Kankanala.jpg";
import KankanalaCompany from "../../public/assets/Testimonials/Kankanala_Company.png";
import SaiYelika from "../../public/assets/Testimonials/Sai_Yelika.jpg";
import SaiYelikaCompany from "../../public/assets/Testimonials/Sai_Yelika_Company.jpg";
import SaiKumar from "../../public/assets/Testimonials/Sai_Kumar.jpg";
import SaiKumarCompany from "../../public/assets/Testimonials/Sai_Kumar_Company.jpg";
import VaraLakshmi from "../../public/assets/Testimonials/Vara_Lakshmi.jpg";
import VaraLakshmiCompany from "../../public/assets/Testimonials/Vara_Lakshmi_Company.jpg";
// import Teja from "../../public/assets/Testimonials/Teja.jpg";
// import TejaCompany from "../../public/assets/Testimonials/Teja_Company.png";
import Shantanu from "../../public/assets/Testimonials/Shantanu.jpg";
import ShantanuCompany from "../../public/assets/Testimonials/Shantanu_Company.jpeg";
import Ravi from "../../public/assets/Testimonials/Ravi.jpg";
import RaviCompany from "../../public/assets/Testimonials/Ravi_Company.jpg";
import Milind from "../../public/assets/Testimonials/Milind.jpg";
import MilindCompany from "../../public/assets/Testimonials/Milind_Company.png";

import Hemant from "../../public/assets/Testimonials/Hemant.jpg";
import HemantCompany from "../../public/assets/Testimonials/Hemant_Company.jpg";
import Akbar from "../../public/assets/Testimonials/Akbar.jpg";
import AkbarCompany from "../../public/assets/Testimonials/Akbar_Company.jpg";
import Sai from "../../public/assets/Testimonials/Sai.jpg";
import SaiCompany from "../../public/assets/Testimonials/Sai_Company.jpg";
import Ashok from "../../public/assets/Testimonials/Ashok.jpg";
import AshokCompany from "../../public/assets/Testimonials/Ashok_Company.jpg";
import Firoz from "../../public/assets/Testimonials/Firoz.jpg";
import FirozCompany from "../../public/assets/Testimonials/Firoz_Company.jpg";
import Akhil from "../../public/assets/Testimonials/Akhil.jpg";
import AkhilCompany from "../../public/assets/Testimonials/Akhil_Company.jpg";
import Ramesh from "../../public/assets/Testimonials/Ramesh_Varma.jpg";
import RameshCompany from "../../public/assets/Testimonials/Ramesh_Varma_Company.jpg";
import Suresh from "../../public/assets/Testimonials/Suresh.jpg";
import SureshCompany from "../../public/assets/Testimonials/Suresh_Company.jpg";
import Nagendra from "../../public/assets/Testimonials/Nagendra.jpg";
import NagendraCompany from "../../public/assets/Testimonials/Nagendra_Company.jpg";
import Akhil2 from "../../public/assets/Testimonials/Akhil2.jpg";
import Akhil2Company from "../../public/assets/Testimonials/Akhil2_Company.jpg";
import Pramod from "../../public/assets/Testimonials/Pramod.jpg";
import PramodCompany from "../../public/assets/Testimonials/Pramod_Company.jpg";
import Venkat from "../../public/assets/Testimonials/Venkat.jpg";
import VenkatCompany from "../../public/assets/Testimonials/Venkat_Company.jpg";
import Tanmay from "../../public/assets/Testimonials/Tanmay.jpg";
import TanmayCompany from "../../public/assets/Testimonials/Tanmay_Company.jpg";
import Mukesh from "../../public/assets/Testimonials/Mukesh.jpg";
import MukeshCompany from "../../public/assets/Testimonials/Mukesh_Company.jpg";
import Shrikanth from "../../public/assets/Testimonials/Shrikanth.jpg";
import ShrikanthCompany from "../../public/assets/Testimonials/Shrikanth_Company.jpg";
import Ashok2 from "../../public/assets/Testimonials/Ashok2.jpg";
import Ashok2Company from "../../public/assets/Testimonials/Ashok2_Company.jpg";
import Mizra from "../../public/assets/Testimonials/Mizra.jpg";
import MizraCompany from "../../public/assets/Testimonials/Mirza_Company.jpg";
import Gayathri from "../../public/assets/Testimonials/Gayathri.jpg";
import GayathriCompany from "../../public/assets/Testimonials/Gayathri_Company.jpg";
import Katari from "../../public/assets/Testimonials/Katari.jpg";
import KatariCompany from "../../public/assets/Testimonials/Katari_Company.jpg";
import Raghu from "../../public/assets/Testimonials/Raghu.jpg";
import RaghuCompany from "../../public/assets/Testimonials/Raghu_Company.jpg";
import Jagananth from "../../public/assets/Testimonials/Jagananth.jpg";
import JagananthCompany from "../../public/assets/Testimonials/Jagananth_Company.jpg";
import Bindu from "../../public/assets/Testimonials/Bindu.jpg";
import BinduCompany from "../../public/assets/Testimonials/Bindu_Company.jpg";

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
  {
    name: "Seetes Kumar Mallik",
    title: "Sr. Software Engineer",
    hike: "88% hike",
    imageUrl: Seetes,
    companyUrl: SeetesCompany,
  },
  {
    name: "Sushree sangita swan",
    title: "Sr. Software Engineer",
    hike: "65% hike",
    imageUrl: Sangita,
    companyUrl: SangitaCompany,
  },
  {
    name: "Maddini Kousalya",
    title: "Sr. Software Engineer",
    hike: "90% hike",
    imageUrl: Maddini,
    companyUrl: MaddiniCompany,
  },
  // {
  //   name: "Yajna Dutta Biswal",
  //   title: "Sr. Software Engineer",
  //   hike: "70% hike",
  //   imageUrl: Yajna,
  //   companyUrl: YajnaCompany,
  // },
  {
    name: "Suhas HS",
    title: "Associate Consultant",
    hike: "50% hike",
    imageUrl: Suhas,
    companyUrl: SuhasCompany,
  },
  {
    name: "Umesh",
    title: "Sr. Software Engineer",
    hike: "120% hike",
    imageUrl: Umesh,
    companyUrl: UmeshCompany,
  },
  {
    name: "Kankanala Dwarakesh",
    title: "Cloud Associate",
    hike: "100% hike",
    imageUrl: Kankanala,
    companyUrl: KankanalaCompany,
  },
  {
    name: "Sai Yelika",
    title: "Sr. Software Engineer",
    hike: "80% hike",
    imageUrl: SaiYelika,
    companyUrl: SaiYelikaCompany,
  },
  {
    name: "Sai Kumar",
    title: "Trainee Engineer",
    hike: "50% hike",
    imageUrl: SaiKumar,
    companyUrl: SaiKumarCompany,
  },
  {
    name: "Vara Lakshmi",
    title: "Trainee Engineer",
    hike: "60% hike",
    imageUrl: VaraLakshmi,
    companyUrl: VaraLakshmiCompany,
  },
  // {
  //   name: "Teja Kumar",
  //   title: "Sr. Software Engineer",
  //   hike: "80% hike",
  //   imageUrl: Teja,
  //   companyUrl: TejaCompany,
  // },
  {
    name: "Naresh",
    title: "Sr. Software Engineer",
    hike: "70% hike",
    imageUrl: Naresh,
    companyUrl: NareshCompany,
  },
  {
    name: "Shantanu",
    title: "Software Engineer",
    hike: "50% hike",
    imageUrl: Shantanu,
    companyUrl: ShantanuCompany,
  },
  // Ravi
  {
    name: "Ravi",
    title: "Software Engineer",
    hike: "120% hike",
    imageUrl: Ravi,
    companyUrl: RaviCompany,
  },
  // Milind
  {
    name: "Milind",
    title: "Software Engineer",
    hike: "60% hike",
    imageUrl: Milind,
    companyUrl: MilindCompany,
  },
  // Kiran
  {
    name: "Kiran",
    title: "S/W Engineer",
    hike: "78% hike",
    imageUrl: Kiran,
    companyUrl: KiranCompany,
  },
  // Hemant
  {
    name: "Hemant",
    title: "Sr. Engineer",
    hike: "90% hike",
    imageUrl: Hemant,
    companyUrl: HemantCompany,
  },
  // Akbar
  {
    name: "Akbar",
    title: "Software Engineer",
    hike: "55% hike",
    imageUrl: Akbar,
    companyUrl: AkbarCompany,
  },
  // Sai
  {
    name: "Sai",
    title: "Sr. Software Engineer",
    hike: "70% hike",
    imageUrl: Sai,
    companyUrl: SaiCompany,
  },
  // Ashok
  {
    name: "Ashok",
    title: "Software Engineer",
    hike: "100% hike",
    imageUrl: Ashok,
    companyUrl: AshokCompany,
  },
  // Firoz
  {
    name: "Firoz",
    title: "Software Engineer",
    hike: "80% hike",
    imageUrl: Firoz,
    companyUrl: FirozCompany,
  },
  // Akhil
  {
    name: "Akhil",
    title: "Sr. Software Engineer",
    hike: "65% hike",
    imageUrl: Akhil,
    companyUrl: AkhilCompany,
  },
  // Ramesh
  {
    name: "Ramesh Varma",
    title: "Sr. Software Engineer",
    hike: "110% hike",
    imageUrl: Ramesh,
    companyUrl: RameshCompany,
  },
  // Suresh
  {
    name: "Suresh",
    title: "Java Developer",
    hike: "70% hike",
    imageUrl: Suresh,
    companyUrl: SureshCompany,
  },
  // Nagendra
  {
    name: "Nagendra",
    title: "Trainee Engineer",
    hike: "50% hike",
    imageUrl: Nagendra,
    companyUrl: NagendraCompany,
  },
  // Akhil
  {
    name: "Akhil",
    title: "S/W Engineer",
    hike: "65% hike",
    imageUrl: Akhil2,
    companyUrl: Akhil2Company,
  },
  // Pramod
  {
    name: "Pramod Kumar",
    title: "Sr. Software Engineer",
    hike: "80% hike",
    imageUrl: Pramod,
    companyUrl: PramodCompany,
  },
  // Venkat
  {
    name: "Venkat Krishna",
    title: "Software Engineer",
    hike: "140% hike",
    imageUrl: Venkat,
    companyUrl: VenkatCompany,
  },
  // Tanmay
  {
    name: "Tanmay",
    title: "Sr. Software Engineer",
    hike: "90% hike",
    imageUrl: Tanmay,
    companyUrl: TanmayCompany,
  },
  // Mukesh
  {
    name: "Mukesh",
    title: "Sr. Software Engineer",
    hike: "70% hike",
    imageUrl: Mukesh,
    companyUrl: MukeshCompany,
  },
  // Srikanth
  {
    name: "Srikanth",
    title: "Sr. Software Engineer",
    hike: "95% hike",
    imageUrl: Shrikanth,
    companyUrl: ShrikanthCompany,
  },
  // Ashok
  {
    name: "Ashok",
    title: "Sr. Software Engineer",
    hike: "60% hike",
    imageUrl: Ashok2,
    companyUrl: Ashok2Company,
  },
  // Mizra
  {
    name: "Mizra",
    title: "Trainee Engineer",
    hike: "65% hike",
    imageUrl: Mizra,
    companyUrl: MizraCompany,
  },
  // Gayathri
  {
    name: "Gayathri",
    title: "Trainee Engineer",
    hike: "50% hike",
    imageUrl: Gayathri,
    companyUrl: GayathriCompany,
  },
  //Katari
  {
    name: "Katari Venkatesh",
    title: "Software Engineer",
    hike: "80% hike",
    imageUrl: Katari,
    companyUrl: KatariCompany,
  },
  // Raghu
  {
    name: "Raghu",
    title: "S/W Engineer",
    hike: "100% hike",
    imageUrl: Raghu,
    companyUrl: RaghuCompany,
  },
  // Jaganath
  {
    name: "Jaganath",
    title: "Software Engineer",
    hike: "70% hike",
    imageUrl: Jagananth,
    companyUrl: JagananthCompany,
  },
  // Bindu
  {
    name: "Bindu",
    title: "Software Engineer",
    hike: "90% hike",
    imageUrl: Bindu,
    companyUrl: BinduCompany,
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
          class="flex items-center justify-center md:justify-start [&_img]:max-w-7xl animate-infinite-scroll-slow"
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
          class="flex items-center justify-center md:justify-start [&_img]:max-w-7xl animate-infinite-scroll-slow"
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
