import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import CodynnLogo from "../assets/Codynn_Logo.png"


const Header = () => {

  return (
<>
<nav className='flex justify-evenly py-4 px-4 shadow-md sticky'>
  <div>
    <Image src={CodynnLogo} alt='logo'/>
  </div>
  <div >
    <ul className='flex gap-12'>
        <Link href={'/'} className='p-2'>Home</Link>
        <Link href={'/about'} className='p-2'>About</Link>
        <Link href={'/contact'} className='p-2'>Contact</Link>
    </ul>
  </div>

  <div className='flex gap-7'>
  <Link href={'/login'}>
  <button className='bg-black px-5 pb-3  py-2 text-white rounded-md border border-red-100 '>Login</button>
  </Link>  

  <Link href={'/signup'}>
  <button className='bg-black px-5 pb-3  py-2 text-white rounded-md border border-red-100'>Signup</button>
  </Link>
   
  </div>
    
</nav>

</>
  )
}

export default Header