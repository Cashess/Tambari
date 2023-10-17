import Link from "next/link"

function GarmentCustomButton({ Path, text }:any) {
  return (
      <Link href={Path}> <button type="button" className={`py-4 px-6 font-lato-Bold font-medium text-[18px] text-yellow-400 mr-6 bg-zinc-950 rounded-[10px] outline-none hover:bg-amber-700`} >
          {text} 
      </button></Link>
  );
}

export default  GarmentCustomButton;