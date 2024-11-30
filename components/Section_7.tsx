import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa";

const Section_7 = () => {
  return (
    <div className="w-full lg:h-[830px] xs:h-[1075px] flex flex-col gap-20 justify-center">
      <div className="container flex flex-col gap-6">
        <h1 className="lg:text-5xl font-bold xs:text-[32px]">Customer testimonials</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div className="container grid lg:grid-cols-3 xs:grid-cols-1 justify-center gap-8">
        <div className="lg:flex flex-col gap-5 py-10 px-8 border-[1px] border-black">
          <div className="flex">
            <FaStar className="text-[#000000] text-xl" />
            <FaStar className="text-[#000000] text-xl" />
            <FaStar className="text-[#000000] text-xl" />
            <FaStar className="text-[#000000] text-xl" />
            <FaStar className="text-[#000000] text-xl" />
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Suspendisse varius enim in eros elementum tristique. Duis cursus, mi
            quis viverra ornare.
          </p>
            <div className="flex gap-2">
                <Image
                className="rounded-full"
                src='/images/image 3.png'
                alt=""
                width={56}
                height={56}
                />
                <div className="">
                    <h3 className="font-semibold">James Nduku</h3>
                    <p>Software Developer</p>
                </div>
            </div>
        </div>
        <div className="lg:flex flex-col gap-5 py-10 px-8 border-[1px] border-black xs:hidden">
          <div className="flex">
            <FaStar className="text-[#000000] text-xl" />
            <FaStar className="text-[#000000] text-xl" />
            <FaStar className="text-[#000000] text-xl" />
            <FaStar className="text-[#000000] text-xl" />
            <FaStar className="text-[#000000] text-xl" />
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Suspendisse varius enim in eros elementum tristique. Duis cursus, mi
            quis viverra ornare.
          </p>
            <div className="flex gap-2">
                <Image
                className="rounded-full"
                src='/images/image 1.png'
                alt=""
                width={56}
                height={56}
                />
                <div className="">
                    <h3 className="font-semibold">James Nduku</h3>
                    <p>Software Developer</p>
                </div>
            </div>
        </div>
        <div className="lg:flex flex-col gap-5 py-10 px-8 border-[1px] border-black xs:hidden">
          <div className="flex">
            <FaStar className="text-[#000000] text-xl" />
            <FaStar className="text-[#000000] text-xl" />
            <FaStar className="text-[#000000] text-xl" />
            <FaStar className="text-[#000000] text-xl" />
            <FaStar className="text-[#000000] text-xl" />
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Suspendisse varius enim in eros elementum tristique. Duis cursus, mi
            quis viverra ornare.
          </p>
            <div className="flex gap-2">
                <Image
                className="rounded-full"
                src='/images/image 6.png'
                alt=""
                width={56}
                height={56}
                />
                <div className="">
                    <h3 className="font-semibold">James Nduku</h3>
                    <p>Software Developer</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Section_7;
