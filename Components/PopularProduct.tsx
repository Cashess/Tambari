"use client"
import ProductDetailPage from "@/app/Products/[Products]/page";
import star from "@/assets/Images/star.svg";
import prisma from "@/lib/Databases";
import { products } from "@/Utils/Constants";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

interface ProductProps{
  product: Product}
     


const PopularProductCard: React.FC<ProductProps> = ({imageURL,title,price,}:any) => {
 

  return (
    <div>
     
          <Link href={`/Products/}`} >
            <div className="card flex flex-1 flex-col w-full max-sm:w-full aspect-w-4 aspect-h-3 sm:ml-10 sm:items-center m-10 rounded-3xl marque track shadow-md group-hover:border-e-neutral-focus">
              <Image
                src={imageURL}
                alt={title}
                className="w-[282px] h-[282px] rounded-3xl object-cover"
                width={282}
                height={282}
              />

              <div className="mt-8 flex justify-start gap-2.5">
                <Image
                  src={star}
                  alt="rating icon"
                  width={24}
                  height={24}
                />
                <p className="font-montserrat text-xl leading-normal ">
                  (4.5)
                </p>
              </div>

              
                <h3 className="mt-2 text-2xl leading-normal font-semibold font-palanquin text-center">
                  {title}
                </h3>
        

              
                <p className="mt-2 font-semibold font-montserrat text-coral-red text-2xl leading-normal text-center">
                  {price}
                </p>
                <span>Tambari-Brand</span>
              <button onChange={()=>{}} disabled={false} className="rounded focus:ring-2 focus:ring-yellow focus:ring-offset" >
                {true? "Added to cart": "Add to cart"}
              </button>
            </div>
          </Link>
    </div>
  );
};

export default PopularProductCard;