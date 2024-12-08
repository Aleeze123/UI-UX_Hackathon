import React from 'react'
import Image from 'next/image'
import { Search } from 'lucide-react'

const Blog = () => {
  return (
    <div className="w-full bg-white">
      <div className="w-full">
        <Image
          src="/Blog.png"
          alt="Blog Header"
          width={1440}
          height={316}
          className="w-full"
        />
      </div>

      <div className="p-6 lg:grid lg:grid-cols-3 lg:gap-8">
        <div className="col-span-2 space-y-6">
          <div className="relative">
            <Image
              src="/Blog1.jpeg"
              alt="Blog Image"
              width={817}
              height={500}
              className="w-full object-cover rounded-lg"
            />
          </div>

          <div className="flex items-center space-x-6 text-gray-500 text-sm mt-4">
            <div className="flex items-center space-x-2">
              <Image 
                src="/user.png"
                alt="Admin"
                width={20}
                height={20}
              />
              <h2>Admin</h2>
            </div>

            <div className="flex items-center space-x-2">
              <Image 
                src="/calender.png"
                alt="Calendar"
                width={20}
                height={20}
              />
              <h2>14 Oct 2022</h2>
            </div>

            <div className="flex items-center space-x-2">
              <Image 
                src="/tag.png"
                alt="Tag"
                width={20}
                height={20}
              />
              <h2>Wood</h2>
            </div>
          </div>

          <h2 className='text-black font-bold text-[30px] mt-4'>Going all-in with millennial design</h2>
          <p className='text-gray-500 text-[15px] mt-4'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.
          </p>
          <div className="text-black underline mt-4 inline-block">Read More</div>

          <div className="mt-12">
            <div className="relative">
              <Image
                src="/Blog2.png"
                alt="Blog Image"
                width={817}
                height={500}
                className="w-full object-cover rounded-lg"
              />
            </div>

            <div className="flex items-center space-x-6 text-gray-500 text-sm mt-4">
              <div className="flex items-center space-x-2">
                <Image 
                  src="/user.png"
                  alt="Admin"
                  width={20}
                  height={20}
                />
                <h2>Admin</h2>
              </div>

              <div className="flex items-center space-x-2">
                <Image 
                  src="/calender.png"
                  alt="Calendar"
                  width={20}
                  height={20}
                />
                <h2>14 Oct 2022</h2>
              </div>

              <div className="flex items-center space-x-2">
                <Image 
                  src="/tag.png"
                  alt="Tag"
                  width={20}
                  height={20}
                />
                <h2>Handmade</h2>
              </div>
            </div>

            <h2 className='text-black font-bold text-[30px] mt-4'>Exploring new ways of decorating</h2>
            <p className='text-gray-500 text-[15px] mt-4'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.
            </p>
            <div className="text-black underline mt-4 inline-block">Read More</div>
          </div>
          
          <div className="mt-12">
            <div className="relative">
              <Image
                src="/Blog3.png"
                alt="Blog Image"
                width={817}
                height={500}
                className="w-full object-cover rounded-lg"
              />
            </div>

            <div className="flex items-center space-x-6 text-gray-500 text-sm mt-4">
              <div className="flex items-center space-x-2">
                <Image 
                  src="/user.png"
                  alt="Admin"
                  width={20}
                  height={20}
                />
                <h2>Admin</h2>
              </div>

              <div className="flex items-center space-x-2">
                <Image 
                  src="/calender.png"
                  alt="Calendar"
                  width={20}
                  height={20}
                />
                <h2>14 Oct 2022</h2>
              </div>

              <div className="flex items-center space-x-2">
                <Image 
                  src="/tag.png"
                  alt="Tag"
                  width={20}
                  height={20}
                />
                <h2>Handmade</h2>
              </div>
            </div>

            <h2 className='text-black font-bold text-[30px] mt-4'>Handmade pieces that took time to make</h2>
            <p className='text-gray-500 text-[15px] mt-4'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.
            </p>
            <div className="text-black underline mt-4 inline-block">Read More</div>
          </div>

        </div>

        <div className="space-y-6">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="flex items-center space-x-2">
              <Search size={20} className="text-gray-500" />
              <input
                type="text"
                placeholder="Search Categories"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#B88E2F] text-gray-700"
              />
            </div>
          </div>

          <h3 className="font-bold text-lg mb-4">Categories</h3>
          <ul className="space-y-4">
            <li className="text-gray-700 hover:text-[#B88E2F] px-4 py-2">
              Crafts <span className="ml-9">2</span>
            </li>
            <li className="text-gray-700 hover:text-[#B88E2F] px-4 py-2">
              Design <span className="ml-9">8</span>
            </li>
            <li className="text-gray-700 hover:text-[#B88E2F] px-4 py-2">
              Handmade <span className="ml-9">7</span>
            </li>
            <li className="text-gray-700 hover:text-[#B88E2F] px-4 py-2">
              Interior <span className="ml-9">1</span>
            </li>
            <li className="text-gray-700 hover:text-[#B88E2F] px-4 py-2">
              Wood <span className="ml-9">6</span>
            </li>
          </ul>

          <h3 className="font-bold text-lg mb-4">Recent Posts</h3>
          <ul className="space-y-4">
            <li className="flex items-center space-x-4">
              <Image
                src="/post1.png"
                alt="Going all-in with millennial design"
                width={80}
                height={80}
                className="rounded-md"
              />
              <div>
                <h2 className="text-gray-700 hover:text-[#B88E2F]">Going all-in with millennial design</h2>
                <p className="text-gray-500">03 Aug 2022</p>
              </div>
            </li>

            <li className="flex items-center space-x-4">
              <Image
                src="/post2.png"
                alt="Exploring new ways of decorating"
                width={80}
                height={80}
                className="rounded-md"
              />
              <div>
                <h2 className="text-gray-700 hover:text-[#B88E2F]">Exploring new ways of decorating</h2>
                <p className="text-gray-500">03 Aug 2022</p>
              </div>
            </li>
            <li className="flex items-center space-x-4">
              <Image
                src="/post3.png"
                alt="Handmade pieces that took time to make"
                width={80}
                height={80}
                className="rounded-md"
              />
              <div>
                <h2 className="text-gray-700 hover:text-[#B88E2F]">Handmade pieces that took time to make</h2>
                <p className="text-gray-500">03 Aug 2022</p>
              </div>
            </li>

            <li className="flex items-center space-x-4">
              <Image
                src="/post4.png"
                alt="Modern home in Milan"
                width={80}
                height={80}
                className="rounded-md"
              />
              <div>
                <h2 className="text-gray-700 hover:text-[#B88E2F]">Modern home in Milan</h2>
                <p className="text-gray-500">03 Aug 2022</p>
              </div>
            </li>

            <li className="flex items-center space-x-4">
              <Image
                src="/post5.png"
                alt="Colorful office redesign"
                width={80}
                height={80}
                className="rounded-md"
              />
              <div>
                <h2 className="text-gray-700 hover:text-[#B88E2F]">Colorful office redesign</h2>
                <p className="text-gray-500">03 Aug 2022</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex justify-center space-x-4 mt-8">
        <div className="w-[60px] h-[60px] bg-[#B88E2F] rounded-[10px] flex items-center justify-center text-white font-bold text-xl">
          1
        </div>
        <div className="w-[60px] h-[60px] bg-[#F9F1E7] rounded-[10px] flex items-center justify-center text-black font-bold text-xl">
          2
        </div>
        <div className="w-[60px] h-[60px] bg-[#F9F1E7] rounded-[10px] flex items-center justify-center text-black font-bold text-xl">
          3
        </div>
        <div className="w-[60px] h-[60px] bg-[#F9F1E7] rounded-[10px] flex items-center justify-center text-black text-xl">
          Next
        </div>
      </div>

      <div className="bg-[#FAF3EA] p-4 flex flex-wrap justify-between gap-4 mt-8">
        <div className="flex flex-col sm:flex-row items-center space-x-4 sm:space-x-4 w-full sm:w-auto mb-4 sm:mb-0">
          <Image src="/trophy.png" alt="" width={60} height={60} />
          <div>
            <h2 className="text-black text-[20px] sm:text-[25px] font-semibold">High Quality</h2>
            <p className="text-black text-[16px] sm:text-[20px]">Crafted from top materials</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center space-x-4 sm:space-x-4 w-full sm:w-auto mb-4 sm:mb-0">
          <Image src="/true.png" alt="" width={60} height={60} />
          <div>
            <h2 className="text-black text-[20px] sm:text-[25px] font-semibold">Warranty Protection</h2>
            <p className="text-black text-[16px] sm:text-[20px]">Over 2 years</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center space-x-4 sm:space-x-4 w-full sm:w-auto mb-4 sm:mb-0">
          <Image src="/shipping.png" alt="" width={60} height={60} />
          <div>
            <h2 className="text-black text-[20px] sm:text-[25px] font-semibold">Free Shipping</h2>
            <p className="text-black text-[16px] sm:text-[20px]">Order over 150 $</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center space-x-4 sm:space-x-4 w-full sm:w-auto">
          <Image src="/support.png" alt="" width={60} height={60} />
          <div>
            <h2 className="text-black text-[20px] sm:text-[25px] font-semibold">24 / 7 Support</h2>
            <p className="text-black text-[16px] sm:text-[20px]">Dedicated support</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog
