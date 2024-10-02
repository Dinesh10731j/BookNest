"use client"
import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from "../assets/Codynn_Logo.png";
import { X, MenuIcon } from 'lucide-react';

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (navRef.current && !navRef.current.contains(event.target as Node)) {
      setIsNavOpen(false);
    }
  };

  useEffect(() => {
    if (isNavOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isNavOpen]);

  return (
    <>
      <nav className='flex  justify-around py-2 md:py-3 px-4 shadow-md sticky'>
        <div>
          <Image src={Logo} alt='logo' />
        </div>
        <div className='hidden md:flex'>
          <ul className='flex gap-12'>
            <Link href={'/'} className='p-2'>Home</Link>
            <Link href={'/about'} className='p-2'>About</Link>
            <Link href={'/contact'} className='p-2'>Contact</Link>
          </ul>
        </div>
        <div className='flex gap-7'>
          <Link href={'/login'}>
            <button className='bg-black px-3 py-1 md:px-5 pb-2 md:py-2 text-white rounded-md border border-red-100'>Login</button>
          </Link>
          <Link href={'/signup'}>
            <button className='bg-black px-3 py-1 md:px-5 pb-2 md:py-2 text-white rounded-md border border-red-100'>Signup</button>
          </Link>
        </div>
        {/* Mobile Menu Icon */}
        <div className='md:hidden py-2'>
          <button onClick={toggleNav}>
            <MenuIcon />
          </button>
        </div>
      </nav>

      {/* Side Navigation */}
      {isNavOpen && (
        <div ref={navRef} className='fixed top-0 left-0 w-2/4 h-full bg-black  shadow-lg z-50'>
          <div className='flex justify-between p-4'>
            <h2 className='text-lg font-bold tracking-tight text-white'>BookNest</h2>
            <button onClick={toggleNav} className='text-gray-700'>
              <X />
            </button>
          </div>
          <ul className='flex flex-col items-center text-white'>
            <Link href={'/'} className='p-4' onClick={toggleNav}>Home</Link>
            <Link href={'/about'} className='p-4' onClick={toggleNav}>About</Link>
            <Link href={'/contact'} className='p-4' onClick={toggleNav}>Contact</Link>
          
          </ul>
        </div>
      )}
    </>
  );
};

export default Header;
