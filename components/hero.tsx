import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="grid grid-cols-12 xs:gap-10 items-center">
      <div className="lg:col-span-6 xs:col-span-12">
        <div className="flex flex-col justify-center gap-6 px-6 py-16">
          <h1 className="lg:text-[56px] xs:text-[40px] font-bold lg:leading-[67.2px] xs:leading-[48px]">Learn new skills online with ease</h1>
            <p className="lg:text-lg xs:text-lg">
              Discover a wide range of courses covering a variety of subjects,
              taught by expert instructors.
            </p>
          <div className="flex gap-4 ">
            <button className="bg-black px-6 py-3 text-white rounded-lg text-[16px]"><a href="https://localhost:3000">Start Learning now</a></button>
            <button className="border-[1px] border-black rounded-lg px-6 py-3">Explore Courses</button>
          </div>
        </div>
        </div>
        <div className="lg:col-span-6 xs:col-span-12">
        <Image
          src="/images/image.png"
          alt=""
          width={640}
          height={900}
            />
        </div>        
    </div>
    
  );
};

export default Hero
