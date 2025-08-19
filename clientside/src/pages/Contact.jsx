import React from "react";
import { assets } from "../assets/assets";

const Contact = () => {
  return (
    <div className="bg-blue-950 text-blue-100 min-h-screen">
      {/* Heading */}
      <div className="text-center text-3xl pt-12">
        <p>
          CONTACT <span className="text-blue-300 font-bold">US</span>
        </p>
        <p className="text-blue-400 text-sm mt-2">
          We’d love to hear from you. Get in touch with us anytime.
        </p>
      </div>

      {/* Content Section */}
      <div className="my-16 flex flex-col md:flex-row justify-center gap-12 px-6 md:px-20">
        {/* Left Image */}
        <img
          className="w-full md:max-w-[400px] rounded-2xl shadow-lg shadow-blue-900"
          src={assets.contact_image}
          alt="Contact Illustration"
        />

        {/* Right Content */}
        <div className="flex flex-col justify-center items-start gap-6 max-w-lg">
          {/* Office Info */}
          <div>
            <p className="font-semibold text-xl text-blue-200">OUR OFFICE</p>
            <p className="text-blue-400 mt-2 leading-relaxed">
              54709 Willms Station <br /> Suite 350, Washington, USA
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <p className="text-blue-400">
              Tel: <span className="text-blue-200">(415) 555-0132</span> <br />
              Email:{" "}
              <span className="text-blue-200">
                elyseniyibizi502@gmail.com
              </span>
            </p>
          </div>

          {/* Careers Section */}
          <div>
            <p className="font-semibold text-xl text-blue-200">
              CAREERS AT PRESCRIPTO
            </p>
            <p className="text-blue-400 mt-2">
              Learn more about our teams and job openings.
            </p>
          </div>

          {/* Button */}
          <button
            className="mt-4 border border-blue-700 px-8 py-3 text-sm rounded-xl 
            bg-gradient-to-r from-blue-800 to-indigo-800 
            hover:from-blue-700 hover:to-indigo-700 
            hover:shadow-lg hover:shadow-blue-700/50
            transition-all duration-500"
          >
            Explore Jobs
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
