import React from 'react';
import { footerLinks } from '@/Utils/Constants';
import Image from "next/image";
import { copyrightSign } from '@/public';
import Link from "next/link"

import {socialMedia} from "@/Utils/Constants";


const Footer = () => {
    return (
      <footer className='max-container   items-center max-w-7xl rounded-3xl bg-yellow-800'>
        <div className='flex justify-between items-start gap-20 flex-wrap max-lg:flex-col'>
          <div className='flex flex-col items-start'>
            <a href='/'>
              <Image
                src={"/Group 2.png"}
                alt='logo'
                width={150}
                height={146}
                className='m-0'
              />
            </a>
            <p className='mt-3 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm text-neutral-50  font-bold'>
              Get DUDS ready for the new Looks at your nearest Tambari store. Find
              Your perfect Size In Hausa DUDS. Get Rewards
            </p>
            <div className='flex items-center gap-3 mt-3'>
              {socialMedia.map((icon) => (
                // eslint-disable-next-line react/jsx-key
                <Link href={"/"}>
                
                <div
                  className='flex justify-center items-center w-12 h-12 bg-white rounded-full'
                  key={"/icons"}
                >
                  <Image src={icon.src} alt={icon.alt} width={30} height={30} />
                </div></Link>
              ))}
            </div>
          </div>
  
          <div className='flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap'>
            {footerLinks.map((section) => (
              <div key={section.title}>
                <h4 className='font-montserrat text-2xl leading-normal font-medium mb-6 text-white'>
                  {section.title}
                </h4>
                <ul>
                  {section.links.map((link) => (
                    <li
                      className='mt-3 font-montserrat text-base leading-normal text-white-100 hover:text-yellow-100 font-bold'
                      key={link.name}
                    >
                      <a href={link.link}>{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
  
        <div className='flex justify-between text-white-400 mt-10 max-sm:flex-col max-sm:items-center'>
          <div className='flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer'>
            <Image
              src={copyrightSign}
              alt='copyright sign'
              width={20}
              height={20}
              className='rounded-full m-0'
            />
            <p className=' text-yellow-50'>Copyright. All rights reserved.</p>
          </div>
          <p className='font-montserrat cursor-pointer text-white'>Terms & Conditions</p>
        </div>
      </footer>
    );
  };
  
  export default Footer;