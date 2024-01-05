"use client";

import { useRef, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import img from "./image.png";
import img1 from "./images.png";
import img2 from "./yellow-question-mark.jpg";
import img3 from "./qu.jpg";
import img4 from "./question_marks_background.jpg";

const FaqsCard = (props) => {
  const answerElRef = useRef();
  const [state, setState] = useState(false);
  const [answerH, setAnswerH] = useState("0px");
  const { faqsList, idx } = props;

  const handleOpenAnswer = () => {
    const answerElH = answerElRef.current.childNodes[0].offsetHeight;
    setState(!state);
    setAnswerH(`${answerElH + 20}px`);
  };

  return (
    <div
      className="space-y-3 mt-5 overflow-hidden border-b"
      key={idx}
      onClick={handleOpenAnswer}
    >
      <h4 className="cursor-pointer pb-5 flex items-center justify-between text-lg text-gray-300 font-semibold">
        {faqsList.q}
        {state ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-white ml-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M20 12H4"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-white ml-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4v16m8-8H4"
            />
          </svg>
        )}
      </h4>
      <div
        ref={answerElRef}
        className="duration-300"
        style={state ? { height: answerH } : { height: "0px" }}
      >
        <div>
          <p className="text-gray-300 font-medium">{faqsList.a}</p>
        </div>
      </div>
    </div>
  );
};

export default () => {
  const faqsList = [
    {
      q: "Will I receive a certificate after completion of the course ?",
      a: "Yes ! you will receive a certificate once you successfully complete all the modules from IQSchool.",
    },
    {
      q: "What is the mode of instruction ?",
      a: "We offer online mode of training. so you can connect and learn from anywhere at your convenience.",
    },
    {
      q: "I am from Non-IT background, am i eligible for this program ?",
      a: "Yes, this program is offered for individuals from both IT and Non-IT background.",
    },
    {
      q: "I have 2 years gap after graduation and doesn't have job right now, can i join this program ?",
      a: "Yes you are eligible to join the training program.",
    },
    {
      q: "Can I get job Assistance after course completion ?",
      a: "Yes as part of this program, we provide you with placement assistance.",
    },
    {
      q: "What can I learn in this program ?",
      a: "IQSchool offers 3 different courses i.e., Java Full Stack, Python Full stack and Data Science. you can choose from these.",
    },
    {
      q: "What is the duration of the course ?",
      a: "We offer two levels of program, Master course program which is for 3 months and Pro program which is for 5 months.",
    },
    {
      q: "What is the duration of the class ?",
      a: "On an average of 2 hours for Master course and 1.5 hours for Pro course..",
    },
    {
      q: "What is timing of the class ?",
      a: "We conduct both morning and evening batches. you can choose accordingly.",
    },
    {
      q: "Can I talk to trainers for clearing my doubts ?",
      a: "Saturday session will be exclusively for doubt clearance.",
    },
  ];

  return (
    <>
      <Navbar />
      {/* <Image src={img} className="absolute top-24 -z-10 w-screen" /> */}
      {/* <Image src={img1} className="absolute top-24 -z-10 w-screen" /> */}
      {/* <Image src={img2} className="absolute top-24 -z-10 w-screen" /> */}
      {/* <Image src={img3} className="absolute top-24 -z-10 w-screen" /> */}
      <Image src={img4} className="absolute top-24 -z-10 w-screen h-[160vh]" />
      <section className="bg-gradient-to-r from-sky-600 to-blue-950 border rounded-2xl leading-relaxed max-w-screen-md mt-12 mx-auto px-4 md:px-8">
        <div className="space-y-3 text-center">
          <h1 className="text-3xl text-white font-bold pt-8">
            Frequently Asked Questions
          </h1>
          <p className="text-white max-w-lg mx-auto text-lg font-semibold">
            Answered all frequently asked questions, Still confused? feel free
            to contact us.
          </p>
        </div>
        <div className="mt-14 max-w-2xl mx-auto">
          {faqsList.map((item, idx) => (
            <FaqsCard idx={idx} faqsList={item} />
          ))}
        </div>
      </section>

      <main className="relative py-28 bg-gray-900 mt-16 border rounded-xl">
        <div className="relative z-10 max-w-screen-xl mx-auto text-gray-600 sm:px-4 md:px-8">
          <div className="max-w-lg space-y-3 px-4 sm:mx-auto sm:text-center sm:px-0">
            <h3 className="text-cyan-400 font-semibold">Contact</h3>
            <p className="text-white text-3xl font-semibold sm:text-4xl">
              Get in touch
            </p>
            <p className="text-gray-300">
              We’d love to hear from you! Please fill out the form bellow.
            </p>
          </div>
          <div className="mt-12 mx-auto px-4 p-8 bg-white sm:max-w-lg sm:px-8 sm:rounded-xl">
            <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
              <div>
                <label className="font-medium">Full name</label>
                <input
                  type="text"
                  required
                  className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                />
              </div>
              <div>
                <label className="font-medium">Email</label>
                <input
                  type="email"
                  required
                  className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                />
              </div>
              <div>
                <label className="font-medium">Phone number</label>
                <div className="relative mt-2">
                  <div className="absolute inset-y-0 left-3 my-auto h-6 flex items-center border-r pr-2">
                    <select className="text-sm bg-transparent outline-none rounded-lg h-full">
                      <option>IN</option>
                    </select>
                  </div>
                  <input
                    type="number"
                    placeholder="+91"
                    required
                    className="w-full pl-[4.5rem] pr-3 py-2 appearance-none bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                  />
                </div>
              </div>
              <div>
                <label className="font-medium">Message</label>
                <textarea
                  required
                  className="w-full mt-2 h-36 px-3 py-2 resize-none appearance-none bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                ></textarea>
              </div>
              <button className="w-full px-4 py-2 text-white font-medium bg-gray-800 hover:bg-gray-700 active:bg-gray-900 rounded-lg duration-150">
                Submit
              </button>
            </form>
          </div>
        </div>
        <div
          className="absolute inset-0 blur-[118px] max-w-lg h-[800px] mx-auto sm:max-w-3xl sm:h-[400px]"
          style={{
            background:
              "linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)",
          }}
        ></div>
      </main>

      <Footer />
    </>
  );
};
