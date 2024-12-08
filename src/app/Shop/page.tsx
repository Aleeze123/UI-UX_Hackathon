import React from 'react';
import Image from 'next/image';
import { FaShareAlt, FaRegHeart, FaExchangeAlt } from 'react-icons/fa';

const Shop = () => {
  const products = [
    {
      id: 1,
      name: 'Syltherine',
      description: 'Stylish cafe chair',
      price: 229.99,
      oldPrice: 119.99,
      image: '/product1.png',
      discount: '-30%',
    },
    {
      id: 2,
      name: 'Leviosa',
      description: 'Stylish cafe chair',
      price: 4339.99,
      oldPrice: 1159.99,
      image: '/product2.png',
      discount: '',
    },
    {
      id: 3,
      name: 'Lolito',
      description: 'Luxury big sofa',
      price: 70000.00,
      oldPrice: 14000000,
      image: '/product3.png',
      discount: '-50%',
    },
    {
      id: 4,
      name: 'Respira',
      description: 'Outdoor bar table and stool',
      price: 7000000,
      oldPrice: 14000000,
      image: '/product4.png',
      discount: 'New',
    },
  ];


  const repeatedProducts = [...products, ...products, ...products, ...products];

  return (
    <div>
      <Image
        src="/Shop.png"
        alt="Shop"
        width={1440}
        height={316}
      className='w-full' />

      <div className="bg-[#F9F1E7] w-full h-[100px] flex items-center justify-between px-6 sm:block hidden">
        <div className="flex items-center">
          <Image
            src="/shicon1.png"
            alt="Filter Icon"
            width={25}
            height={25}
          />
          <p className="text-black text-[24px] ml-2">Filter</p>
          <Image
            src="/shicon2.png"
            alt="Icon 2"
            width={28}
            height={28}
            className="ml-4"
          />
          <Image
            src="/shicon3.png"
            alt="Icon 3"
            width={24}
            height={24}
            className="ml-4"
          />
        </div>
        <div className="flex items-center space-x-6">
          <div className="border-l-2 border-gray-400 h-6 mx-4"></div>
          <p className="text-black text-[16px]">Showing 1–16 of 32 results</p>
          <div className="flex items-center space-x-4">
            <p className="text-black text-[16px]">Sort by</p>
            <button className="bg-white w-[55px] h-[55px] text-gray-500 border border-gray-400 rounded-md">16</button>
            <p className="text-black text-[20px]">Show</p>
            <button className="bg-white w-[55px] h-[55px] text-gray-500 border border-gray-400 rounded-md">16</button>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8 w-full max-w-screen-xl py-8 px-4 sm:px-8 md:px-16">
        {repeatedProducts.map(product => (
          <div key={product.id} className="flex flex-col items-center bg-[#F4F5F7] p-4 relative group">
            <div className="relative w-full h-[301px]">
              <Image
                src={product.image}
                alt={product.name}
                layout="fill"
                objectFit="cover"
                className="mb-4 group-hover:opacity-70 transition-opacity"
              />
              {product.discount && product.discount !== 'New' && (
                <div className="absolute top-2 right-2 bg-[#E97171] text-white text-xs font-bold rounded-full w-12 h-12 flex items-center justify-center">
                  {product.discount}
                </div>
              )}
              {product.discount === 'New' && (
                <div className="absolute top-2 right-2 bg-[#2EC1AC] text-white text-xs font-bold rounded-full w-12 h-12 flex items-center justify-center">
                  New
                </div>
              )}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center space-y-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="bg-white text-[#B88E2F] font-bold py-2 px-4 w-[202px] h-[48px] flex justify-center items-center">
                  Add to Cart
                </button>
                <div className="flex space-x-4 text-[#333333] text-xl">
                  <button>
                    <FaShareAlt />
                  </button>
                  <button>
                    <FaExchangeAlt />
                  </button>
                  <button>
                    <FaRegHeart />
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-[#F4F5F7] w-full p-4 rounded-lg text-left">
              <p className="text-lg font-semibold text-[#333333] mb-2">{product.name}</p>
              <p className="text-sm text-[#666666] mb-2">{product.description}</p>
              <div className="flex items-center justify-between mb-2">
                <p className="text-lg font-bold text-[#333333]">Rp {product.price.toLocaleString()}</p>
                {product.oldPrice && (
                  <p className="text-sm text-[#999999] line-through">Rp {product.oldPrice.toLocaleString()}</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Section */}
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

      {/* Info Section - Multiple Boxes */}
      
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
  );
};
export default Shop; 