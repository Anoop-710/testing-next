import React from "react";

function Features() {
  return (
    <div>
      <h1 className="text-4xl text-center font-bold mb-12 mt-12 text-yellow-400">
        Key features of IQSchool Training
      </h1>
      <div className="container mx-auto p-4">
        {/* First Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {/* Leftmost Grid */}
          <div className="p-4 shadow-lg rounded-lg text-center bg-gradient-to-r from-purple-400 to-purple-500 text-white">
            <h2 className="font-bold text-2xl">Regular 1-1 Mentoring</h2>
            <p className="font-bold">from our Expert team.</p>
          </div>

          {/* Middle Grid */}
          <div className="p-4 shadow-lg rounded-lg text-center bg-gradient-to-r from-yellow-400 to-yellow-500 text-white">
            <p className="font-bold text-2xl">Live Online classes</p>
            <p className="font-bold">by our industrial experts.</p>
          </div>

          {/* Rightmost Grid */}
          <div className="p-4 shadow-lg rounded-lg text-center bg-gradient-to-r from-orange-400 to-orange-400 text-white">
            <p className="font-bold text-2xl">Real-time Projects</p>
            <p className="font-bold">get hands-on experience.</p>
          </div>
        </div>

        {/* Second Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
          {/* Left Grid */}
          <div className="p-4 shadow-lg rounded-lg text-center bg-gradient-to-r from-green-400 to-green-500 text-white">
            <p className="font-bold text-2xl">Doubt clarification sessions</p>
            <p className="font-bold">on every Saturday.</p>
          </div>

          {/* Middle Grid */}
          <div className="p-4 shadow-lg rounded-lg text-center bg-gradient-to-r from-pink-400 to-pink-500 text-white">
            <p className="font-bold text-2xl">Structured Curriculum</p>
            <p className="font-bold">
              We have a structured Curriculum for all.
            </p>
          </div>

          {/* Right Grid */}
          <div className="p-4 shadow-lg rounded-lg text-center bg-gradient-to-r from-blue-400 to-blue-500 text-white">
            <p className="font-bold text-2xl">Placement Support</p>
            <p className="font-bold">
              Resume building, Mock interview sessions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
