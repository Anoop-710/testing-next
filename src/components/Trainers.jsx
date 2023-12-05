"use client";
import React from "react";
import Image from "next/image";
import IqsLogo from "../../public/assets/iqslogo.jpg";
import Akhil from "../../public/assets/akhil2.jpg";
import Venk from "../../public/assets/venk2.jpeg";
import Bala from "../../public/assets/bala.jpeg";
import TechMahindra from "../../public/assets/techMahindra.png";
import HCL from "../../public/assets/hcl.png";
import TCS from "../../public/assets/tcs.png";
import Mindtree from "../../public/assets/mindtree.jpg";
import Wipro from "../../public/assets/wipro.jpg";
import Mphasis from "../../public/assets/mphasis.jpg";
import IndiqSoft from "../../public/assets/indiqsoft.jpg";
import Nischita from "../../public/assets/Nischita.jpeg";

function Trainers() {
  return (
    <div>
      <h1 className="text-4xl mt-24 text-center font-bold bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent">
        Meet Our trainers
      </h1>
      <h2 className="text-xl text-center font-bold bg-gradient-to-r from-green-500 to-green-700 bg-clip-text text-transparent">
        Learn from our Industrial experts
      </h2>

      <div className="container mt-12 mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 pt-6 gap-8 pl-10 pr-10 ">
        <div class="mx-3 mt-6 flex flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]  sm:shrink-0 sm:grow sm:basis-0 border border-blue-800 ">
          <Image
            src={Akhil}
            width={100}
            height={50}
            alt="picture"
            className="mx-auto mt-6 border rounded-full"
          />
          <div class="p-6">
            <h5 class="mb-2 text-2xl text-center font-medium leading-tight text-purple-800">
              Akhil Meesala
            </h5>
            <h6 className="text-center text-bold text-xl">Founder</h6>
            <Image src={IqsLogo} width={150} height={150} className="mx-auto" />
            <hr />
            <div className="flex justify-between space-between h-12 mt-5 ">
              <Image src={HCL} width={70} height={70} />
              <Image src={TCS} width={70} height={70} />
              <Image src={Mindtree} width={70} height={70} />
            </div>
          </div>
        </div>

        <div class="mx-3 mt-6 flex flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]  sm:shrink-0 sm:grow sm:basis-0 border border-blue-800">
          <Image
            src={Venk}
            width={100}
            height={50}
            alt="picture"
            className="mx-auto mt-6 border rounded-full"
          />
          <div class="p-6">
            <h5 class="mb-2 text-2xl text-center font-medium leading-tight text-purple-800">
              Venkatesh Meesala
            </h5>
            <h6 className="text-center text-bold text-xl">Managing Director</h6>
            <Image src={IqsLogo} width={150} height={150} className="mx-auto" />
            <hr />
            <div className="flex justify-evenly space-evenly h-12 mt-5 ">
              <Image src={TCS} width={70} height={70} />
              <Image src={Mindtree} width={70} height={70} />
            </div>
          </div>
        </div>

        <div class="mx-3 mt-6 flex flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]  sm:shrink-0 sm:grow sm:basis-0 border border-blue-800">
          <Image
            src={Bala}
            width={100}
            height={50}
            alt="picture"
            className="mx-auto mt-6 border rounded-full"
          />
          <div class="p-6">
            <h5 class="mb-2 mt-1 text-2xl text-center font-medium leading-tight text-purple-800">
              V Balachandar
            </h5>
            <h6 className="text-center text-bold text-xl mt-1">
              Python Developer
            </h6>
            <Image
              src={TechMahindra}
              width={150}
              height={150}
              className="mx-auto mt-4"
            />
            <hr />
            <div className="flex justify-evenly space-between h-12 mt-5 ">
              <Image src={Wipro} width={70} height={70} />
              <Image src={Mphasis} width={70} height={70} />
            </div>
          </div>
        </div>

        <div class="mx-3 mt-6 flex flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]  sm:shrink-0 sm:grow sm:basis-0 border border-blue-800 ">
          <Image
            src={Nischita}
            width={100}
            height={50}
            alt="picture"
            className="mx-auto mt-6 border rounded-full"
          />
          <div class="p-6">
            <h5 class="mb-2 text-2xl text-center font-medium leading-tight text-purple-800">
              Nischita Edigar
            </h5>
            <h6 className="text-center text-bold text-xl">Java Developer</h6>
            <Image src={IqsLogo} width={150} height={150} className="mx-auto" />
            <hr />
            <div className="flex justify-evenly space-evenly h-12 mt-5 ">
              <Image src={IndiqSoft} width={70} height={70} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Trainers;
