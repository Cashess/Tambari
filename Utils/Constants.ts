import React from "react";
import {Garment1,Garment2, Garment3,Garment4, Garment5,Garment6, Garment7,Coffee1,Coffee2,ThumbnailGarment6,ThumbnailGarment5,ThumbnailGarment7, shieldTick,support,truckFast } from "@/assets/Images"
import {twitter,facebook,instagram} from "@/public"







export const navLinks = [
    { href: "/#home", label: "Home" },
    { href: "/#about-us", label: "About Us" },
    { href: "/#contact-us", label: "Contact Us" },
    { href: "/Products", label: "Products" },
    { href: "/Blog", label: "Blog" },
];
export const Garment = [
    {
        thumbnail: ThumbnailGarment7,
        dressGarment: ThumbnailGarment7,
    },
    {
        thumbnail: ThumbnailGarment6,
        dressGarment: ThumbnailGarment6,
    },
    {
        thumbnail: ThumbnailGarment5,
        dressGarment:ThumbnailGarment5,
    },
];

export const statistics = [
    { value: '1k+', label: 'Brands' },
    { value: '500+', label: 'DUDS/GARMENT' },
    { value: '250k+', label: 'Customers' },
];
 export const products:any = [
 
    {
        id:"0015",
        imageURL: Garment5,
        title: "Senators Yard -01",
        price: "$200.20",
        countInStock: 200,
        rating: 4.5,
        numReviews: 199,
        description:"jdjfnc jrfjirci jfnjnrnfnr jnjcjncrv",
    },
    {
        id:"0016",
        imageURL: Garment6,
        title: "Giznna-10",
        price: "$210.20",
        countInStock: 44,
        rating: 4.5,
        numReviews: 19,
        description:"jdjfnc e eeeejfnjnrnfnr jnjcjncrv",
    },
    {
        id:"0017",
        imageURL: Garment7,
        title: "Galila -100",
        price: "$220.20",
        countInStock: 300,
        rating: 4.5,
        numReviews: 399,
        description:"jdjfnc eeejrfjirci jfnjnrnfnr jnjcjncrv",

    },
    {
        id:"0018",
        title: "Cotton Yard 100%-001",
        price: "$230.20",
        countInStock: 400,
        rating: 4.5,
        numReviews: 499,
        description:"jdjeefnc jrfjirci jfnjnrnfnr jnjcjncrv"
    },


    
];



export const services = [
    {
        URLimg: truckFast,
        label: "Free shipping",
        subtext: "Enjoy seamless shopping with our complimentary shipping service."
    },
    {
        URLimg: shieldTick,
        label: "Secure Payment",
        subtext: "Experience worry-free transactions with our secure payment options."
    },
    {
        URLimg: support,
        label: "Love to help you",
        subtext: "Our dedicated team is here to assist you every step of the way."
    },
];

export const reviews = [
    {
        imgURL: Coffee1,
        customerName: 'Kamal Garba',
        rating: 4.5,
        feedback: "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!"
    },
    {
        imgURL: Coffee2,
        customerName: 'Nuraini bin muhammad',
        rating: 4.5,
        feedback: "The product not only met but exceeded my expectations. I'll definitely be a returning customer!"
    }
];


export const footerLinks = [
    {
        title: "Products",
        links: [
            { name: "Senator Dress 1", link: "/" },
            { name: "Galila shadda 1", link: "/" },
            { name: "Yardi 100% Cotton 1", link: "/" },
            { name: "Atampha 2", link: "/" },
            { name: "Aikin Hannu", link: "/" },
            { name: "Aikin Sama", link: "/" },
        ],
    },
    {
        title: "Help",
        links: [
            { name: "About us", link: "/" },
            { name: "FAQs", link: "/" },
            { name: "How it works", link: "/" },
            { name: "Privacy policy", link: "/" },
            { name: "Payment policy", link: "/" },
        ],
    },
    {
        title: "Get in touch",
        links: [
            { name: "customer@Tambari.com", link: "mailto:customer@Tambari.com" },
            { name: "+92554862354", link: "tel:+2348138019132" },
            { name: "Kampala-Store", link: "tel:mailto:Aminugotie42@gmail" },
            { name: "Kano-Nigeria-Store", link: "mailto:Aminugotie42@gmail.com" },
        ],
    },
];

export const socialMedia = [
    { src: facebook, alt: "facebook logo",href:"/#" },
    { src: twitter, alt: "twitter logo",href:"/#" },
    { src: instagram, alt: "instagram logo" ,href:"/#"},
];
