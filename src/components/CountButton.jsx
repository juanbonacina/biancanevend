import React, { useEffect, useState } from "react";
import { useRef } from "react";
import cartContextProvider from "./FuntionContext";
import ShoppingCart from "./CartWidget";
import productos from "./Products";
import CartContext from "./CartContext";


function ItemCount  ({startPoint}) {
    const [Unidades , setUnidades] = useState(0);
    useEffect(()=>{

        const Add = useRef(buttonAdd)
        Add.onClick = (()=>{
            setUnidades (Unidades + 1)

            if(Unidades === 10){
                
            Add.setDisable(true)       
            }   
        });

    },[Unidades]);
    useEffect(()=>{
        
        const subtrack = useRef (buttonSubtract)
        subtrack.onClick = (()=>{

            setUnidades (Unidades - 1)
            
            if(Unidades === 0){

            subtrack.setDisable(true)       
            }
        });

    },[Unidades]);

    useEffect(()=>{
        function CartElements (){
            const[Compra, setCompra] = useState ([]);
            useEffect(()=>{
                const buttonCart = useRef(addToCart);
                buttonCart.onClick(()=>{
                    setCompra(item=>[... Compra, nuevoItem])
                })
            })
        }
    })


return(

    <>
        <div style={{border: 'solid black 2px', height:'200px'}}>
            <p>Cantidad de Unidades: {Unidades}</p>
            <br/>
            <button ref={buttonAdd}>+</button>

            <button ref={buttonSubtract} >-</button>

            <button ref={addToCart}>Add Cart</button>

        </div>
    </>
)
}

export default ItemCount;