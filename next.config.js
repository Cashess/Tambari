/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental:{
       serverActions: true
    },
    images:{
        domains: ["cdn.shopify.com"],

        
    },
    
    env:{
        SHOPIFY_STOREFRONT_ACCESS_TOKEN: process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN,
        SHOPIFY_STORE_DOMAIN: process.env.SHOPIFY_STORE_DOMAIN,
        DB_URL: "mongodb://localhost:27017/Tambari-textile-e-commerce"
    }
}

module.exports = nextConfig
