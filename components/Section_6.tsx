import React from 'react'
import Image from 'next/image'
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";



const Section_6 = () => {
  return (
    <div className='w-full lg:h-[895px] xs:h-[1075px] bg-[#F7F7F7] py-28 flex flex-col gap-20'>
        <div className='flex flex-col gap-3 text-center'>
            <h1 className='text-5xl font-bold'>Our team</h1>
            <p className='text-lg xs:px-10 lg:p-0'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
        </div>
        <div className='grid lg:grid-cols-3 gap-12 xs:grid-cols-1'>
          <div className='flex flex-col gap-6 justify-center items-center'>
            <Image
            src="/images/image 1.png"
            alt=''
            width={80}
            height={80}
            />
            <div className='text-center'>
              <h3 className='text-xl font-semibold'>James Nduku</h3>
              <p>Marketing Coordinator</p>
            </div>
            <div className='flex gap-3 text-lg'>
            <FaLinkedin />
            <FaTwitter />
            <FaDribbble />
            </div>
          </div>
          <div className='flex flex-col gap-6 justify-center items-center'>
            <Image
            src="/images/image 2.png"
            alt=''
            width={80}
            height={80}
            />
            <div className='text-center'>
              <h3 className='text-xl font-semibold'>Joseph Munyambu</h3>
              <p>Nursing Assistant</p>
            </div>
            <div className='flex gap-3 text-lg'>
            <FaLinkedin />
            <FaTwitter />
            <FaDribbble />
            </div>
          </div>
          <div className='flex flex-col gap-6 justify-center items-center'>
            <Image
            src="/images/image 3.png"
            alt=''
            width={80}
            height={80}
            />
            <div className='text-center'>
              <h3 className='text-xl font-semibold'>Joseph Ngumbau</h3>
              <p>Medical Assistant</p>
            </div>
            <div className='flex gap-3 text-lg'>
            <FaLinkedin />
            <FaTwitter />
            <FaDribbble />
            </div>
          </div>
          <div className='lg:flex flex-col gap-6 justify-center items-center xs:hidden'>
            <Image
            src="/images/image 4.png"
            alt=''
            width={80}
            height={80}
            />
            <div className='text-center'>
              <h3 className='text-xl font-semibold'>Erick Kipkemboi</h3>
              <p>Web Designer</p>
            </div>
            <div className='flex gap-3 text-lg'>
            <FaLinkedin />
            <FaTwitter />
            <FaDribbble />
            </div>
          </div>
          <div className='lg:flex flex-col gap-6 justify-center items-center xs:hidden'>
            <Image
            src="/images/image 5.png"
            alt=''
            width={80}
            height={80}
            />
            <div className='text-center'>
              <h3 className='text-xl font-semibold'>Stephen Kerubo</h3>
              <p>President of Sales</p>
            </div>
            <div className='flex gap-3 text-lg'>
            <FaLinkedin />
            <FaTwitter />
            <FaDribbble />
            </div>
          </div>
          <div className='lg:flex flex-col gap-6 justify-center items-center xs:hidden'>
            <Image
            src="/images/image 6.png"
            alt=''
            width={80}
            height={80}
            />
            <div className='text-center'>
              <h3 className='text-xl font-semibold'>John Leboo</h3>
              <p>Dog Trainer</p>
            </div>
            <div className='flex gap-3 text-lg'>
            <FaLinkedin />
            <FaTwitter />
            <FaDribbble />
            </div>
          </div>
        </div>
    </div>
  )
}

export default Section_6
