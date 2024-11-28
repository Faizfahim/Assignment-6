import React from 'react'
import Image from 'next/image'

const Section_1 = () => {
  return (
    <div className='bg-[#F7F7F7] w-full h-[228px] flex items-center'>
      <div className='flex xs:flex-col lg:flex-row xs:gap-3 lg:gap-10'>
          <div className='lg:w-[335px] lg:p-0 xs:container'>
            <h1 className='lg:text-2xl font-bold xs:text-lg'>Trusted by 2000+ Companies Worldwide.</h1>
            <h1 className='lg:hidden text-lg font-bold'>[social proof to build credibility]</h1>
          </div>
          <div className=''></div>
          <div className='flex gap-2 h-[38px] items-center'>
            <Image
            src="/images/Airbnb Logo 1.png"
            alt=""
            width={123}
            height={38}
            />
            <Image
            src="/images/Airbnb Logo 2.png"
            alt=""
            width={123}
            height={38}
            />
            <Image
            src="/images/Airbnb Logo 3.png"
            alt=""
            width={123}
            height={38}
            />
            <Image
            src="/images/Airbnb Logo 4.png"
            alt=""
            width={123}
            height={38}
            />
            <Image
            src="/images/Airbnb Logo 5.png"
            alt=""
            width={123}
            height={38}
            />
            <Image
            src="/images/Airbnb Logo 6.png"
            alt=""
            width={123}
            height={38}
            />
          </div>
      </div>
    </div>
  )
}

export default Section_1
