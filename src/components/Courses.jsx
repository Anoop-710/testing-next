"use client";
import React from "react";
import { CheckIcon } from "@heroicons/react/20/solid";

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
      "Backend development with Python and Django",
      "Working with databases using Python",
      "Mock Interviews",
    ],
  },
  {
    name: "Data Science",
    href: "#",
    duration: "8 months",
    priceMonthly: 32,
    description:
      "Harness the Insights of Data, Excel in Analytics, and Transform Your Career with Data Science Excellence!",
    includedFeatures: [
      "Data Manipulation and Analysis ",
      "Data visualization with Matplotlib and Seaborn",
      "Machine Learning and Statistics",
      "Data Science Tools and Projects",
      "Mock Interviews",
    ],
  },
  {
    name: "Devops and AWS",
    href: "#",
    duration: "6 months",
    priceMonthly: 48,
    description:
      " Streamline Operations, Automate Deployments, and Lead the Way to Seamless Software Delivery in DevOps!",
    includedFeatures: [
      "Version Control and CI/CD ",
      "Infrastructure as Code (IaC)",
      "Monitoring and DevOps Best Practices",
      "Containerization and orchestration with Docker and Kubernetes",
      "Mock Interviews",
    ],
  },
];

function Courses() {
  return (
    <div>
      <div>
        <h1 className="text-4xl text-center font-bold mb-8 mt-12 text-purple-600">
          Courses
        </h1>
        <h2 className="text-3xl text-center font-semibold mt-8 text-black">
          Full Stack Development | Data Science | Devops Engineer{" "}
        </h2>

        <div className="bg-white">
          <div className="mx-auto max-w-7xl py-12 px-6 lg:px-8">
            <div className="mt-12 text-center space-y-4 sm:mt-16 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0 lg:mx-auto lg:max-w-4xl xl:mx-0 xl:max-w-none xl:grid-cols-4">
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
                      className="w-44 mt-2 rounded-md flex itm justify-center text-center mx-auto"
                      style={{
                        color: "#945FF6",
                        backgroundColor: "rgba(148, 95, 246, 0.15)",
                      }}
                    >
                      <svg
                        className="mt-1 mr-2"
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
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
                    <p className="mt-4 text-sm text-gray-500 font-semibold text-">
                      {tier.description}
                    </p>
                  </div>
                  <div className="px-4 pt-6 pb-8">
                    <h3 className="text-sm font-medium text-gray-900">
                      CURRICULUM
                    </h3>
                    <ul role="list" className="mt-6 space-y-4">
                      {tier.includedFeatures.map((feature) => (
                        <li key={feature} className="flex justify-start gap-2">
                          <CheckIcon
                            className="h-5 w-5 flex-shrink-0 text-green-500"
                            aria-hidden="true"
                          />
                          <span className="text-sm text-gray-500 text-start">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Courses;
