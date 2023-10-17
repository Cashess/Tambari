import { AddressElement } from '@stripe/react-stripe-js'
import React from 'react'

const AddressForm = () => {
  return (
    <div>
      
      <p>
        Address 
      </p>
   <AddressElement options={{mode:"shipping"}} onChange={(event)=>{
    if(event.complete){
      const  address = event.value.address
    }
   }}/>

    </div>
  )
}

export default AddressForm