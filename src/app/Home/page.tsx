import React from 'react'
import Image from 'next/image'
import Range from '@/components/Range'
import Products from '@/components/Products'
import Rooms from '@/components/Rooms'
import Furniture from '@/components/Furniture'

const Home = () => {
  return (
    <div>
      <div className="relative">
        <Image
          src="/Banner.png"
          alt="Banner"
          width={1024}
          height={350} 
          className="w-full h-auto object-cover"
        />
        <div className="absolute top-0 right-0 w-full md:w-[50%] lg:w-[35%] h-full flex justify-center items-center bg-background bg-opacity-50 hidden md:flex">
          <div className='h-auto w-[90%] md:w-[80%] lg:w-[70%] flex flex-col justify-between p-4 md:p-6 lg:p-8 bg-[#FFF3E3]'>
            <h2 className='text-[12px] md:text-[16px] lg:text-[18px] text-black font-mono'>New Arrival</h2>
            <h1 className='text-[20px] md:text-[32px] lg:text-[40px] xl:text-[48px] font-bold text-[#B88E2F]'>
              <span className="block">Discover Our</span>
              <span className="block">New Collection</span>
            </h1>
            <p className='text-[12px] md:text-[16px] lg:text-[18px] xl:text-[20px] text-black'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut <br />
              <span>elit tellus, luctus nec ullamcorper mattis.</span>
            </p>
            <button className="bg-[#B88E2F] text-white w-[150px] md:w-[180px] lg:w-[220px] xl:w-[250px] h-[45px] md:h-[55px] lg:h-[65px] xl:h-[75px] mt-4 md:mt-6 xl:mt-8">
              BUY Now
            </button>
          </div>
        </div>
      </div>
      <Range />
      <Products />
      <Rooms />
      <Furniture />
    </div>
  )
}

export default Home
