import Image from 'next/image';
import Link from 'next/link';
import { FaShareAlt, FaRegHeart, FaExchangeAlt } from 'react-icons/fa';

const Products = () => {
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
      price: 70000.000,
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
    {
      id: 5,
      name: 'Grifo',
      description: 'Night lamp',
      price: 1500000,
      oldPrice: null,
      image: '/product5.png',
      discount: '',
    },
    {
      id: 6,
      name: 'Muggo',
      description: 'Small mug',
      price: 150000,
      oldPrice: null,
      image: '/product6.png',
      discount: 'New',
    },
    {
      id: 7,
      name: 'Pingky',
      description: 'Cute bed set',
      price: 7000000,
      oldPrice: 14000000,
      image: '/product7.jpeg',
      discount: '-50%',
    },
    {
      id: 8,
      name: 'Potty',
      description: 'Minimalist flower pot',
      price: 500,
      oldPrice: null,
      image: '/product8.jpeg',
      discount: 'New',
    }
  ];

  return (
    <div className="flex flex-col items-center justify-center text-center py-8 px-4 sm:px-8 md:px-16">
      <h2 className="text-[40px] text-[#3A3A3A] font-bold mb-8">Our Products</h2>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8 w-full max-w-screen-xl">
        {products.map(product => (
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
                  <FaShareAlt />
                  <FaExchangeAlt />
                  <FaRegHeart />
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
      <div className="flex justify-center mt-8">
        <Link href="/Shop">
          <button className="w-[245px] h-[48px] bg-white border border-[1px] border-[#B88E2F] text-[#B88E2F]">
            Show More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Products;
