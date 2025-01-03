import React from "react";

export default function Banner() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% font-serif px-6 py-12 mb-7">
      <div className="absolute inset-0 opacity-30">
        <img
          src="https://www.middletonshoppingcentre.co.uk/wp-content/uploads/2024/04/Mobile-Middleton-Slider-Image-3.jpg"
          alt="shoping banner"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 container mx-auto flex flex-col justify-center items-center">
        <h2 className="text-white sm:text-5xl font-bold mb-4"> Fresh Styles Await! 
        </h2>
        <p className="text-white text-lg text-center mb-6 max-w-xl">Explore our latest collection and find the perfect addition to your wardrobe. Shop now!</p>
        <button
        type="button" className="bg-gradient-to-r from-lime-900 to-orange-700 hover:to-orange-500 text-white text-sm font-sm font-semibold py-3 px-6 rounded-full shadow-lg ">
          Exclusive Deals Await!
        </button>
      </div>
    </div>
  );
}
