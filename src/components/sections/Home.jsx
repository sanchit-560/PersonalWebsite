import React, { useEffect, useState } from "react";
import { TypeWriter } from "../TypeWriter.jsx";
import myImage from "../../assets/about.png";



export const Home = () => {
  const textList = ["Budding Software Engineer", "University Student","Web Dev Enthusiast"]
  const [textIndex ,setTestIndex] = useState(0)
  useEffect(()=>{
        const timeOut = setTimeout(()=>{
            setTestIndex((prev)=>(prev+1) % textList.length)
        },5500);

        return ()=>clearTimeout(timeOut)
  },[textIndex])

  return (
    <div className="flex flex-col md:flex-row items-center md:justify-between px-4 py-10 xl:px-12 xl:py-14 xl:pt-36">
      <div className="flex flex-col items-start w-full md:w-1/2 mb-4 md:mb-0 text-center md:text-left">
        <div className="text-3xl font-bold text-[oklch(0.985 0 0)] pb-4">Hi There! 👋</div>
        <div className="text-3xl font-bold pb-4">
           <span className="text-[oklch(0.985 0 0)]">I am </span>
            <span className="text-[#00df9a]">Sanchit</span>
        </div>
        <div className="text-3xl text-gray-600 md:mt-4">
            <TypeWriter key={textList[textIndex]} className="text-left" text={textList[textIndex]} delay={100} />
        </div>
      </div>
      <div className="w-full md:w-1/3 flex justify-center items-center mt-12 md:mt-0">
        <img src = {myImage} alt="Programming Image" className="max-h-1/2" />
      </div>
    </div>
  );
};
