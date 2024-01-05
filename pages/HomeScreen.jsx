import React from "react";
import Landing from "../src/components/Landing";
import Hero from "../src/components/Hero";
import Courses from "../src/components/Courses";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import Trainers from "@/components/Trainers";
import Testimonial from "@/components/Testimonial";
const HomeScreen = () => {
  return (
    <>
      <Landing />
      <Hero />
      <Courses />
      <Features />
      <Testimonials />
      <Testimonial />
      <Trainers />
      <Footer />
    </>
  );
};

export default HomeScreen;
