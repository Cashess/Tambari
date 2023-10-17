
import { NextResponse } from "next/server";


export function middleware(request: Request){
    const origin=request.headers.get("origin");


    const Response = NextResponse.next();

    
    Response.headers.set("Access-Control-Allow-Origin", "*");
    Response.headers.set("Access-Control-Allow-Method", "PUT, POST, GET, PATCH, DELETE,OPTIONS" );
    Response.headers.set("Access-Control-Allow-Headers", "Content-Type, Authorization");
    Response.headers.set("Access-Control-Max-Age", "1000");

    console.log (middleware)
    console.log (request.method)
    console.log (request.url)
  

}

export const config = {
    matcher:"/api/:path*"
}