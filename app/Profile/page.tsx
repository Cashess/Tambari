"use client"
import {useSession, signOut} from "next-auth/react"
import { useState} from "react"


export default function DashboardPage(){
  const [newName, setNewName]=useState("")

     return (
              <div className="text-center text-4xl font-bold">
               <h1>
Dashboard                    
</h1>

<h2>hi </h2>

<button className="bg-black  text-yellow-800 px-6 py-2 rounded-full text-xl"> LogOut</button>
  
</div>)}