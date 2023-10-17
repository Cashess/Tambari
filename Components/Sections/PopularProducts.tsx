"use client"
import PopularProductCard from "@/Components/PopularProduct";
import React, { useEffect, useState } from 'react';
import { truncateText } from "@/Utils/truncateText";
import { formatPrice } from "@/lib/Formatter";

export default function PopularProducts() {
  const [products, setProducts] = useState([]);

  const getData = async () => {
    const res = await fetch(`http://localhost:3000/api/products`, {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await res.json();
    return data;
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productsData = await getData();
        setProducts(productsData);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <section id='products' className='max-container max-sm:mt-12 ml-10 '>
        <div className='flex flex-col justify-start gap-5 items-center'>
          <h2 className='text-4xl font-palanquin font-bold'>
            Our <span className='text-coral-red'> Popular </span> Products
          </h2>
          <p className='lg:max-w-lg mt-2 font-montserrat text-slate-gray'>
            Experience top-notch quality and style with our sought-after selections. Discover a world of comfort, design, and value
          </p>
        </div>

        {/* <div className='mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14'>
          {products?.map((product) => (
            <PopularProductCard
              key={product.id}
              title={"title"}
              price={formatPrice(product.price)}
              imageURL={product.imageURL}
            />
          ))}
        </div> */}
      </section>
    </div>
  );
}