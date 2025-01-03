"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import ProductCard from "./productcard";
import { Product } from "@/pages/types";

const Items = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<Product[]>([]);
  const [viewCart, setViewCart] = useState(false);
  const [isFineout, setFineout] = useState(false);

  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch("/api/products");
      const data = await response.json();
      setProducts(data);
    }

    fetchProducts();

    if (typeof window !== "undefined") {
      const savedCart = localStorage.getItem("cart");
      if (savedCart) {
        setCart(JSON.parse(savedCart));
      }
    }
  }, []);

  const addToCart = (product: Product) => {
    setCart((prevCart) => {
      const updatedCart = [...prevCart, product];
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  const toggleCart = () => {
    setViewCart((prev) => !prev);
  };

  const delCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
  };

  const confirmOrder = () => {
    alert("Order confirmed! Your items will be delivered shortly.");
    setFineout(false); // Close the checkout modal after confirmation
  };

  return (
    <div className="relative min-h-screen py-6">
  
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{
        backgroundImage: "url('images/bg.jpg')",
        backgroundSize: "cover", 
        backgroundPosition: "center", 
      }}
    ></div>
      <div className="absolute inset-0 bg-blue-300 bg-opacity-60"></div>

      <div className="relative z-10">
        <div className="max-w-6xl mx-auto text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">"Add Happiness to Your Cart!"</h1>
          <p className="text-2xl text-white font-semibold">Every product in your cart brings you closer to your dreams. Select, add, and get ready to embrace the joy of shopping.</p>
        </div>

        <div className="max-w-6xl mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-red-600">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              {...product}
              onAddToCard={addToCart}
            />
          ))}
        </div>

        <div className="max-w-2xl mx-auto mt-8">
          <button
            onClick={toggleCart}
            className="bg-blue-600 text-white py-3 px-6 rounded-lg shadow-md hover:bg-blue-900 transition duration-300 ease-in-out transform scale-100"
          >
            {viewCart ? "Hide Cart" : "View Cart"} ({cart.length} items)
          </button>

          {viewCart && (
            <div className="mt-8 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-300 to-90% p-20 rounded-lg shadow-xl">
              <h2 className="text-4xl font-bold mb-8 text-center text-white">
              Your Selected Items
              </h2>

              {cart.length > 0 ? (
                <div>
                  <ul>
                    {cart.map((product, index) => (
                      <li
                        key={index}
                        className="flex items-center justify-between mb-4"
                      >
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-20 h-20 sm:w-24"
                        />
                        <span className="ml-4 text-xl font-semibold text-black">
                          {product.name} - ${product.price}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex justify-between items-center mt-6 text-black">
                    <span className="font-semibold text-xl">
                      Total: $
                      {cart.reduce(
                        (total, product) => total + product.price,
                        0
                      )}
                    </span>

                    <div>
                      <button
                        onClick={() => setFineout(true)}
                        className="bg-green-800 py-2 px-8 rounded-lg text-lg drop-shadow-md hover:bg-green-400 transition duration-300 ease-in-out text-white transform hover:scale-110"
                      >
                        Proceed to Checkout
                      </button>

                      <button
                        onClick={delCart}
                        className="bg-red-800 py-3 px-8 ml-4 rounded-lg text-lg drop-shadow-md hover:bg-red-400 transition duration-300 ease-in-out text-white transform hover:scale-110"
                      >
                        Clear Cart
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <p className="text-lg font-semibold text-black text-center">
                  Your cart is empty.
                </p>
              )}
            </div>
          )}
        </div>

        {isFineout && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full sm:w-96">
              <h2 className="text-4xl font-bold text-blue-600 mb-4">Let’s Checkout!</h2>
              <p className="text-lg text-red-500">
              Review your items carefully and proceed once confirmed.
              </p>
              <div className="mt-4">
                <ul>
                  {cart.map((product, index) => (
                    <li key={index} className="flex justify-between mb-4">
                      <span>{product.name}</span>
                      <span>${product.price}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex justify-between mt-4 ">
                  <span className="font-semibold">Total:</span>
                  <span className="font-semibold">
                    ${cart.reduce((total, product) => total + product.price, 0)}
                  </span>
                </div>
              </div>

              <div className="mt-6 flex justify-between">
                <button
                  onClick={() => setFineout(false)}
                  className="bg-slate-600 text-red-200 py-2 px-6 rounded-lg shadow-md hover:bg-slate-600 transition duration-300"
                >
                  Close
                </button>
                <button
                  onClick={confirmOrder}
                  className="bg-red-600 text-red-200 py-2 px-6 rounded-lg shadow-md hover:bg-red-400 transition duration-300"
                >
                  Order Confirmation
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Items;
