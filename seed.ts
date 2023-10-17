const products = require("@/Utils/Constants")
const Stripe = require ("stripe");


const stripe = Stripe("sk_test_51NtB7pB7eWN5tY9aTsT53WnErCRBYBj8zTToCu94SaJW1UdBSxHnm1PoHPy1yOlmldHX6V5vHyfsZlukFUzB0eMG00cHwON8X7");


(async()=>{
for(const product of products)
{
const stripeProduct= await stripe.products.create({
        name: product.title,
        default_price_data:{
            currency: product.currency,
            unit_amount_decimal:product.price
        },
        images:[product.imgURL]
    })
    console.log(stripeProduct.title,":", stripeProduct.id)
}
})()