// import {AiOutlineClose} from "react-icons/ai"
const Model = ({title,body,footer}:any) => {
       return (
         <div className=' flex items-center justify-center overflow-x-hidden overflow-y-auto inset-0 z-50'>
           <div className=' w-full lg:w-3/6 my-6 mx-auto lg:max-w-3xl h-full lg:h-auto'>
             <div className=' flex items-center justify-between p-10 rounded'>
              <h4 className=' text-3xl font-semibold text-white'>
                  {title}
              </h4>
              <button className=' p-1 ml-auto border-0 text-white hover:opacity-60 transition'>
              {/* <AiOutlineClose/> */}
              </button>
             </div>
             <div>
                 {body}
             </div>
             <div>
            
                  {footer}
             </div>
           </div> 
         </div>
       )
     }
    
     export default Model