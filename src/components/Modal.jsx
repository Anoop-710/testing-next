"use client";
import * as Dialog from "@radix-ui/react-dialog";
import React, { useState } from "react";
import { db } from "../app/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
function Modal({ onDownload }) {
  async function addDataToFirestore(name, email, mobile, location) {
    try {
      const docRef = await addDoc(collection(db, "brochure"), {
        name: name,
        email: email,
        mobile: mobile,
        location: location,
      });

      return true;
    } catch (e) {
      console.error("Error adding document: ", e);
      return false;
    }
  }

  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [location, setLocation] = useState("");

  const handleSubmit = async (e) => {
    // e.preventDefault();
    const added = await addDataToFirestore(fullname, email, mobile, location);
    if (added) {
      setFullname("");
      setEmail("");
      setMobile("");
      setLocation("");

      alert("Your message has been sent successfully!");
    } else {
      alert("Something went wrong. Please try again later.");
    }
  };

  return (
    <Dialog.Root className="inset-0 z-10 overflow-y-auto">
      <Dialog.Trigger className="w-1/2 py-2 my-2 mx-auto  shadow-sm rounded-md bg-indigo-600 text-white mt-4 flex items-center justify-center">
        Brochure
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="data-[state=open]:animate-overlayShow fixed inset-0 w-full h-full bg-black opacity-40" />
        <Dialog.Content className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full max-w-lg mx-auto px-4">
          <div className="bg-white rounded-md shadow-lg px-4 py-6">
            <div className="flex items-center justify-end"></div>
            <div className="max-w-sm mx-auto space-y-3 text-center ">
              <Dialog.Title className="text-lg font-medium text-gray-800 ">
                Enter the details
              </Dialog.Title>

              <Dialog.Description className=" text-sm text-gray-600">
                <p>Fill the below form and download the brochure for free</p>
              </Dialog.Description>

              {/* Contact form */}

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

                  <label htmlFor="location"></label>
                  <input
                    className="border border-purple-400 mb-4 w-full p-2 rounded-md outline-purple-400"
                    type="text"
                    placeholder="Location"
                    id="location"
                    onChange={(e) => setLocation(e.target.value)}
                    value={location}
                  />
                  <Dialog.Close asChild>
                    <button
                      className="w-full px-3 py-2 rounded-md bg-indigo-600 text-white shadow-sm"
                      onClick={async (e) => {
                        // Add your download logic here
                        await onDownload();

                        e.preventDefault();

                        await handleSubmit(e);
                      }}
                    >
                      Download
                    </button>
                  </Dialog.Close>
                </form>
              </div>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

export default Modal;
