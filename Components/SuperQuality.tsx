
import { Garment8} from "@/assets/Images"
import GarmentCustomButton from "@/Components/GarmentsCustomButton";
import Image from "next/image"
import path from "path";
const SuperQuality = () => {
  return (
    <section
      id='about-us'
      className='flex justify-between items-center max-lg:flex-col gap-10 w-full max-container'
    >
      <div className='flex flex-1 flex-col'>
        <h2 className='font-palanquin capitalize text-4xl lg:max-w-lg font-bold'>
          We Provide You
          <span className='text-coral-red'> Super </span>
          <span className='text-coral-red'>Quality </span> Garment
        </h2>
        <p className='mt-4 lg:max-w-lg info-text'>
          Ensuring premium comfort and style, our meticulously crafted DUDSWEARS
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>
        <p className='mt-6 lg:max-w-lg info-text'>
          Our dedication to detail and excellence ensures your satisfaction
        </p>
        <div className='mt-11'>
        <GarmentCustomButton text={"Super-Quality"} Path={`/Categories`} onChange={path}/>
        </div>
      </div>

      <div className='flex-1 flex justify-center items-center'>
        <Image
          src={Garment8}
          alt='product detail'
          width={500}
          height={500}
          className='object-contain rounded-3xl'
        />
      </div>
    </section>
  );
};

export default SuperQuality;