import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link"


const UserLinks = () =>{
    const {status} = useSession();

    return (
        <div>
            {status=== "authenticated"?(
                <div>
                    <Link href={"/Profile"}>
                    Orders
                    </Link>
                    <span className=" ml-6 cursor-pointer" onClick={()=> signOut()}>Logout</span>
                </div>
            ):(
                <Link href={"/"} onClick={()=>signIn()}>Login
                
                </Link>
            )}
        </div>
    )
};
export default UserLinks;