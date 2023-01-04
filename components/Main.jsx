import React from "react";
import Link from "next/link";
import Image from "next/image";
import MainImg from "../public/assets/Hero-img.png";
import { motion } from "framer-motion";
const Main = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.75, ease: "easeInOut" }}
      id="Main"
      className="w-full md:h-screen p-2 flex items-center py-16 hero"
    >
      <div className="max-w-[1240px] m-auto md:grid grid-cols-2 gap-8">
        <div className="col-span-1">
          <h2 className="py-4  text-gray-500 text-4xl font-bold tracking-tight md:text-left sm:text-center sm:text-7xl">
            Meet the Master Chatbot
            <span className="text-blue-900"> BAYODS</span>
          </h2>

          <p className="py-2 text-gray-500 text-2xl">
            Latest News on Chatbots and Live Chats,
          </p>
          <p className="py-2 text-gray-500 text-2xl">
            iOS, Android and Windows mobile application development company in
            Dubai to enhance enterprise mobility.
          </p>

          <a
            href="#about"
            className="inline-block rounded-md border border-transparent bg-blue-900 py-3 mt-3 px-8 text-center font-medium text-white hover:bg-blue-800"
          >
            Get Started
          </a>
        </div>
        <div className="w-full h-auto m-auto rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image src={MainImg} className="rounded-xl" alt="/" />
        </div>
      </div>
    </motion.div>
  );
};

export default Main;
