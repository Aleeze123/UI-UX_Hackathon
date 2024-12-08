import React from 'react'
import Image from 'next/image'

const Checkout = () => {
  return (
    <div className="max-w-screen-lg mx-auto p-6">
      <Image
        src="/checkout.png"
        alt="Shop"
        width={1440}
        height={316}
        className="w-full"
      />
      
      <h2 className="text-black font-bold text-2xl mt-6">Billing Details</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-6">
        <form className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name</label>
              <input
                id="firstName"
                name="firstName"
                type="text"
                className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                required
              />
            </div>

            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name</label>
              <input
                id="lastName"
                name="lastName"
                type="text"
                className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="companyName" className="block text-sm font-medium text-gray-700">Company Name (Optional)</label>
            <input
              id="companyName"
              name="companyName"
              type="text"
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div>
            <label htmlFor="country" className="block text-sm font-medium text-gray-700">Country / Region</label>
            <select
              id="country"
              name="country"
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              required
            >
              <option value="">Select Country</option>
              <option value="US">United States</option>
              <option value="IN">India</option>
              <option value="CA">Canada</option>
              <option value="GB">United Kingdom</option>
            </select>
          </div>

          <div>
            <label htmlFor="city" className="block text-sm font-medium text-gray-700">Town / City</label>
            <input
              id="city"
              name="city"
              type="text"
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>

          <div>
            <label htmlFor="province" className="block text-sm font-medium text-gray-700">Province</label>
            <input
              id="province"
              name="province"
              type="text"
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div>
            <label htmlFor="zip" className="block text-sm font-medium text-gray-700">ZIP Code</label>
            <input
              id="zip"
              name="zip"
              type="text"
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
            <input
              id="phone"
              name="phone"
              type="tel"
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
            <input
              id="email"
              name="email"
              type="email"
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>

          <div>
            <label htmlFor="additionalInfo" className="block text-sm font-medium text-gray-700">Additional Information</label>
            <input
              id="additionalInfo"
              name="additionalInfo"
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
        </form>

        <div className="p-6 ">
          <h3 className="text-xl font-bold text-gray-700">Product</h3>
          <div className="mt-4">
            <div className="flex justify-between py-2">
              <span className="text-gray-700">Subtotal</span>
              <span className="text-gray-700">$99.99</span>
            </div>
            <div className="flex justify-between py-2">
              <span className="text-gray-700">Shipping:</span>
              <span className="text-gray-700">$5.00</span>
            </div>
            <div className="flex justify-between py-2 font-bold">
              <span>Total:</span>
              <span className="text-[#B88E2F]">Rs. 250,000.00</span>
            </div>
          </div>
          <div className="mt-4 text-sm text-gray-600">
            <p>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>
            <p className="mt-2">Cash on Delivery is also available. Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.</p>
          </div>
          <button className="w-full mt-6 py-3 bg-white text-black border-[1px] border-black font-semibold hover:bg-gray-100">
            Place order
          </button>
        </div>
      </div>
    </div>
  )
}

export default Checkout
