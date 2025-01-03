import React from "react";

const floatingImage = () => {
  return (
    <section className="container mx-auto py-10 flex flex-col md:flex-row items-center bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500">
      <div className="md:w-1/2 md:pr-10">
        <h2 className="text-3xl font-bold mb-4 text-white">Mega Discounts on Latest Trends!</h2>
        <p className="text-white mb-4 ">Grab your favorites at unbeatable prices ,Shop now and save big with exclusive offers!"</p>
        <button className="bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-900 transition duration-300">
          Order Now
        </button>

        <h3 className="text-2xl font-semibold mt-6 mb-2 text-center text-white">
          {" "}
          Coming Soon: Our  Dual Delight offer{" "}
        </h3>

        <ul className="text-white">
          <li>
            {" "}
            <strong>Men's Casual Shirt – </strong>
            Flat 30% Off!
          </li>
          <br />

          <li>
            {" "}
            <strong>Women's Summer Dress – </strong>
            Buy 1 Get 1 Free!
          </li>
          <br />

          <li>
            {" "}
            <strong>Kids' Fashion Wear – </strong>
            Up to 40% Off on New Arrivals!
          </li>
          <br />
          <li>
            {" "}
            <strong>Sneakers Collection – </strong>
            Extra 20% Off on All Orders!
          </li>
          <br />
        </ul>
        
        </div>

        <div className="md:w-1/2 mt-6 md:mt-0">
        <img src="https://img.freepik.com/free-photo/female-friends-out-shopping-together_53876-25041.jpg" alt=" shoping image" 
        className="w-full h-auto rounded-lg shadow-lg transition-transform duration-500 ease-in-out transform hover:scale-105 mr-7"/>

        
      </div>
    </section>
  );
};

export default floatingImage;
