import React from "react";
import { FaShoppingCart } from "react-icons/fa";

const productCardGrid = () => {
  const productImages = [
   " https://m.media-amazon.com/images/I/61kqdtuuRCL._AC_UF1000,1000_QL80_.jpg",
    "https://img.drz.lazcdn.com/static/pk/p/3773341f64444630b66b3051ced6a3c3.jpg_720x720q80.jpg",
    "https://static-01.daraz.pk/p/c76d43cacd735dbd891c8dc34ce4add0.jpg",
    "https://img.fixthephoto.com/blog/images/gallery/news_preview_mob_image__preview_227.jpg",
    "https://static-01.daraz.pk/p/62e3054868ce599fe72fbdf49418e14a.jpg",
    "https://pk-live-21.slatic.net/kf/Sa99b4d98aefa4b84b1b0fba938ddb728p.jpg",
  ];

  return (
    <div className=" relative text-center p-10 bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url('https://img.freepik.com/free-vector/hand-drawn-shopping-pattern-design_23-2149633578.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: 0,
          opacity: 0.1,
        }}/>


          <h1 className="font-bold text-4xl mb-4 text-white z-10 relative">Most Demanding Items</h1>
<h1 className="text-4xl text-white z-10 relative">Order Now! </h1>

<section id="Projects" className="w-fit mx-auto  grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center gap-y-20 gap-x-14 mt-10 mb-5">

  {Array.from({length: 6}).map((_,index) => (
    <div key={index} className="w-70 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl z-10 relative">
<a href="#">
  <img src={productImages[index]}
  alt={`product${index+ 1 }`} 
  className="h-80 w-72 object-cover rounded-t-xl"/>
  <div className="px-4 py-3 w-72">
    <span className="text-gray-500 mr-3 uppercase text-xs">Category</span>
    <p className="text-lg font-bold text-red-700 truncate block capitalize">  In Stock {index+1}</p>
   
    <div className="flex items-center">
      <p className="text-lg font-semibold text-black my-3 cursor-auto"> {""} $349 </p>
      <del>
        <br />
       <p className="text-sm text-blue-800 cursor-auto ml-2">$449</p>
      </del>


      <div className="ml-auto">
      <FaShoppingCart className="w-5 h-5 text-blue-900 " />
      </div>
       
    </div>
  </div>
</a>
    </div>
  ))}

</section>
      </div>
    
  );
};

export default productCardGrid;
