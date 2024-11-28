import React from 'react'
import Image from 'next/image'

const Section_2 = () => {
  return (
    <div className='bg-white w-full h-[1049] rounded-lg py-28'>
      <div className='flex items-center flex-col gap-6 pb-20'>
        <h1 className='lg:text-5xl xs:text-[32px] font-bold xs:text-center xs:container'>Explore Courses By Category</h1>
        <p className='text-lg text-center'>Discover a wide range of courses covering a variety of subjects, taught by expert instructors.</p>
      </div>
        <div className='flex gap-6 lg:flex-row xs:flex-col xs:items-center'>
            <div className='bg-[#F7F7F7] w-[410px] h-[132px] py-3 rounded-lg'>
                <div className='flex gap-3 justify-center items-center'>
                    <Image 
                    src="/images/Frame 292 1.png"
                    alt=""
                    width={100}
                    height={100}
                    />
                    <div className=''>
                        <h4>Design & Development</h4>
                        <p>50+ Courses Available</p>
                    </div>
                </div>
            </div>
            <div className='bg-[#F7F7F7] w-[410px] h-[132px] py-3 rounded-lg'>
                <div className=' flex gap-3 justify-center items-center'>
                    <Image 
                    src="/images/Frame 292 2.png"
                    alt=""
                    width={100}
                    height={100}
                    />
                    <div className=''>
                        <h4>Design & Development</h4>
                        <p>50+ Courses Available</p>
                    </div>
                </div>
            </div>
            <div className='bg-[#F7F7F7] w-[410px] h-[132px] py-3 rounded-lg'>
                <div className=' flex gap-3 justify-center items-center'>
                    <Image 
                    src="/images/Frame 292 3.png"
                    alt=""
                    width={100}
                    height={100}
                    />
                    <div className=''>
                        <h4>Design & Development</h4>
                        <p>50+ Courses Available</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='lg:flex gap-6 my-16 xs:hidden'>
            <div className='bg-[#F7F7F7] w-[410px] h-[132px] py-3  rounded-lg'>
                <div className=' flex gap-3 justify-center items-center'>
                    <Image 
                    src="/images/Frame 292 4.png"
                    alt=""
                    width={100}
                    height={100}
                    />
                    <div className=''>
                        <h4>Design & Development</h4>
                        <p>50+ Courses Available</p>
                    </div>
                </div>
            </div>
            <div className='bg-[#F7F7F7] w-[410px] h-[132px] py-3  rounded-lg'>
                <div className=' flex gap-3 justify-center items-center'>
                    <Image 
                    src="/images/Frame 292 5.png"
                    alt=""
                    width={100}
                    height={100}
                    />
                    <div className=''>
                        <h4>Design & Development</h4>
                        <p>50+ Courses Available</p>
                    </div>
                </div>
            </div>
            <div className='bg-[#F7F7F7] w-[410px] h-[132px] py-3  rounded-lg'>
                <div className=' flex gap-3 justify-center items-center'>
                    <Image 
                    src="/images/Frame 292 6.png"
                    alt=""
                    width={100}
                    height={100}
                    />
                    <div className=''>
                        <h4>Design & Development</h4>
                        <p>50+ Courses Available</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='lg:flex gap-6 mb-16 xs:hidden'>
            <div className='bg-[#F7F7F7] w-[410px] h-[132px] py-3 rounded-lg'>
                <div className=' flex gap-3 justify-center items-center'>
                    <Image 
                    src="/images/Frame 292 7.png"
                    alt=""
                    width={100}
                    height={100}
                    />
                    <div className=''>
                        <h4>Design & Development</h4>
                        <p>50+ Courses Available</p>
                    </div>
                </div>
            </div>
            <div className='bg-[#F7F7F7] w-[410px] h-[132px] py-3 rounded-lg'>
                <div className=' flex gap-3 justify-center items-center'>
                    <Image 
                    src="/images/Frame 292 8.png"
                    alt=""
                    width={100}
                    height={100}
                    />
                    <div className=''>
                        <h4>Design & Development</h4>
                        <p>50+ Courses Available</p>
                    </div>
                </div>
            </div>
            <div className='bg-[#F7F7F7] w-[410px] h-[132px] py-3 rounded-lg'>
                <div className=' flex gap-3 justify-center items-center'>
                    <Image 
                    src="/images/Frame 292 9.png"
                    alt=""
                    width={100}
                    height={100}
                    />
                    <div className=''>
                        <h4>Design & Development</h4>
                        <p>50+ Courses Available</p>
                    </div>
                </div>
            </div>
        </div>
      <div className='text-center xs:mt-8'>
        <button className='px-[17px] py-[11px] border-[1px] border-black rounded-lg hover:bg-[#9b9a9a]'>View All Courses</button>
      </div>
    </div>
  )
}

export default Section_2
