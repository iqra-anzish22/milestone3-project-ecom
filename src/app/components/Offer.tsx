'use client'
import React from 'react'

type Offer = {
  title: string;
  description:string;
}

const SpecialOffer: React.FC = () => {

  const offers: Offer[] = [
    {
    title: "Exclusive Deals",
    description:"Limited time offers on select products.."
  },


  {
    title: "Unbeatable Offers",
    description:"Best prices on popular items.."
  },

  {
    title: "Weekend Specials",
    description:"Limited-time offers for weekends.."
  },
  ];

  const handleOfferClick = (description:string) => {
    alert(description);
  }
  return(
<section className='py-10'>
 <div className='container mx-auto text-center bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500'>
  <h2 className='text-4xl font-bold mb-6 text-white'>Special Offer's</h2>
  <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
    {offers.map((offer,index) =>(
      <button key={index}
       onClick={() => handleOfferClick(offer.description)} 
      className='bg-white shadow-lg rounded text-center hover:bg-yellow-300 transition duration-500 transform hover:scale-105' >
        <h3 className='text-3xl font-semibold text-red-700'>{offer.title}</h3>
        <p className='text-slate-900 mt-3'>{offer.description}</p>

      </button>
    ))}

  </div>

 </div>
</section>
  )

}




export default SpecialOffer;