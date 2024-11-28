import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";


const Header = () => {
  return (
    <div className='header container w-full h-[54px] lg:flex justify-between  items-center bg-[#F7F7F7] xs:hidden'>
      <div className='flex gap-10'>
          <div className='text-sm'>
            <p>Phone Number : <a href='tel:956 742 455 678'> 956 742 455 678</a></p>
          </div>
          <div className='text-sm relative'>
            <div className='absolute w-[1px] h-6 bg-gray-500 -left-5 top-0'></div>
            <p>Email : <a href='mailto:info@ddsgnr.com'> info@ddsgnr.com</a></p>
          </div>
      </div>
      <div className=''>
          <ul className='flex gap-5 pr-5 text-lg '>
            <li>
              <a href=''><FaFacebookF /></a>
            </li>
            <li>
              <a href=''><FaInstagram /></a>
            </li>
            <li>
              <a href=''><IoLogoTwitter /></a>
            </li>
            <li>
              <a href=''><FaLinkedin /></a>
            </li>
          </ul>
        </div>
    </div>  
  )
}

export default Header
