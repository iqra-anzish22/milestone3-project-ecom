import React from "react";

const products = [
  {
    id: 1,
    tittle: "Men's Collection",

    price: "$3,000",
    imageUrl:
      "https://i.pinimg.com/236x/ed/e3/65/ede3651c02d8e995629d08fd4898308d.jpg",
    bgColor: "bg-amber-500",
  },

  {
    id: 2,

    tittle: "Kid's Wordrobe",

    price: "$2,000",
    imageUrl:
      "https://m.media-amazon.com/images/I/71pf4xQHizL._AC_UY350_.jpg",
    bgColor: "bg-amber-500",
  },

  {
    id: 3,
    tittle: "Sports Wear",

    price: "$4,000",
    imageUrl:
      "https://s.alicdn.com/@sc04/kf/H4834f4b7165742c7a28002c0ea770502E.jpg_300x300.jpg",
    bgColor: "bg-amber-500",

  
  

  },
];
export default function Product() {
  return (
    <div className="p-1 flex flex-wrap items-center justify-center mb-6  bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500">
      {products.map((product) => (
        <div
          key={product.id}
          className={`flex shrink-0 m-6 relative overflow-hidden ${product.bgColor}rounded-lg shadow-lg group max-w-sm`}
        >
          <svg
            className="absolute bottom-0 left-0 mb-8 scale-150 group-hover:scale-[1.65] transition-transform"
            viewBox="0 0 375 283"
            fill="none"
            style={{ opacity: 0.2 }}
          >
            <rect
              x="159.52"
              y="175"
              height="152"
              width="152"
              rx="8"
              transform="rotate(-45 159.52 175)"
              fill="white"
            />
            <rect
              y="107.48"
              height="152"
              width="152"
              rx="8"
              transform="rotate(-45 0 107.48)"
              fill="white"
            />
          </svg>

          <div className="relative pt-10 px-10 flex items-center justify-center group-hover:scale-110 transition-transform">
            <div
              className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
              style={{
                background: "radial-gradient(black, transparent 60%)",
                transform: "rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)",
                opacity: 0.2,
              }}
            ></div>

            <img
              className="relative w-50"
              src={product.imageUrl}
              alt={product.tittle}
            />
          </div>

          <div className="relative text-white px-4 pb-4 mt-4">
            <div className="felx  justify-center">
              <span className="block font-semibold text-xl">
                {product.tittle}
              </span>
              <span className="block bg-white rounded-full text-orange-800 text-lg font-black justify-center px-6 py-3 leading-none items-center">
                {product.price}
              </span>
            </div>
          </div>
        </div>
      ))}



      
    </div>
  );
}
