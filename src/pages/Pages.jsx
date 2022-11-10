import React,{useState} from "react";
import {Routes,Route } from "react-router-dom";
import HotDeals from "../components/deals/HotDeals";
import Home from "../components/mainpage/Home";
import About from '../components/about/About'
import Contact from '../components/contact/Contact'
import Checkout from '../components/checkout/Checkout'
import { products_data } from "../data";
import Header from "../components/header/Header";

const Pages = () => {
  const [products,setProducts]=useState(products_data)
  const [cartItems,setCartItems]=useState([])


  const onAdd = (product) =>{
    const exist =cartItems.find(x => x.id === product.id);
    if(exist){
      setCartItems(cartItems.map(x => x.id === product.id ? {...exist, price: exist.price *2} : x))
    }else{
      setCartItems([...cartItems,{...product}])
    }

  }
  const onRemove = (product) =>{
    const exist =cartItems.find(x => x.id === product.id);
    const original=products.find(x=>x.id === product.id)
    if(exist.price <= original.price){
      setCartItems(cartItems.filter(x => x.id !== product.id))
    }else{
      setCartItems(cartItems.map(x => x.id === product.id ? {...exist, price: exist.price /2} : x))
    }
   
  }
  return (
    <>
    <Header  cartItems={cartItems.length} brandName={"Tech Shop"}/>
    <Routes>
      <Route path="/" element={
    <>
       <Home products={products_data} cartItems={cartItems} onAdd={onAdd} onRemove={onRemove}/>
       <HotDeals/>
    </>
    }/>
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="checkout" element={<Checkout  cartItems={cartItems}/>} />
    </Routes>

    </>
  );
};

export default Pages;
