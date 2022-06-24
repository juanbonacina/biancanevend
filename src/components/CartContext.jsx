
import { useState } from "react";
import { createContext } from "react";
import cartContextProvider from "./FuntionContext";

export const CartContext = createContext();

const {provider} = CartContext;

const CartProvider = (children)=>{
    const[Cart, setCart]=useState([]);

    const justInIt  = (id) => {
        return Cart.some(x=> x.id == id)
    }

    const addCart = (item, qty) => {
        const newItem = {
            ...item,
            qty
        }
        if (justInIt(newItem.id)){
            const findItem = Cart.find(x => x.id == newItem.id) 
            const itemIndex = Cart.indexOf(findItem)
            const auxArray  = [...Cart];
            auxArray [itemIndex].qty += qty
            setCart(auxArray)
        }
        else{
            setCart([...Cart], newItem)
        }
    };

    const deleteUnity = (item, qty) => {
        const newItem = {
            ...item,
            qty
        }
        if (justInIt(newItem.id)){
            const findItem = Cart.find(x => x.id == newItem.id) 
            const itemIndex = Cart.indexOf(findItem)
            const auxArray  = [...Cart];
            auxArray [itemIndex].qty -= qty
            setCart(auxArray)
        }
        else{
            setCart([...Cart], newItem)
        }
    };
   

    const emptyCart = () => {
        setCart([])
    };

    const deleteItem = () => {
        return Cart.filter(x => x.id !== id)
    };

    const itemUnities = () => {
        return Cart.reduce ((acc, x)=>acc += x.qty, 0)
    };

    const itemPrice = () => {
        return Cart.reduce((acc,x) => acc += x.qty * x.price, 0)
    };

     
    return <provider value = {{Cart, justInIt, emptyCart, deleteItem, itemUnities, itemPrice, addCart, deleteUnity}} >{children}</provider>
}


export default CartProvider;
