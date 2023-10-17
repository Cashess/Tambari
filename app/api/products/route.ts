
import prisma from "@/lib/Databases";
import { NextRequest, NextResponse } from "next/server";


  
    
export async function GET(request: NextRequest) {
    const {searchParams} = new URL(request.url);
    const cat = searchParams.get("product")
    const allProducts = await prisma.product.findMany();
  
    return  NextResponse.json(allProducts,{status:200})
}


export async function POST(request:NextRequest){
    const json = await request.json();
    const createdProduct= await prisma.product.create({
        data:json
    })

  return new NextResponse(JSON.stringify(createdProduct), {status:201})
}