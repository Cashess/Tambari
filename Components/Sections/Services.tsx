import  {services}  from "@/Utils/Constants";
import  ServiceCard  from "@/Components/ServiceCard";

const Services = () => {
  return (
    <section className='max-container flex justify-center flex-wrap gap-9'>
      {services.map((services,index) => (
        <ServiceCard key={services.URLimg}  {...services}  />
      ))}
    </section>
  );
};

export default Services;
