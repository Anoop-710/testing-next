"use client";
import React from "react";
import { CheckIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
const tiers = [
  {
    name: "Java Full Stack Development",
    href: "#",
    duration: "6 months",
    priceMonthly: 12,
    description:
      "Conquer DSA, Problem Solving, Full Stack, and Elevate Your Career in Java Software Development!",
    includedFeatures: [
      "Data structures and algorithms",
      "Object-oriented programming",
      "Frontend development with HTML, CSS, JavaScript and React.js",
      "Backend with Java Spring Framework.",
      "Mock Interviews",
    ],
    pdfLink: "/files/Java.pdf",
  },
  {
    name: "Python Full Stack Development",
    href: "#",
    duration: "6 months",
    priceMonthly: 24,
    description:
      'Unleash the Power of Python, Master Full Stack, and Forge a Path to Success in Software Engineering!"',
    includedFeatures: [
      "Python Fundamentals",
      "RESTful API development",
      "Backend development with Python and Django framework",
      "Working with databases using Python",
      "Mock Interviews",
    ],
    pdfLink: "/files/Python.pdf",
  },
  {
    name: "Data Science",
    href: "#",
    duration: "6 months",
    priceTotal: 3000,
    description:
      "Dive deep into Data Science.Master key concepts, tools, and techniques for extracting insights from data.",
    includedFeatures: [
      "Foundations of Statistics and Probability",
      "Data Cleaning and Preprocessing",
      "Machine Learning Algorithms",
      "Data Science Tools and Techniques to solve real-world problems",
      "Real-world Data Science Projects",
    ],
    pdfLink: "/files/Science.pdf",
  },
  {
    name: "Devops and AWS",
    href: "#",
    duration: "6 months",
    priceMonthly: 48,
    description:
      " Streamline Operations, Automate Deployments, and Lead the Way to Seamless Software Delivery!",
    includedFeatures: [
      "Version Control and CI/CD ",
      "Infrastructure as Code (IaC)",
      "Monitoring and DevOps Best Practices",
      "Containerization and orchestration with Docker and Kubernetes",
      "Mock Interviews",
    ],
    pdfLink: "/files/Devops.pdf",
  },
  {
    name: "Data Analytics",
    href: "#",
    duration: "6 months",
    priceMonthly: 48,
    description:
      "Master Data Analytics using Python, Explore Insights from Data, and Enhance Decision-Making Skills!",
    includedFeatures: [
      "Data Exploration and Analysis with Python",
      "Statistical Analysis and Visualization",
      "Machine Learning Fundamentals",
      "Big Data Analytics with tools like Spark, Hadoop, Apache Storm etc",
      "Mock Data Analytics Projects",
    ],
    pdfLink: "/files/Analytics.pdf",
  },
  {
    name: "Internship Program",
    href: "#",
    duration: "3 months",
    stipend: "$1000 per month",
    description:
      "Join our Program to gain hands-on experience,and accelerate your career in the tech industry!",
    includedFeatures: [
      "Hands-on Project Assignments",
      "Mentorship from Industry Professionals",
      "Weekly Learning Sessions, Workshops and Hackathons",
      "Networking Opportunities",
      "Internship Completion Certificate",
    ],
    pdfLink: "/files/Internship.pdf",
  },
];

function Courses() {
  return (
    <>
      <div>
        <div>
          <h1
            className="text-4xl text-center font-bold mb-8 mt-12 text-purple-600"
            id="courses"
          >
            Courses
          </h1>
          <h2 className="text-3xl text-center font-semibold mt-8 text-black">
            Full Stack Development | Data Science | DevOps | Internship
          </h2>

          <div className="bg-gradient-to-r from-sky-500 to-blue-800 mt-10 ml-10 mr-10 border rounded-3xl">
            <div className="mx-auto max-w-7xl pb-10 px-6 lg:px-8">
              <div className="mt-12 text-center space-y-4 sm:mt-16 sm:grid sm:grid-cols-3 sm:gap-6 sm:space-y-0 lg:mx-auto lg:max-w-4xl xl:mx-0 xl:max-w-none xl:grid-cols-3">
                {tiers.map((tier) => (
                  <div
                    key={tier.name}
                    className="divide-y divide-gray-200 rounded-lg border border-purple-400 shadow-sm bg-indigo-200 "
                  >
                    <div className="p-2 mt-4">
                      <h2 className="text-lg font-medium leading-6 text-gray-900">
                        {tier.name}
                      </h2>
                      <div
                        className="w-44 mt-2 rounded-md flex itm justify-center text-center mx-auto font-bold"
                        style={{
                          color: "#945FF6",
                          backgroundColor: "rgba(148, 95, 246, 0.15)",
                        }}
                      >
                        <svg
                          className="mt-1 mr-2"
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth="0"
                          viewBox="0 0 1024 1024"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path>
                          <path d="M686.7 638.6L544.1 535.5V288c0-4.4-3.6-8-8-8H488c-4.4 0-8 3.6-8 8v275.4c0 2.6 1.2 5 3.3 6.5l165.4 120.6c3.6 2.6 8.6 1.8 11.2-1.7l28.6-39c2.6-3.7 1.8-8.7-1.8-11.2z"></path>
                        </svg>
                        Duration {tier.duration}
                      </div>
                      <p className="mt-4 text-sm text-gray-800 font-semibold text-">
                        {tier.description}
                      </p>
                    </div>
                    <div className="px-4 pt-6 pb-8">
                      <h3 className="text-sm font-medium text-gray-900">
                        CURRICULUM
                      </h3>
                      <ul role="list" className="mt-6 space-y-4">
                        {tier.includedFeatures.map((feature) => (
                          <li
                            key={feature}
                            className="flex justify-start gap-2"
                          >
                            <CheckIcon
                              className="h-5 w-5 flex-shrink-0 text-green-500"
                              aria-hidden="true"
                            />
                            <span className="text-sm text-gray-700 text-start font-semibold">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <Link href={tier.pdfLink} target="_blank">
                        <button className="w-1/2 px-4 py-2 my-4 text-sm font-medium text-white bg-purple-600 rounded-md hover:bg-purple-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                          Download brochure
                        </button>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Courses;
