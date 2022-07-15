//@ts-check
import { createContext } from "react";
import { useState } from "react";



const cart = []

export const CartContext = createContext([])
const {Provider} = CartContext

function CartProvider ({children}){
    const[Cart, setCart]=useState(cart);

    const justInIt  = (id) => {
        return Cart.some(x=> x.id == id)
    }

    const addCart = (item, unidades) => {
        const newItem = {
            ...item,
            unidades
        }
        if (justInIt(newItem.id)){
            const findItem = Cart.find(obj => obj.id === newItem.id) 
            const itemIndex = Cart.indexOf(findItem)
            const auxArray  = [...Cart];
            auxArray [itemIndex].unidades += unidades
            setCart(auxArray)
        }
        else{

            setCart([...Cart, newItem])
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
            setCart([...Cart, newItem])
        }
    };
   

    const emptyCart = () => {
        setCart([])
    };

    const deleteItem = (id) => {
        return Cart.filter(x => x.id !== id)
    };

    const itemUnities = () => {
        return Cart.reduce ((acc, x)=>acc += x.unidades, 0)
    };

    const itemPrice = () => {
        return Cart.reduce((acc,x) => acc += x.unidades * x.price, 0)
    };

     
  
    return <CartContext.Provider value = {{Cart,justInIt, emptyCart, deleteItem, itemUnities, itemPrice, addCart, deleteUnity}} >{children}</CartContext.Provider>
}


export default CartProvider;
