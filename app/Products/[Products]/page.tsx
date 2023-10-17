import React from 'react';
import DetailedProducts from './DetailedProducts';


interface IPrams{
    productId?: string
}
const ProductDetailPage = ({params}:{params:IPrams}) => {
    console.log("params", params)
  return (
    <div>
      <p className="text-yellow-800 text-3xl font-semibold text-center italic">
        Tambari
      </p>
           <DetailedProducts />
    </div>
  )
}

export default ProductDetailPage