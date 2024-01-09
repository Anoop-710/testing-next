import Navbar from "@/components/Navbar";
import React from "react";
import Image from "next/image";
import img from "./image-007.jpg";
import placement from "./placement.png";
import placement2 from "./placemeents2.png";
import Link from "next/link";
import Footer from "@/components/Footer";
import {
  CloudArrowUpIcon,
  FingerPrintIcon,
  BriefcaseIcon,
  ComputerDesktopIcon,
  AcademicCapIcon,
  TrophyIcon,
  PhoneIcon,
  BanknotesIcon,
  CheckBadgeIcon,
  ClockIcon,
  ReceiptRefundIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";
const page = () => {
  const features = [
    {
      name: "CUTTING-EDGE CONTENT",
      description:
        "Develop a high-level perspective of the coding landscape and a deeper understanding of cutting-edge topics such as descriptive, predictive and prescriptive analysis through carefully chosen examples from various disciplines.",
      icon: CloudArrowUpIcon,
    },
    {
      name: "INDUSTRY INSIGHTS",
      description:
        "Acquire a deeper level of insight into the applications of analytics through recorded interviews with industry experts, articles featuring real-world use cases and weekly access to learning facilitators.",
      icon: ComputerDesktopIcon,
    },
    {
      name: "JOB-READY PORTFOLIO",
      description:
        "Develop a comprehensive portfolio highlighting you experience with platforms such as Java and Python to share with potential employers.",
      icon: BriefcaseIcon,
    },
    {
      name: "CAPSTONE PROJECT",
      description:
        "Solve a real-world business problem specific to your organisation using highly sought-after coding techniques,tools and platforms, including Python, SQL.",
      icon: FingerPrintIcon,
    },
    {
      name: "CAREER GUIDANCE",
      description:
        "Access coaching, career guidance and mentorship to help launch or accelerate your career in coding.",
      icon: AcademicCapIcon,
    },
    {
      name: "CERTIFICATE OF COMPLETION",
      description:
        "Distinguish yourself with a certificate of Iqschool, a leading platform in the discipline of full stack development.",
      icon: TrophyIcon,
    },
  ];

  const actions = [
    {
      title: "GREAT INVESTMENT FOR YOUR FUTURE",
      href: "#",
      icon: ClockIcon,
      iconForeground: "text-teal-700",
      iconBackground: "bg-teal-50",
      desc: "Invest in yourself and your future with IQSchool. Our internship program is crafted to be a valuable asset throughout your career journey.",
    },
    {
      title: "BUILDS FOUNDATION FOR YOUR CAREER",
      href: "#",
      icon: CheckBadgeIcon,
      iconForeground: "text-purple-700",
      iconBackground: "bg-purple-50",
      desc: "We don't just teach skills, We build foundations for successful careers. IQSchool's program is your stepping stone to a rewarding future in the tech industry ",
    },
    {
      title: "Schedule a one-on-one",
      href: "#",
      icon: UsersIcon,
      iconForeground: "text-sky-700",
      iconBackground: "bg-sky-50",
      desc: "We are here to help you. Schedule a one-on-one with our experts to get started with your coding journey",
    },
    {
      title: "ROADMAP TO GET A HIGH PAYING JOB",
      href: "#",
      icon: BanknotesIcon,
      iconForeground: "text-yellow-700",
      iconBackground: "bg-yellow-50",
      desc: "IQSchool provides more than education. We offer a roadmap to success. Our program is meticulously designed to guide you towards a high-paying career in full-stack development.",
    },
    {
      title: "IQSCHOOL CERTIFICATE ACTS AS A RECRUITMENT TOOL",
      href: "#",
      icon: ReceiptRefundIcon,
      iconForeground: "text-rose-700",
      iconBackground: "bg-rose-50",
      desc: "Our certificate is more than a symbol, It's a recruitment tool. Showcase your skills proudly with a certification recognized by industry leaders.",
    },
    {
      title: "STRONG NETWORKING OPPORTUNITIES WITH EXPERTS",
      href: "#",
      icon: AcademicCapIcon,
      iconForeground: "text-indigo-700",
      iconBackground: "bg-indigo-50",
      desc: "Connect with industry experts and expand your professional network. IQSchool provides exclusive networking opportunities to boost your career prospects.",
    },
  ];
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  return (
    <>
      <Navbar />

      {/* Banner */}

      <div className="relative isolate flex items-center gap-x-6 overflow-hidden bg-gray-50 px-6 py-2.5 sm:px-3.5 sm:before:flex-1">
        <div
          className="absolute left-[max(-7rem,calc(50%-52rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
          aria-hidden="true"
        >
          <div
            className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#ff80b5] to-[#9089fc] opacity-30"
            style={{
              clipPath:
                "polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)",
            }}
          />
        </div>
        <div
          className="absolute left-[max(45rem,calc(50%+8rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
          aria-hidden="true"
        >
          <div
            className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#ff80b5] to-[#9089fc] opacity-30"
            style={{
              clipPath:
                "polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)",
            }}
          />
        </div>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
          <p className="text-sm leading-6 text-gray-900">
            <strong className="font-semibold">Hiring Interns</strong>
            <svg
              viewBox="0 0 2 2"
              className="mx-2 inline h-0.5 w-0.5 fill-current"
              aria-hidden="true"
            >
              <circle cx={1} cy={1} r={1} />
            </svg>
            Hiring new interns, Click here to register
          </p>
          <Link
            href="/#contact-form"
            className="flex-none rounded-full bg-gray-900 px-3.5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
          >
            Register now <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
        <div className="flex flex-1 justify-end">
          <button
            type="button"
            className="-m-3 p-3 focus-visible:outline-offset-[-4px]"
          >
            <span className="sr-only">Dismiss</span>
          </button>
        </div>
      </div>

      <div className="relative bg-white py-16 sm:py-24">
        <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:items-start lg:gap-24 lg:px-8">
          <div className="relative sm:py-16 lg:py-0">
            <div
              aria-hidden="true"
              className="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen"
            >
              <div className="absolute inset-y-0 right-1/2 w-full rounded-r-3xl bg-gray-50 lg:right-72" />
              <svg
                className="absolute top-8 left-1/2 -ml-3 lg:-right-8 lg:left-auto lg:top-12"
                width={404}
                height={392}
                fill="none"
                viewBox="0 0 404 392"
              >
                <defs>
                  <pattern
                    id="02f20b47-fd69-4224-a62a-4c9de5c763f7"
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect
                      x={0}
                      y={0}
                      width={4}
                      height={4}
                      className="text-gray-200"
                      fill="currentColor"
                    />
                  </pattern>
                </defs>
                <rect
                  width={404}
                  height={392}
                  fill="url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)"
                />
              </svg>
            </div>
            <div className="relative mx-auto max-w-md px-6 sm:max-w-3xl lg:max-w-none lg:px-0 lg:py-20">
              {/* Testimonial card*/}
              <div className="relative overflow-hidden rounded-2xl pt-64 pb-10 shadow-xl">
                <Image
                  src={img}
                  className="absolute inset-0 h-full w-full object-cover"
                  alt="image"
                />
                <div className="absolute inset-0 bg-indigo-500 mix-blend-multiply" />
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-600 via-indigo-600 opacity-90" />
                <div className="relative px-8">
                  <blockquote className="mt-8">
                    <div className="relative text-lg font-medium text-white md:flex-grow">
                      <svg
                        className="absolute top-0 left-0 h-8 w-8 -translate-x-3 -translate-y-2 transform text-indigo-400"
                        fill="currentColor"
                        viewBox="0 0 32 32"
                        aria-hidden="true"
                      >
                        <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                      </svg>
                      <p className="relative">
                        FULL STACK WEB DEVELOPMENT{" "}
                        <p>GET FUTURE-READY CAREER</p>
                        INTERNSHIP PROGRAM
                      </p>
                    </div>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>

          <div className="relative mx-auto max-w-md px-6 sm:max-w-3xl lg:px-0">
            {/* Content area */}
            <div className="pt-12 sm:pt-16 lg:pt-20">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Now Featuring chatGPT and Generative AI Modules
              </h2>
              <div className="mt-6 space-y-6 text-gray-500">
                <p className="text-lg">
                  In the dynamic landscape of the tech-driven economy, our Full
                  Stack Development Internship Program offers a comprehensive
                  learning journey, guided by seasoned professionals who have
                  excelled in the industry.
                </p>
                <p className="text-base leading-7">
                  Tailored for individuals passionate about problemsolving,
                  coding, front-end and back-end development, and database
                  management, this internship provides hands-on experience and
                  practical knowledge.
                </p>
                <p className="text-base leading-7">
                  Collaborations with industry leaders enrich our curriculum,
                  bridging the gap between theory and real-world applications.
                  Upon completion of the program, interns will receive placement
                  assistance, ensuring they are well-equipped and supported in
                  securing opportunities within the ever-evolving tech industry.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why IQ */}

      <h1 className="text-4xl text-center font-bold mb-8 mt-12 text-purple-600">
        WHY IQSCHOOL INTERNSHIP
      </h1>
      <div className="divide-y divide-gray-200 overflow-hidden rounded-lg bg-gray-200 shadow sm:grid sm:grid-cols-2 sm:gap-px sm:divide-y-0">
        {actions.map((action, actionIdx) => (
          <div
            key={action.title}
            className={classNames(
              actionIdx === 0
                ? "rounded-tl-lg rounded-tr-lg sm:rounded-tr-none"
                : "",
              actionIdx === 1 ? "sm:rounded-tr-lg" : "",
              actionIdx === actions.length - 2 ? "sm:rounded-bl-lg" : "",
              actionIdx === actions.length - 1
                ? "rounded-bl-lg rounded-br-lg sm:rounded-bl-none"
                : "",
              "relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500"
            )}
          >
            <div>
              <span
                className={classNames(
                  action.iconBackground,
                  action.iconForeground,
                  "rounded-lg inline-flex p-3 ring-4 ring-white"
                )}
              >
                <action.icon className="h-6 w-6" aria-hidden="true" />
              </span>
            </div>
            <div className="mt-8">
              <h3 className="text-lg font-medium">
                <a href={action.href} className="focus:outline-none">
                  {/* Extend touch target to entire panel */}
                  <span className="absolute inset-0" aria-hidden="true" />
                  {action.title}
                </a>
              </h3>
              <p className="mt-2 text-sm text-gray-500">{action.desc}</p>
            </div>
            <span
              className="pointer-events-none absolute top-6 right-6 text-gray-300 group-hover:text-gray-400"
              aria-hidden="true"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
              </svg>
            </span>
          </div>
        ))}
      </div>

      {/* 2 x 2 grid features */}

      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Explore our programme highlights
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              As an Intern, you’re not just gaining skills you’re crafting a
              legacy!
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-y-10 gap-x-8 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              {features.map((feature) => (
                <div key={feature.name} className="relative pl-16">
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    <div className="absolute top-0 left-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                      <feature.icon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </div>
                    {feature.name}
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">
                    {feature.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center mt-24">
        <h1 className="text-4xl text-center font-bold text-purple-600">
          PLACEMENT ASSISTANCE
        </h1>
        <Image src={placement} alt="image" />
        {/* <Image src={placement2} /> */}
      </div>

      <div className="flex items-center justify-center mt-12">
        <Link href="/#contact-form">
          <button className="bg-gradient-to-r from-blue-800 to-blue-600 text-white py-2 px-4 rounded-full flex justify-between shadow-lg ">
            <PhoneIcon className="h-6 w-6 mr-2" />
            Request a callback
          </button>
        </Link>
      </div>
      <Footer />
    </>
  );
};

export default page;
