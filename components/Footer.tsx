import React from 'react'
import Image from 'next/image'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='lg:p-20 xs:p-8'>
      <div className='main-footer flex flex-col gap-20'>
        <div className='flex justify-between lg:flex-row xs:flex-col xs:gap-8'>
          <div className='xs:text-center lg:text-start'>
            <h3 className='text-lg font-semibold xs:pb-4'>Subscribe to our newsletter</h3>
            <p className='xs:px-10 lg:p-0'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div>
            <div className='flex gap-4 pb-4 lg:flex-row xs:flex-col'>
              <input className='lg:w-[265px] rounded-[5px] p-3 border-[1px] outline-none border-black' type='mail' name='text' placeholder='Enter your email'></input>
              <button className='rounded-[5px] py-3 px-6 border-[1px] border-black'>Subscribe</button>
            </div>
            <p className=':text-xs'>By subscribing you agree to with our Privacy Policy</p>
          </div>
        </div>
        <div className='grid lg:grid-cols-4 xs:grid-cols-1 xs:gap-10 lg:items-start xs:items-cente lg:text-start xs:text-center'>
          <div className='xs:flex xs:justify-center lg:justify-start'>
            <Image 
            src='/images/Ddsgnr_Library.png'
            alt=''
            width={130}
            height={40}
            />
          </div>
          <div className='flex flex-col gap-4'>
            <div>
              <h3 className='font-semibold'>Courses</h3>
            </div>
            <div className='text-sm leading-9'>
              <p><a href="#">Business</a></p>
              <p><a href="#">Development</a></p>
              <p><a href='#'>Technology</a></p>
              <p><a href=''>Design</a></p>
              <p><a href='#'>Programming</a></p>
            </div>
          </div>
          <div className='flex flex-col gap-4'>
            <div>
              <h3  className='font-semibold'>Resources</h3>
            </div>
            <div className='text-sm leading-9'>
              <p><a href='#'>Career</a></p>
              <p><a href='#'>Resume</a></p>
              <p><a href='#'>Learning</a></p>
              <p><a href='#'>Interview Preparation</a></p>
              <p><a href='#'>Jobs</a></p>
            </div>
          </div>
          <div className='flex flex-col gap-4'>
            <div>
              <h3 className='font-semibold'>About Us</h3>
            </div>
            <div className='text-sm leading-9'>
              <p><a href='#'>Contact</a></p>
              <p><a href='#'>Help/Support</a></p>
              <p><a href='#'>FAQ</a></p>
              <p><a href='#'>Terms and Conditions</a></p>
              <p><a href='#'>Partners</a></p>
            </div>
          </div>
        </div>
        <div className='relative flex lg:justify-between lg:flex-row xs:flex-col xs:gap-4 h-14 lg:items-end xs:items-center text-sm'>
          <div className='lg:w-[1140px] xs:w-[450px] h-[1px] bg-black absolute top-0 '></div>
          <div className='flex gap-5 lg:flex-row xs:flex-col xs:text-center'>
            <p>2023 Ddsgnr. All right reserved.</p>
            <div className='flex gap-5'>
              <a href='' className=''><p className='xs:underline-offset-2'>Privacy Policy</p></a>
              <a href=''>Terms of Service</a>
              <a href=''>Cookies Settings</a>
            </div>
          </div>
          <div className='flex gap-4 text-lg'>
          <a href=''><FaFacebookF /></a>
          <a href=''><FaInstagram /></a>
          <a href=''><IoLogoTwitter /></a>
          <a href=''><FaLinkedin /></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
