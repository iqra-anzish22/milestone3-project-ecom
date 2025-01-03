import React from 'react'

export default function Footer() {
  return (
    <div>
   <footer className='flex flex-col space-y-10 justify-center m-10 mb-0 bg-gradient-to-r from-indigo-500 via-pink-500 to-emerald-500 '>
    <nav className=' flex  justify-center flex-wrap gap-6 text-slate-500 font-medium bg-gradient-to-r form-black to-slate-500'>
<a className='hover:text-cyan-400 text-white text-lg'href='#'>Home</a>
<a className='hover:text-cyan-400 text-white text-lg'href='#'>about</a>
<a className='hover:text-cyan-400 text-white text-lg'href='#'>Delivery</a>
<a className='hover:text-cyan-400 text-white text-lg'href='#'>Contact</a>
    </nav>
    <div className='flex justify-center space-x-5 transition-transform duration-500 ease-in-out transform hover:scale-105'>
<a href="https://facebook.com" target='blank'rel='nofollow noopener'>
<img src="https://img.icons8.com/?size=100&id=118497&format=png&color=000000" alt="logo" />
</a>

<a href="https://instagram.com" target='blank'rel='nofollow noopener'>
<img src="https://img.icons8.com/?size=100&id=32323&format=png&color=000000" alt="logo" />
</a>

<a href="https://twitter.com" target='blank'rel='nofollow noopener'>
<img src="https://img.icons8.com/?size=100&id=13963&format=png&color=000000" alt="logo" />
</a>
<a href="https://tiktok.com" target='blank'rel='nofollow noopener'>
<img src="https://img.icons8.com/?size=100&id=118640&format=png&color=000000" alt="logo" />
</a>
    </div>
    <p className='text-center  text-white font-bold mb-8'>2024 IQra Waqas, All Right's Reserved..</p>
<br />
<br />
<br />
   </footer>
    </div>
  )
}
