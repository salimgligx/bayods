import React from "react";
import Link from "next/link";
import Image from "next/image";
import AboutImg from "../public/assets/about.png";
import { motion } from "framer-motion";
import { FaCheck } from "react-icons/fa";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.75, ease: "easeInOut" }}
      id="about"
      className="w-full md:h-screen p-2 flex items-center py-16 bg-slate-100"
    >
      <div className="max-w-[1240px] m-auto md:grid grid-cols-2 gap-8">
        <div className="w-full h-auto m-auto rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image src={AboutImg} className="rounded-xl" alt="/" />
        </div>
        <div className="col-span-1 hover:bg ">
          <h3 className="py-4 text-gray-500 text-3xl font-bold  sm:text-left sm:text-5xl ">
            What Is A BAYODS?
          </h3>

          <p className="py-2 text-gray-600 ">
            We design digital products that help grow businesses, Chatbots
            Communication Way, Whether you are a start-up or an established
            business, Gligx is ready to support you at every phase of the
            software development life cycle, from strategy and consulting to
            development and support.
          </p>
          <p className="py-2 text-gray-600 ">
            Our Custom Software Development use a user-centric, collective
            approach to deliver the best solution for your unique application.
            The result is an easy to use software solution that boosts your
            efficiency and the company’s profitability.
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
            Authentication
          </p>
          <p className="py-2 text-gray-500 hover:-translate-y-2/4 ease-in duration-300">
            <FaCheck size={20} className="inline-block text-green-400 mr-2" />
            Sentiment Analysis
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
