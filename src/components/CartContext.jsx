
import React from "react";
import { createContext, useState  } from "react";



export const CartContext = createContext([])

const {Provider} = CartContext

const CartProvider = ({children})=>{

    const[cart, setCart]=useState([]);

    const justInIt  = (id) => {
        return cart.some(x=> x.id == id)
    }

    const addCart = (item, qty) => {
        
        const newItem = {
            ...item,
            qty
        }
        if (justInIt(newItem.id)){
            const findItem = cart.find(obj => obj.id == newItem.id) 
            const itemIndex = cart.indexOf(findItem)
            const auxArray  = [...cart];
            auxArray [itemIndex].qty += qty
            setCart(auxArray)
        }
        else{

            setCart([...cart, newItem])
        }
    };

    const emptyCart = () => {
        setCart([])
    };

    const deleteItem = (id) => {
        return setCart(cart.filter(x => x.id !== id))
    };

    const itemUnities = () => {
        return cart.reduce ((acc, x)=>acc += x.qty, 0)
    };

    const itemPrice = () => {
        return cart.reduce((acc,x) => acc += x.qty * x.precio, 0)
    };

     
  
    return <Provider value = {{cart, justInIt, emptyCart, deleteItem, itemUnities, itemPrice, addCart}} >{children}</Provider>
}


export default CartProvider;
