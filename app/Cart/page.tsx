

 "use client"
 import { products } from "@/Utils/Constants";
import { Garment4, Garment5, Garment6, Garment7 } from "@/assets/Images";
 import Image from "next/image";
 import Link from "next/link";
 import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CartPage(){
  
   const  router = useRouter();
   const [loading, setLoading]= useState("")
   
   
   const cartItems = [
 
    {
        id:"0015",
        imageURL: Garment5,
        title: "Senators Yard -01",
        price: "$200.20",
        countInStock: 200,
        rating: 4.5,
        numReviews: 199,
        description:"jdjfnc jrfjirci jfnjnrnfnr jnjcjncrv",
    },
    {
        id:"0016",
        imageURL: Garment6,
        title: "Giznna-10",
        price: "$210.20",
        countInStock: 44,
        rating: 4.5,
        numReviews: 19,
        description:"jdjfnc e eeeejfnjnrnfnr jnjcjncrv",
    },
    {
        id:"0017",
        imageURL: Garment7,
        title: "Galila -100",
        price: "$220.20",
        countInStock: 300,
        rating: 4.5,
        numReviews: 399,
        description:"jdjfnc eeejrfjirci jfnjnrnfnr jnjcjncrv",

    },
    {
        id:"0018",
        imageURL: Garment4,
        title: "Cotton Yard 100%-001",
        price: "$230.20",
        countInStock: 400,
        rating: 4.5,
        numReviews: 499,
        description:"jdjeefnc jrfjirci jfnjnrnfnr jnjcjncrv"
    },


    
];


  
  
 return(
   <div>
     <h1 className=" mb-5 text-xl">
       Shopping Cart

   </h1>
    {/* {loading ? (
       <div>
         loading...
       </div>
     ): cartItems.length === 0 ? (
       <div>
         Cart is Empty. <Link href="/"> Go Shopping
         </Link>
       </div>
     ):( */}
       <div className=" grid md:grid-cols-4 md:gap-4">
        <div className=" overflow-x-auto md:col-span-3">
       <table className=" min-w-full">
           <thead className=" border-b">
             <tr className=" ">
               <th className=" p-5 text-left">Product
               </th>
             <th className=" p-5 text-right">Quantity
             </th>
               <th className=" p-5 text-left">Action
            </th>
               <th className=" p-5">Price
              </th>
          </tr>
           </thead>
           <tbody>
             {cartItems.map((item, Index)=>(
              <tr key={item.id} className=" border-b">
               <td>
                 <Link href={`/product/${item.id}`} className=" flex items-center">

                   <Image src={item.imageURL} alt={item.title} width={50} height={50} className="p-2"/>
                   {item.title}
             
                 </Link>
               </td>
               <td className="p-4 text-right">
                 <select name="" id="" value={item.numReviews}
                 >
                   {[...Array(item.countInStock).keys()].map((x)=>(
                     <option key={x + 1} value={x + 1}>

                     </option>
                   ))}
                </select>
                 <td className="p-4 text-right">
                  ${item.price}
                </td>
                 <td className="p-4 text-center">
                  <button className="" onClick={()=> (item.id)}>
                    Delete
                  </button>
              </td>
              
              </td>
              <td>
                <input type="checkbox" value="tick" className=" p-5 ml-5"  />
              </td>

               </tr>
             ))}
           </tbody>
        </table>
        </div>
        <div>
           <div className=" card p-4">
             <ul>
               <li>
                 <div className="pb-4 text-xl">
                   SubTotal            

                 </div>
               </li>
               <li>
                 <button onClick={() => router.push("/shipping")} className=" primary-button w-full bg-blue-700 rounded-3xl p-2 text-white"> Process  to Stripe checkout</button>
               </li>
             </ul>
           </div>

        </div>
       </div>
     {/* )} */}
   </div>
 )
 }