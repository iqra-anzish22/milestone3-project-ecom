import React from "react";
import { ImSearch } from "react-icons/im";
import { FaBoltLightning } from "react-icons/fa6";
import { FaCartShopping } from "react-icons/fa6";
import { TbShoppingBagCheck } from "react-icons/tb";

export default function Navbar() {
  return (
    <div className="bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500">
      <div className="p-5">
        <div className="py-4 px-4 rounded-xl border w-full">
          <div className="flex justify-between items-center">
            <div className="flex justify-center items-center gap-8">
              {/* Logo */}
              <TbShoppingBagCheck className="w-8 h-8 text-red-800 ring-2 ring-black rounded-full hover:text-neutral-800" />

              {/* Search Input */}
              <div style={{ position: "relative" }}>
                <input
                  className="rounded-3xl py-3 px-3 font-medium outline-none text-xs w-[350px] pr-9 hidden lg:block md:block"
                  placeholder="Find Your Perfect Match..."
                />
                <ImSearch className="w-5 h-6 text-gray-600 absolute right-2 top-1 transform translate-y-1 hidden lg:block md:block" />
              </div>
            </div>

            <div className="flex justify-center items-center gap-2">
              <FaBoltLightning className="w-5 h-5 text-yellow-600 hidden lg:block md:block" />
              <p className="text-sm text-black font-medium hidden lg:block md:block">
                Shop Online, Save Time!
              </p>

              {/* Cart Icon */}
              <FaCartShopping className="p-1 w-8 h-8 rounded-full text-red-700 ring-black ring-2" />
              <img
                className="inline-block w-8 h-8 rounded-full ring-2 ring-black"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGu1zwJwMr9XXl32EXwFt_ma0TngtDY7dCpg&s"
                alt="user avatar"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
