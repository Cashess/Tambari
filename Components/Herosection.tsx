"use client"
import { useState } from "react";
import Image from "next/image";


import { Garment, statistics } from "@/Utils/Constants";
import GarmentCard  from "@/Components/GarmentCard";
import { Garment1, Garment10, Garment7, ThumbnailGarment7 } from "@/assets/Images";

import { GarmentsCustomButton } from "./Index";

const Hero = () => {
  const [dressCodeImg, setDressCodeImg] = useState(Garment1);

  return (
    <section
      id='home'
      className='w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container ml-10'
    >
      <div className='relative xl:w-2/5 flex flex-col justify-center items-start w-full  max-xl:padding-x pt-28 mt-20'>
        <p className='text-xl font-montserrat text-coral-red'>
          Our Summer collections
        </p>

        <h1 className='mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold'>
          <span className='xl:bg-white xl:whitespace-nowrap relative z-10 pr-10'>
            The New Style
          </span>
          <br />
          <span className='text-red-800 inline-block mt-3'>Naija-Attire</span> DUDS
        </h1>
        <p className='font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm'>
          Discover stylish Garments And Duds, quality comfort, and innovation for
          your active life.
        </p>

        <GarmentsCustomButton Path={"/Categories"} text={"Shop-Now"} />

        <div className='flex justify-start items-start flex-wrap w-full mt-20 gap-16'>
          {statistics.map((stat, index) => (
            <div key={index}>
              <p className='text-4xl font-palanquin font-bold'>{stat.value}</p>
              <p className='leading-7 font-montserrat text-slate-gray'>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className='relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center'>
        <Image
          src={dressCodeImg}
          alt='Duds collections'
          width={510}
          height={502}
          className='object-contain relative z-10 rounded-3xl'
        />

<div className='flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6'>
  {
    Garment.map((image, index) => (
      <GarmentCard
        key={image.thumbnail}
        imageURL={image}
        changeDressCodeImage={setDressCodeImg}
        dressCodeImg={dressCodeImg}
      />
    ))
  }
</div>
      </div>
    </section>
  );
};

export default Hero;