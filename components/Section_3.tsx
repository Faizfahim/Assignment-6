import React from "react";
import Section_4 from "./Section_4";

const Section_3 = () => {
  return (
    <div className="flex flex-col lg:gap-0 xs:gap-20">
        <div className="lg:container w-full h-[488px] flex flex-col gap-8 justify-center">
            <div className="text-center mb-8">
                <h1 className="lg:text-5xl xs:text-[32px] font-bold pb-6">Our Achivements</h1>
                <p className="text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                varius enim in eros elementum tristique. Duis cursus, mi quis viverra
                ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
                </p>
            </div>
            <div className="lg:flex lg:gap-10 xs:grid xs:grid-cols-2 xs:gap-y-14">
                <div className="lg:w-[296px] h-20 text-center">
                    <h1 className="text-[40px] font-bold">+200</h1>
                    <p>Courses</p>
                </div>
                <div className="lg:w-[296px] h-20 text-center">
                    <h1 className="text-[40px] font-bold">50k</h1>
                    <p>Mentors</p>
                </div>
                <div className="lg:w-[296px] h-20 text-center">
                    <h1 className="text-[40px] font-bold">370k</h1>
                    <p>Students</p>
                </div>
                <div className="lg:w-[296px] h-20 text-center">
                    <h1 className="text-[40px] font-bold">100+</h1>
                    <p>Recognition</p>
                </div>
            </div>
        </div>
        <Section_4 />
    </div>
    
  );
};

export default Section_3;
