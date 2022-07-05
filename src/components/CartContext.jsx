
import { useState } from "react";
import { createContext } from "react";


export const CartContext = createContext();

const {provider} = CartContext;

const CartProvider = (children)=>{
    const[Cart, setCart]=useState([]);

    const justInIt  = (id) => {
        return Cart.some(x=> x.id == id)
    }

    const addCart = (item, unidades) => {
        const newItem = {
            ...item,
            unidades
        }
        if (justInIt(newItem.id)){
            const findItem = Cart.find(x => x.id == newItem.id) 
            const itemIndex = Cart.indexOf(findItem)
            const auxArray  = [...Cart];
            auxArray [itemIndex].unidades += unidades
            setCart(auxArray)
        }
        else{
            setCart([...Cart], newItem)
        }
    };

    const deleteUnity = (item, unidades) => {
        const newItem = {
            ...item,
            unidades
        }
        if (justInIt(newItem.id)){
            const findItem = Cart.find(x => x.id == newItem.id) 
            const itemIndex = Cart.indexOf(findItem)
            const auxArray  = [...Cart];
            auxArray [itemIndex].unidades -= unidades
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
        return Cart.filter(x => x.id !== Cart.id)
    };

    const itemUnities = () => {
        return Cart.reduce ((acc, x)=>acc += x.unidades, 0)
    };

    const itemPrice = () => {
        return Cart.reduce((acc,x) => acc += x.unidades * x.price, 0)
    };

     
    return <provider value = {{Cart, justInIt, emptyCart, deleteItem, itemUnities, itemPrice, addCart, deleteUnity}} >{children}</provider>
}


export default CartProvider;
