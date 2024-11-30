import React from 'react'
import Image from 'next/image'
import { FaStar } from "react-icons/fa";


const Section_5 = () => {
  return (
    <div className='w-full flex flex-col gap-[60px] py-28'>
      <div className='container flex flex-col gap-4 justify-center items-center'>
            <h1 className='text-[56px] font-bold'>Courses</h1>
            <p>Your Ultimate Guide to learning</p>
      </div>
      <div className='flex flex-col gap-16 xs:items-center'>
        <div className='container flex gap-4 justify-center'>
            <button className='bg-[#D9D9D9] hover:bg-[#9b9a9a] px-5 py-1'>Popular</button>
            <button className='bg-[#D9D9D9] hover:bg-[#9b9a9a] px-5 py-1'>Recommended</button>
            <button className='bg-[#D9D9D9] hover:bg-[#9b9a9a] px-5 py-1'>Best Price</button>
        </div>
        <div className='lg:grid grid-cols-3 gap-x-4 gap-y-16 xs:items-center'>
          <div className='w-[416px] h-[534px] flex flex-col gap-6 bg-[#F7F7F7] rounded-[5px]'>
            <div>
              <Image
                src='/images/design_1.png'
                alt=''
                width={416}
                height={300}
                />
            </div>
            <div className='flex flex-col gap-6'>
              <div className='flex justify-between text-base font-semibold'>
                <h4>Design</h4>
                <p className='flex gap-2'><FaStar className='text-[#D9D9D9] text-xl' />5.0</p>
              </div>
              <div>
                <h1 className='text-2xl font-bold'>UX/UI Design 201</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
              </div>
              <div className='flex gap-3 items-center'>
                <button className='py-2 px-5 border-[1px] border-black rounded-[5px]'>Enroll Now</button>
                <p className=''>$400</p>
              </div>

            </div>  
          </div>
          <div className='w-[416px] h-[534px] flex flex-col gap-6 bg-[#F7F7F7] rounded-[5px]'>
          <div>
              <Image
                src='/images/design_2.png'
                alt=''
                width={416}
                height={300}
                />
            </div>
            <div className='flex flex-col gap-6'>
              <div className='flex justify-between text-base font-semibold'>
                <h4>Programmimg</h4>
                <p className='flex gap-2'><FaStar className='text-[#D9D9D9] text-xl' />5.0</p>
              </div>
              <div>
                <h1 className='text-2xl font-bold'>Introduction to Python</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
              </div>
              <div className='flex gap-3 items-center'>
                <button className='py-2 px-5 border-[1px] border-black rounded-[5px]'>Enroll Now</button>
                <p className=''>$400</p>
              </div>

            </div>  
          </div>
          <div className='w-[416px] h-[534px] flex flex-col gap-6 bg-[#F7F7F7] rounded-[5px]'>
          <div>
              <Image
                src='/images/design_3.png'
                alt=''
                width={416}
                height={300}
                />
            </div>
            <div className='flex flex-col gap-6'>
              <div className='flex justify-between text-base font-semibold'>
                <h4>Business</h4>
                <p className='flex gap-2'><FaStar className='text-[#D9D9D9] text-xl' />5.0</p>
              </div>
              <div>
                <h1 className='text-2xl font-bold'>Data Analysis for Beginners</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
              </div>
              <div className='flex gap-3 items-center'>
                <button className='py-2 px-5 border-[1px] border-black rounded-[5px]'>Enroll Now</button>
                <p className=''>$400</p>
              </div>

            </div>  
          </div>
          <div className='w-[416px] h-[534px] lg:flex flex-col gap-6 bg-[#F7F7F7] rounded-[5px] xs:hidden'>
            <div>
              <Image
                src='/images/design_4.png'
                alt=''
                width={416}
                height={300}
                />
            </div>
            <div className='flex flex-col gap-6'>
              <div className='flex justify-between text-base font-semibold'>
                <h4>Art</h4>
                <p className='flex gap-2'><FaStar className='text-[#D9D9D9] text-xl' />5.0</p>
              </div>
              <div>
                <h1 className='text-2xl font-bold'>Art Specialization</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
              </div>
              <div className='flex gap-3 items-center'>
                <button className='py-2 px-5 border-[1px] border-black rounded-[5px]'>Enroll Now</button>
                <p className=''>$400</p>
              </div>

            </div>  
          </div>
          <div className='w-[416px] h-[534px] lg:flex flex-col gap-6 bg-[#F7F7F7] rounded-[5px] xs:hidden'>
          <div>
              <Image
                src='/images/design_5.png'
                alt=''
                width={416}
                height={300}
                />
            </div>
            <div className='flex flex-col gap-6'>
              <div className='flex justify-between text-base font-semibold'>
                <h4>Law</h4>
                <p className='flex gap-2'><FaStar className='text-[#D9D9D9] text-xl' />5.0</p>
              </div>
              <div>
                <h1 className='text-2xl font-bold'>Rule of Law</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
              </div>
              <div className='flex gap-3 items-center'>
                <button className='py-2 px-5 border-[1px] border-black rounded-[5px]'>Enroll Now</button>
                <p className=''>$400</p>
              </div>

            </div>  
          </div>
          <div className='w-[416px] h-[534px] lg:flex flex-col gap-6 bg-[#F7F7F7] rounded-[5px] xs:hidden'>
          <div>
              <Image
                src='/images/design_6.png'
                alt=''
                width={416}
                height={300}
                />
            </div>
            <div className='flex flex-col gap-6'>
              <div className='flex justify-between text-base font-semibold'>
                <h4>Tech</h4>
                <p className='flex gap-2'><FaStar className='text-[#D9D9D9] text-xl' />5.0</p>
              </div>
              <div>
                <h1 className='text-2xl font-bold'>Introduction to webflow</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
              </div>
              <div className='flex gap-3 items-center'>
                <button className='py-2 px-5 border-[1px] border-black rounded-[5px]'>Enroll Now</button>
                <p className=''>$400</p>
              </div>

            </div>  
          </div>
          
        </div>
        <div className='text-center'>
        <button className='px-[17px] py-[11px] border-[1px] border-black rounded-lg hover:bg-[#9b9a9a]'>View All Courses</button>
        </div>
      </div>
    </div>
  )
}

export default Section_5
