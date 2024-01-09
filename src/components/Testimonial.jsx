"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import Hemant from "../../public/assets/Testimonials/Hemant.jpg";
import Tanmay from "../../public/assets/Testimonials/Tanmay.jpg";
import Sangita from "../../public/assets/Testimonials/Sangita.jpg";
import Nagendra from "../../public/assets/Testimonials/Nagendra.jpg";
import Bindu from "../../public/assets/Testimonials/Bindu.jpg";
import Ravi from "../../public/assets/Testimonials/Ravi.jpg";
import Mukesh from "../../public/assets/Testimonials/Mukesh.jpg";
import SaiLakshmi from "../../public/assets/Testimonials/SaiLakshmi.jpg";
import Raghu from "../../public/assets/Testimonials/Raghu.jpg";

function Testimonial() {
  const testimonials = [
    {
      avatar: Hemant,
      name: "Hemant",
      title: "Software engineer",
      quote:
        "Grateful to IQSchool for simplifying coding, helping me land a job, and providing the roadmap to my dream career. Invaluable support!",
    },
    {
      avatar: Tanmay,
      name: "Tanmay",
      title: "Senior software engineer",
      quote:
        "Thanks to IQSchool for demystifying coding, paving the way to my dream job in record time. Their expert guidance is unmatched!.",
    },
    {
      avatar: Sangita,
      name: "Sangita",
      title: "Senior software engineer",
      quote:
        "Hats off to IQSchool! Thanks to their superb training, I not only mastered coding early in my academic journey but also secured a job!",
    },
  ];

  const testimonials2 = [
    {
      avatar: Nagendra,
      name: "Nagendra",
      title: "Trainee engineer",
      quote:
        "A big shoutout to IQSchool for making coding accessible and guiding me to a job. Their commitment to student success is truly commendable.",
    },
    {
      avatar: Bindu,
      name: "Bindu",
      title: "Software engineer",
      quote:
        "IQSchool played a key role in propelling my coding skills. Securing a job early on was a testament to their effective training and career guidance.",
    },
    {
      avatar: Ravi,
      name: "Ravi",
      title: "Software engineer",
      quote:
        "Impressed by IQSchool's coding training, they made coding a breeze, and with their help, I landed a job sooner than I ever thought possible.",
    },
  ];

  const testimonials3 = [
    {
      avatar: Mukesh,
      name: "Mukesh",
      title: "Senior Software engineer",
      quote:
        "Grateful for IQSchool's top-notch training, which not only made coding enjoyable but also led me to a job opportunity ahead of schedule.",
    },
    {
      avatar: SaiLakshmi,
      name: "Sai Lakshmi",
      title: "Senior Software engineer",
      quote:
        "Kudos to IQSchool for their exceptional coding curriculum. Bagging a job early on exceeded my expectations. Awesome experience!.",
    },
    {
      avatar: Raghu,
      name: "Raghu",
      title: "S/W engineer",
      quote:
        "Highly impressed with  their coding expertise and career guidance were instrumental in securing a job sooner than I imagined.",
    },
  ];

  return (
    <div
      className="pt-24 flex flex-col justify-center align-middle"
      id="testimonials"
    >
      <section className="relative py-14">
        <div className="relative z-10 max-w-screen-xl mx-auto px-4 md:px-8">
          <div className="max-w-xl sm:text-center md:mx-auto">
            <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
              Hear from our Students
            </h3>
            <p className="mt-3 text-blue-700 text-lg font-bold">
              Hear what our Students have to say about their placement success
              and reviews at IQSchool.
            </p>
          </div>
          <div className="mt-12">
            <Swiper
              slidesPerView={1}
              navigation={true}
              modules={[Autoplay]}
              className="mySwiper"
              autoplay={{ delay: 2000, disableOnInteraction: false }}
              speed={1000}
              loop={true}
            >
              <SwiperSlide>
                <ul className="grid items-center gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {testimonials.map((item, idx) => (
                    <li
                      key={idx}
                      className="bg-white rounded-xl border shadow-md"
                    >
                      <div className="p-4">
                        <svg
                          className="w-9 h-9 text-gray-300"
                          viewBox="0 0 35 35"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9.47895 14.5833C9.15374 14.5833 8.84166 14.6329 8.53103 14.6781C8.63166 14.3398 8.7352 13.9956 8.90145 13.6865C9.0677 13.2373 9.32728 12.8479 9.58541 12.4556C9.80124 12.0312 10.1819 11.7439 10.4619 11.3808C10.755 11.0279 11.1546 10.7931 11.471 10.5C11.7817 10.1937 12.1885 10.0406 12.5123 9.82478C12.8506 9.63082 13.1452 9.41645 13.4602 9.31437L14.2462 8.99062L14.9375 8.70332L14.2302 5.87708L13.3596 6.08707C13.081 6.15707 12.7412 6.23874 12.3548 6.33645C11.9596 6.40937 11.5381 6.60916 11.0685 6.79145C10.6048 6.99853 10.0681 7.13853 9.56937 7.47103C9.0677 7.78895 8.48874 8.05437 7.97833 8.4802C7.48395 8.91916 6.88749 9.29978 6.44708 9.85833C5.96583 10.3804 5.49041 10.9287 5.12145 11.5529C4.69416 12.1479 4.40395 12.8012 4.0977 13.4473C3.82062 14.0933 3.59749 14.754 3.4152 15.3956C3.06958 16.6819 2.91499 17.904 2.8552 18.9496C2.80562 19.9967 2.83478 20.8673 2.89603 21.4973C2.91791 21.7948 2.95874 22.0835 2.98791 22.2833L3.02437 22.5283L3.06228 22.5196C3.32167 23.7312 3.91877 24.8446 4.78452 25.7311C5.65028 26.6175 6.7493 27.2408 7.95447 27.5287C9.15963 27.8166 10.4217 27.7575 11.5946 27.3581C12.7676 26.9587 13.8035 26.2354 14.5825 25.2719C15.3616 24.3083 15.8519 23.1439 15.9969 21.9133C16.1418 20.6828 15.9353 19.4363 15.4014 18.3181C14.8675 17.2 14.028 16.2558 12.9799 15.5949C11.9318 14.934 10.718 14.5832 9.47895 14.5833ZM25.5206 14.5833C25.1954 14.5833 24.8833 14.6329 24.5727 14.6781C24.6733 14.3398 24.7769 13.9956 24.9431 13.6865C25.1094 13.2373 25.369 12.8479 25.6271 12.4556C25.8429 12.0312 26.2235 11.7439 26.5035 11.3808C26.7967 11.0279 27.1962 10.7931 27.5127 10.5C27.8233 10.1937 28.2302 10.0406 28.554 9.82478C28.8923 9.63082 29.1869 9.41645 29.5019 9.31437L30.2879 8.99062L30.9792 8.70332L30.2719 5.87708L29.4012 6.08707C29.1227 6.15707 28.7829 6.23874 28.3965 6.33645C28.0012 6.40937 27.5798 6.60916 27.1102 6.79145C26.6479 6.99999 26.1098 7.13853 25.611 7.47249C25.1094 7.79041 24.5304 8.05582 24.02 8.48166C23.5256 8.92062 22.9292 9.30124 22.4887 9.85833C22.0075 10.3804 21.5321 10.9287 21.1631 11.5529C20.7358 12.1479 20.4456 12.8012 20.1394 13.4473C19.8623 14.0933 19.6392 14.754 19.4569 15.3956C19.1112 16.6819 18.9567 17.904 18.8969 18.9496C18.8473 19.9967 18.8765 20.8673 18.9377 21.4973C18.9596 21.7948 19.0004 22.0835 19.0296 22.2833L19.066 22.5283L19.104 22.5196C19.3633 23.7312 19.9604 24.8446 20.8262 25.7311C21.6919 26.6175 22.791 27.2408 23.9961 27.5287C25.2013 27.8166 26.4634 27.7575 27.6363 27.3581C28.8093 26.9587 29.8452 26.2354 30.6242 25.2719C31.4033 24.3083 31.8936 23.1439 32.0385 21.9133C32.1834 20.6828 31.977 19.4363 31.4431 18.3181C30.9092 17.2 30.0697 16.2558 29.0216 15.5949C27.9735 14.934 26.7597 14.5832 25.5206 14.5833Z"
                            fill="currentColor"
                          />
                        </svg>
                      </div>
                      <figure>
                        <blockquote>
                          <p className="text-gray-800 text-lg font-semibold px-4 py-1">
                            {item.quote}
                          </p>
                        </blockquote>
                        <div className="flex items-center gap-x-4 p-4 mt-6 bg-indigo-50">
                          <Image
                            src={item.avatar}
                            className="rounded-full border-2 border-indigo-500"
                            width={48}
                            height={48}
                            alt="image"
                          />
                          <div>
                            <span className="block text-gray-800 font-semibold">
                              {item.name}
                            </span>
                            <span className="block text-indigo-600 text-sm mt-0.5">
                              {item.title}
                            </span>
                          </div>
                        </div>
                      </figure>
                    </li>
                  ))}
                </ul>
              </SwiperSlide>
              <SwiperSlide>
                <ul className="grid items-center gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {testimonials2.map((item, idx) => (
                    <li
                      key={idx}
                      className="bg-white rounded-xl border shadow-md"
                    >
                      <div className="p-4">
                        <svg
                          className="w-9 h-9 text-gray-300"
                          viewBox="0 0 35 35"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9.47895 14.5833C9.15374 14.5833 8.84166 14.6329 8.53103 14.6781C8.63166 14.3398 8.7352 13.9956 8.90145 13.6865C9.0677 13.2373 9.32728 12.8479 9.58541 12.4556C9.80124 12.0312 10.1819 11.7439 10.4619 11.3808C10.755 11.0279 11.1546 10.7931 11.471 10.5C11.7817 10.1937 12.1885 10.0406 12.5123 9.82478C12.8506 9.63082 13.1452 9.41645 13.4602 9.31437L14.2462 8.99062L14.9375 8.70332L14.2302 5.87708L13.3596 6.08707C13.081 6.15707 12.7412 6.23874 12.3548 6.33645C11.9596 6.40937 11.5381 6.60916 11.0685 6.79145C10.6048 6.99853 10.0681 7.13853 9.56937 7.47103C9.0677 7.78895 8.48874 8.05437 7.97833 8.4802C7.48395 8.91916 6.88749 9.29978 6.44708 9.85833C5.96583 10.3804 5.49041 10.9287 5.12145 11.5529C4.69416 12.1479 4.40395 12.8012 4.0977 13.4473C3.82062 14.0933 3.59749 14.754 3.4152 15.3956C3.06958 16.6819 2.91499 17.904 2.8552 18.9496C2.80562 19.9967 2.83478 20.8673 2.89603 21.4973C2.91791 21.7948 2.95874 22.0835 2.98791 22.2833L3.02437 22.5283L3.06228 22.5196C3.32167 23.7312 3.91877 24.8446 4.78452 25.7311C5.65028 26.6175 6.7493 27.2408 7.95447 27.5287C9.15963 27.8166 10.4217 27.7575 11.5946 27.3581C12.7676 26.9587 13.8035 26.2354 14.5825 25.2719C15.3616 24.3083 15.8519 23.1439 15.9969 21.9133C16.1418 20.6828 15.9353 19.4363 15.4014 18.3181C14.8675 17.2 14.028 16.2558 12.9799 15.5949C11.9318 14.934 10.718 14.5832 9.47895 14.5833ZM25.5206 14.5833C25.1954 14.5833 24.8833 14.6329 24.5727 14.6781C24.6733 14.3398 24.7769 13.9956 24.9431 13.6865C25.1094 13.2373 25.369 12.8479 25.6271 12.4556C25.8429 12.0312 26.2235 11.7439 26.5035 11.3808C26.7967 11.0279 27.1962 10.7931 27.5127 10.5C27.8233 10.1937 28.2302 10.0406 28.554 9.82478C28.8923 9.63082 29.1869 9.41645 29.5019 9.31437L30.2879 8.99062L30.9792 8.70332L30.2719 5.87708L29.4012 6.08707C29.1227 6.15707 28.7829 6.23874 28.3965 6.33645C28.0012 6.40937 27.5798 6.60916 27.1102 6.79145C26.6479 6.99999 26.1098 7.13853 25.611 7.47249C25.1094 7.79041 24.5304 8.05582 24.02 8.48166C23.5256 8.92062 22.9292 9.30124 22.4887 9.85833C22.0075 10.3804 21.5321 10.9287 21.1631 11.5529C20.7358 12.1479 20.4456 12.8012 20.1394 13.4473C19.8623 14.0933 19.6392 14.754 19.4569 15.3956C19.1112 16.6819 18.9567 17.904 18.8969 18.9496C18.8473 19.9967 18.8765 20.8673 18.9377 21.4973C18.9596 21.7948 19.0004 22.0835 19.0296 22.2833L19.066 22.5283L19.104 22.5196C19.3633 23.7312 19.9604 24.8446 20.8262 25.7311C21.6919 26.6175 22.791 27.2408 23.9961 27.5287C25.2013 27.8166 26.4634 27.7575 27.6363 27.3581C28.8093 26.9587 29.8452 26.2354 30.6242 25.2719C31.4033 24.3083 31.8936 23.1439 32.0385 21.9133C32.1834 20.6828 31.977 19.4363 31.4431 18.3181C30.9092 17.2 30.0697 16.2558 29.0216 15.5949C27.9735 14.934 26.7597 14.5832 25.5206 14.5833Z"
                            fill="currentColor"
                          />
                        </svg>
                      </div>
                      <figure>
                        <blockquote>
                          <p className="text-gray-800 text-lg font-semibold px-4 py-1">
                            {item.quote}
                          </p>
                        </blockquote>
                        <div className="flex items-center gap-x-4 p-4 mt-6 bg-indigo-50">
                          <Image
                            src={item.avatar}
                            className="rounded-full border-2 border-indigo-500"
                            width={48}
                            height={48}
                            alt="image"
                          />
                          <div>
                            <span className="block text-gray-800 font-semibold">
                              {item.name}
                            </span>
                            <span className="block text-indigo-600 text-sm mt-0.5">
                              {item.title}
                            </span>
                          </div>
                        </div>
                      </figure>
                    </li>
                  ))}
                </ul>
              </SwiperSlide>
              <SwiperSlide>
                <ul className="grid items-center gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {testimonials3.map((item, idx) => (
                    <li
                      key={idx}
                      className="bg-white rounded-xl border shadow-md"
                    >
                      <div className="p-4">
                        <svg
                          className="w-9 h-9 text-gray-300"
                          viewBox="0 0 35 35"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9.47895 14.5833C9.15374 14.5833 8.84166 14.6329 8.53103 14.6781C8.63166 14.3398 8.7352 13.9956 8.90145 13.6865C9.0677 13.2373 9.32728 12.8479 9.58541 12.4556C9.80124 12.0312 10.1819 11.7439 10.4619 11.3808C10.755 11.0279 11.1546 10.7931 11.471 10.5C11.7817 10.1937 12.1885 10.0406 12.5123 9.82478C12.8506 9.63082 13.1452 9.41645 13.4602 9.31437L14.2462 8.99062L14.9375 8.70332L14.2302 5.87708L13.3596 6.08707C13.081 6.15707 12.7412 6.23874 12.3548 6.33645C11.9596 6.40937 11.5381 6.60916 11.0685 6.79145C10.6048 6.99853 10.0681 7.13853 9.56937 7.47103C9.0677 7.78895 8.48874 8.05437 7.97833 8.4802C7.48395 8.91916 6.88749 9.29978 6.44708 9.85833C5.96583 10.3804 5.49041 10.9287 5.12145 11.5529C4.69416 12.1479 4.40395 12.8012 4.0977 13.4473C3.82062 14.0933 3.59749 14.754 3.4152 15.3956C3.06958 16.6819 2.91499 17.904 2.8552 18.9496C2.80562 19.9967 2.83478 20.8673 2.89603 21.4973C2.91791 21.7948 2.95874 22.0835 2.98791 22.2833L3.02437 22.5283L3.06228 22.5196C3.32167 23.7312 3.91877 24.8446 4.78452 25.7311C5.65028 26.6175 6.7493 27.2408 7.95447 27.5287C9.15963 27.8166 10.4217 27.7575 11.5946 27.3581C12.7676 26.9587 13.8035 26.2354 14.5825 25.2719C15.3616 24.3083 15.8519 23.1439 15.9969 21.9133C16.1418 20.6828 15.9353 19.4363 15.4014 18.3181C14.8675 17.2 14.028 16.2558 12.9799 15.5949C11.9318 14.934 10.718 14.5832 9.47895 14.5833ZM25.5206 14.5833C25.1954 14.5833 24.8833 14.6329 24.5727 14.6781C24.6733 14.3398 24.7769 13.9956 24.9431 13.6865C25.1094 13.2373 25.369 12.8479 25.6271 12.4556C25.8429 12.0312 26.2235 11.7439 26.5035 11.3808C26.7967 11.0279 27.1962 10.7931 27.5127 10.5C27.8233 10.1937 28.2302 10.0406 28.554 9.82478C28.8923 9.63082 29.1869 9.41645 29.5019 9.31437L30.2879 8.99062L30.9792 8.70332L30.2719 5.87708L29.4012 6.08707C29.1227 6.15707 28.7829 6.23874 28.3965 6.33645C28.0012 6.40937 27.5798 6.60916 27.1102 6.79145C26.6479 6.99999 26.1098 7.13853 25.611 7.47249C25.1094 7.79041 24.5304 8.05582 24.02 8.48166C23.5256 8.92062 22.9292 9.30124 22.4887 9.85833C22.0075 10.3804 21.5321 10.9287 21.1631 11.5529C20.7358 12.1479 20.4456 12.8012 20.1394 13.4473C19.8623 14.0933 19.6392 14.754 19.4569 15.3956C19.1112 16.6819 18.9567 17.904 18.8969 18.9496C18.8473 19.9967 18.8765 20.8673 18.9377 21.4973C18.9596 21.7948 19.0004 22.0835 19.0296 22.2833L19.066 22.5283L19.104 22.5196C19.3633 23.7312 19.9604 24.8446 20.8262 25.7311C21.6919 26.6175 22.791 27.2408 23.9961 27.5287C25.2013 27.8166 26.4634 27.7575 27.6363 27.3581C28.8093 26.9587 29.8452 26.2354 30.6242 25.2719C31.4033 24.3083 31.8936 23.1439 32.0385 21.9133C32.1834 20.6828 31.977 19.4363 31.4431 18.3181C30.9092 17.2 30.0697 16.2558 29.0216 15.5949C27.9735 14.934 26.7597 14.5832 25.5206 14.5833Z"
                            fill="currentColor"
                          />
                        </svg>
                      </div>
                      <figure>
                        <blockquote>
                          <p className="text-gray-800 text-lg font-semibold px-4 py-1">
                            {item.quote}
                          </p>
                        </blockquote>
                        <div className="flex items-center gap-x-4 p-4 mt-6 bg-indigo-50">
                          <Image
                            src={item.avatar}
                            className="rounded-full border-2 border-indigo-500"
                            width={48}
                            height={48}
                            alt="image"
                          />
                          <div>
                            <span className="block text-gray-800 font-semibold">
                              {item.name}
                            </span>
                            <span className="block text-indigo-600 text-sm mt-0.5">
                              {item.title}
                            </span>
                          </div>
                        </div>
                      </figure>
                    </li>
                  ))}
                </ul>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        <div
          className="absolute top-0 w-full h-[350px]"
          style={{
            background:
              "linear-gradient(152.92deg, rgba(192, 132, 252, 0.2) 4.54%, rgba(232, 121, 249, 0.17) 34.2%, rgba(192, 132, 252, 0.1) 77.55%)",
          }}
        ></div>
      </section>
    </div>
  );
}

export default Testimonial;
