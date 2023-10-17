import Herosection from '@/Components/Herosection';
import { Footer } from '@/Components/Index';
import CustomerReviews from '@/Components/Sections/OurCustomersReviews';
import PopularProducts from '@/Components/Sections/PopularProducts';
import Services from '@/Components/Sections/Services';
import Subscribe from '@/Components/Sections/Subscribe';
import SuperQuality from '@/Components/SuperQuality';
import prisma from "@/lib/Databases";



interface HomeProps {
  searchParams: { page: string };
}
export default async function home({
  searchParams: { page = "1" },
}: HomeProps) {
  
  

  return (
    <div><main className=' relative'>
    
    <section className=' m-10'>
    {/* <pre>{JSON.stringify(session)}</pre> */}
      <Herosection />
    </section>
    <section className=''>
      <PopularProducts />
    </section>
    <section className=' m-10  align-middle'>
      supp quality
    </section>
    <section className=' py-10'>
      <Services />-------
    </section>
    <section className=' p-10'> 
     <SuperQuality/>
    </section>
    <section className='bg-pale-blue padding'>
      <CustomerReviews />
    </section>
    <section className='bg-origin-padding-x sm:py-32  w-full'>
     <Subscribe /> 
         </section>
    
  </main>
</div>
    
  )};
