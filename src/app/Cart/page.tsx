import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Cart = () => {
  const cartItems = [
    {
      id: 1,
      name: 'Asgaard sofa',
      price: 250000,
      image: '/cartproduct.png',
      quantity: 1,
    },
  ]

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  )

  return (
    <div className="container mx-auto">
      <div className="flex flex-col lg:flex-row">
        <div className="flex-1 lg:w-[70%] sm:w-full">
          <Image
            src="/Cart.png"
            alt="Shop"
            width={1440}
            height={316}
            className="w-full"
          />

          <div className="bg-[#F9F1E7] w-full h-[55px] flex flex-wrap justify-between items-center px-6 mt-6">
            <p className="text-black text-sm sm:text-base lg:text-lg xl:text-xl w-[45%] sm:w-[25%]">Product</p>
            <p className="text-black text-sm sm:text-base lg:text-lg xl:text-xl w-[25%]">Price</p>
            <p className="text-black text-sm sm:text-base lg:text-lg xl:text-xl w-[20%]">Quantity</p>
            <p className="text-black text-sm sm:text-base lg:text-lg xl:text-xl w-[25%]">Subtotal</p>
          </div>

          <div className="space-y-4 mt-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="bg-white py-4 px-6 border-b border-[#E0E0E0] flex flex-wrap justify-between items-center"
              >
                <div className="flex items-center space-x-4 w-[45%] sm:w-[25%]">
                  <Image src={item.image} alt={item.name} width={111} height={90} />
                  <p className="text-[#9F9F9F] text-sm sm:text-base lg:text-lg xl:text-xl">{item.name}</p>
                </div>

                <p className="text-[#9F9F9F] text-sm sm:text-base lg:text-lg xl:text-xl w-[25%]">
                  Rs. {item.price.toLocaleString()}
                </p>

                <button className="bg-white border border-black px-4 py-2 w-[20%] sm:w-[20%]">
                  {item.quantity}
                </button>

                <p className="text-[#9F9F9F] text-sm sm:text-base lg:text-lg xl:text-xl w-[25%]">
                  Rs. {item.price.toLocaleString()}
                </p>

                <Image
                  src="/delete.png"
                  alt="Delete"
                  width={28}
                  height={28}
                  className="cursor-pointer w-[10%] sm:w-[5%]"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="lg:w-[393px] w-full bg-[#F9F1E7] mt-6 p-9 flex flex-col justify-between">
          <h2 className="font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl text-center sm:text-left">
            Cart Totals
          </h2>
          <div className="mt-4">
            <p className="text-black text-sm sm:text-base lg:text-lg xl:text-xl">
              Subtotal: <span className="text-gray-400">Rs. {totalPrice.toLocaleString()}</span>
            </p>
            <p className="text-black text-sm sm:text-base lg:text-lg xl:text-xl mt-2">
              Total: <span className="text-[#B88E2F] text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl">Rs. {totalPrice.toLocaleString()}</span>
            </p>
          </div>

          <Link href="/Checkout">
            <button className="border-black border-[1px] text-black rounded-[15px] w-full sm:w-[222px] h-[58.95px] mt-6 text-sm sm:text-md md:text-lg lg:text-xl xl:text-2xl">
              Check Out
            </button>
          </Link>
        </div>
      </div>

      <div className="bg-[#FAF3EA] p-4 flex flex-wrap justify-between gap-4 mt-8">
        <div className="flex flex-col sm:flex-row items-center space-x-4 sm:space-x-4 w-full sm:w-auto mb-4 sm:mb-0">
          <Image src="/trophy.png" alt="" width={60} height={60} />
          <div>
            <h2 className="text-black text-md sm:text-lg md:text-xl lg:text-2xl xl:text-2xl font-semibold">
              High Quality
            </h2>
            <p className="text-black text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
              Crafted from top materials
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center space-x-4 sm:space-x-4 w-full sm:w-auto mb-4 sm:mb-0">
          <Image src="/true.png" alt="" width={60} height={60} />
          <div>
            <h2 className="text-black text-md sm:text-lg md:text-xl lg:text-2xl xl:text-2xl font-semibold">
              Warranty Protection
            </h2>
            <p className="text-black text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
              Over 2 years
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center space-x-4 sm:space-x-4 w-full sm:w-auto mb-4 sm:mb-0">
          <Image src="/shipping.png" alt="" width={60} height={60} />
          <div>
            <h2 className="text-black text-md sm:text-lg md:text-xl lg:text-2xl xl:text-2xl font-semibold">
              Free Shipping
            </h2>
            <p className="text-black text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
              Order over 150 $
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center space-x-4 sm:space-x-4 w-full sm:w-auto">
          <Image src="/support.png" alt="" width={60} height={60} />
          <div>
            <h2 className="text-black text-md sm:text-lg md:text-xl lg:text-2xl xl:text-2xl font-semibold">
              24 / 7 Support
            </h2>
            <p className="text-black text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
              Dedicated support
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
