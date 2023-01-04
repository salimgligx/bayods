import React from "react";
import { TypeAnimation } from 'react-type-animation';

export default function Footer() {
  return (
    <div className="w-full h-auto p-20 flex items-center bg-slate-100"> 
     <h4 className="py-4  text-[#848586] text-3xl font-bold text-center m-auto tracking-tight sm:text-center sm:text-6xl"> 
          <TypeAnimation
      sequence={[
        'Chatbots Communication Way', // Types 'One'
        6000, // Waits 1s
        'We design digital products that help grow businesses', // Deletes 'One' and types 'Two'
        12000, // Waits 2s
        'Corbuz', // Types 'Three' without deleting 'Two'
        () => {
          console.log('Done typing!'); // Place optional callbacks anywhere in the array
        }
      ]}
      wrapper="div"
      cursor={true}
      repeat={Infinity}
     // style={{ fontSize: '1em' }}
    /> </h4> 
      {/* <h1 className="py-4 text-gray-500 text-3xl font-bold w-[60%] sm:w-[90%] m-auto uppercase text-center sm:text-5xl rotate-40 animate-[wiggle_1s_ease-in-out_infinite]">
        We design digital products that help grow businesses, Chatbots
        Communication Way.
      </h1> */}
    </div>
  );
}
