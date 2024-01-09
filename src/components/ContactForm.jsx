"use client";
import { db } from "../app/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import React, { useState } from "react";

async function addDataToFirestore(
  name,
  email,
  mobile,
  qualification,
  year,
  course
) {
  try {
    const docRef = await addDoc(collection(db, "messages"), {
      name: name,
      email: email,
      mobile: mobile,
      qualification: qualification,
      year: year,
      course: course,
    });

    return true;
  } catch (e) {
    console.error("Error adding document: ", e);
    return false;
  }
}
const ContactForm = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [qualification, setQualification] = useState("");
  const [year, setYear] = useState("");
  const [course, setCourse] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const added = await addDataToFirestore(
      fullname,
      email,
      mobile,
      qualification,
      year,
      course
    );
    if (added) {
      setFullname("");
      setEmail("");
      setMobile("");
      setQualification("");
      setYear("");
      setCourse("");

      alert("Your message has been sent successfully!");
    } else {
      alert("Something went wrong. Please try again later.");
    }
  };
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] w-full max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-10 text-purple-800 text-center">
        Register for free
      </h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="fulname"></label>
        <input
          className="border border-purple-400 mb-4 w-full p-2 rounded-md outline-purple-400"
          type="text"
          placeholder="Enter your Name"
          id="fulname"
          onChange={(e) => setFullname(e.target.value)}
          value={fullname}
        />
        <label htmlFor="email"></label>
        <input
          className="border border-purple-400 mb-4 w-full p-2 rounded-md outline-purple-400"
          type="email"
          placeholder="Enter your Email Id"
          id="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <label htmlFor="mobile"></label>
        <input
          className="border border-purple-400 mb-4 w-full p-2 rounded-md outline-purple-400"
          type="tel"
          placeholder="Enter your Mobile Number"
          id="mobile"
          onChange={(e) => setMobile(e.target.value)}
          value={mobile}
        />

        <label htmlFor="qualification"></label>
        <select
          className="border border-purple-400 mb-4 w-full p-2 rounded-md outline-purple-400"
          id="qualification"
          onChange={(e) => setQualification(e.target.value)}
        >
          <option>SELECT QUALIFICATION</option>

          <option value="BE / B.Tech / MCA">BE / B.Tech / MCA</option>
          <option value="BCA, BSc, B.com, BBA">BCA, BSc, B.com, BBA</option>
          <option value="Others">Others</option>
        </select>

        <label htmlFor="year"></label>
        <select
          className="border border-purple-400 mb-4 w-full p-2 rounded-md outline-purple-400"
          id="year"
          onChange={(e) => setYear(e.target.value)}
        >
          <option>SELECT YEAR OF PASSING</option>

          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="Others">Others</option>
        </select>

        <label htmlFor="course"></label>
        <select
          className="border border-purple-400 mb-4 w-full p-2 rounded-md outline-purple-400"
          id="course"
          onChange={(e) => setCourse(e.target.value)}
        >
          <option>SELECT COURSE</option>
          <option value="Java">Java Programming</option>
          <option value="Python">Python Programming</option>
          <option value="Data Science">Data Science</option>
          <option value="Web Development">Web Development - MERN</option>
          <option value="App Development">
            Data Structures and Algorithms
          </option>
          <option value="Devops">Devops</option>
          <option value="Data Analytics">Data Analytics</option>
          <option value="Internship">Internship</option>
          <option value="Others"></option>
        </select>
        <button
          className="bg-purple-600 text-white w-full py-2 rounded-md"
          type="submit"
        >
          Enroll Now
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
