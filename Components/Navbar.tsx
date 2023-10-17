"use client"
import React, { useState } from 'react';
import  Image from "next/image";
import Link from "next/link";
import { usePathname}  from "next/navigation";
import  hamburger  from '@/assets/Images/hamburger.svg';
import { BiSolidCart} from "react-icons/bi"
import {  signOut, useSession,  } from "next-auth/react";
import { navLinks } from "@/Utils/Constants";
import UserLinks from './UsefulLinks';


const Nav = () => {

  // const {loading, cartItems}= useSelector((state)=state.cart)
  const {status:session}= useSession();
  const[ toggleDropdown, setToggleDropdown]=useState(false)
  console.log(session); 
  const pathname = usePathname();
  return (
    <header className=' py-8  z-10 max-w-7xl top-0 sm:ml-10 sticky yellow-800'>
      <nav className='flex justify-between items-center max-container'>
        
        <Link href='/'>
          <Image
            src={"/TambariLogo.jpg"}
            alt='logo'
            width={100}
            height={100}
            className=' ml-10 sm:w-[150px] sm:h-[150px] rounded-3xl mr-10'
          />
        </Link>
        
        {/* Desktop Navigation */}
        

        <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
          {navLinks.map((item) => (
            <li key={item.label} >
              <Link
                href={item.href}
                className={ pathname === `${item.href}`? " text-blue-950 font-bold":""}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <span className='Cart ml-20'>
        <Link href={"/Cart"} >
          {/* {loading? "": cartItems.reduce((a, c)=>a + c.qty, 0)} */}
          <BiSolidCart size={40}/>
          </Link>
        </span>

        <div className='flex gap-2 text-lg leading-normal font-medium font-montserrat max-lg:hidden wide:mr-4 ml-10'>
         
          <UserLinks/>
        </div>
        <div className='hidden max-lg:block'>
        
        
          <Image src={hamburger} alt='hamburger icon' width={30} height={30} onClick={() => setToggleDropdown(!toggleDropdown)}/>

            {toggleDropdown && (
              <div className='dropdown bg-yellow-100 rounded-xl'>
                <ul className='flex-1 flex justify-center items-center gap-16 sm:flex flex-col'>
          {navLinks.map((item) => (
            <li key={item.label} >
              <Link
                href={item.href}
                className={ pathname === `${item.href}`? " text-blue-950 font-bold":""}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
       <span className=' text-center mt-5'>
       <UserLinks/>
       </span>
              </div>
            )}
          </div>
        
        
      
      </nav>
    </header>
  );
};

export default Nav;




