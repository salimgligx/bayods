import React from "react";
import Link from "next/link";
import Image from "next/image";
import FeaturesImg from "../public/assets/features.png";
import { motion } from "framer-motion";
import { FaCheck } from "react-icons/fa";

const Features = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.75, ease: "easeInOut" }}
      id="features"
      className="w-full md:h-screen p-2 flex items-center py-16 "
    >
      <div className="max-w-[1240px] m-auto md:grid grid-cols-2 gap-8">
        <div className="col-span-1">
          <h3 className="py-4 text-gray-500 text-3xl font-bold  sm:text-left sm:text-5xl ">
            CHECK THE FEATURES
          </h3>

          <p className="py-2 text-gray-600 ">
            iOS, Android and Windows mobile application development company in
            Dubai to enhance enterprise mobility.{" "}
          </p>
          <p className="py-2 text-gray-700 hover:-translate-y-2/4 ease-in duration-300">
            <FaCheck size={20} className="inline-block text-green-400 mr-2" />
            Chatbot Pre-Built
          </p>
          <p className="py-2 text-gray-800 hover:-translate-y-2/4 ease-in duration-300">
            <FaCheck size={20} className="inline-block text-green-400 mr-2" />
            Chatbot Integration
          </p>
          <p className="py-2 text-gray-900 hover:-translate-y-2/4 ease-in duration-300">
            <FaCheck size={20} className="inline-block text-green-400 mr-2" />
            Machine Learning
          </p>
          <p className="py-2 text-gray-500 hover:-translate-y-2/4 ease-in duration-300">
            <FaCheck size={20} className="inline-block text-green-400 mr-2" />
            MOBILE APP UI & UX DESIGN
          </p>
          <p className="py-2 text-gray-900 hover:-translate-y-2/4 ease-in duration-300">
            <FaCheck size={20} className="inline-block text-green-400 mr-2" />
            IOS APP DEVELOPMENT
          </p>
          <p className="py-2 text-gray-500 hover:-translate-y-2/4 ease-in duration-300">
            <FaCheck size={20} className="inline-block text-green-400 mr-2" />
            ANDROID APP DEVELOPMENT
          </p>
          <p className="py-2 text-gray-500 hover:-translate-y-2/4 ease-in duration-300">
            <FaCheck size={20} className="inline-block text-green-400 mr-2" />
            WINDOWS APP DEVELOPMENT
          </p>
          <p className="py-2 text-gray-600 ">
            Developing powerful, highly usable mobile apps to keep ahead your
            digital presence to attract users, and emphasise your brand is no
            more a big deal. Gligx can help you in building intuitive, hybrid
            and cross-platform mobile applications that run on all major
            operating systems such as iOS, Android and Windows.
          </p>
        </div>
        <div className="w-full h-auto m-auto rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image src={FeaturesImg} className="rounded-xl" alt="/" />
        </div>
      </div>
    </motion.div>
  );
};

export default Features;
