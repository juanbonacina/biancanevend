import React, { useEffect, useState } from "react";
import { useRef } from "react";
import "./CartWidget";
import persons from "./itemDetails";


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

        const addShopping = useRef (addCart)

        addShopping.onClick =(()=>{

            ShopCart.push( Unidades , persons.id, persons.nombre)
        })

    })


return(

    <>
        <div style={{border: 'solid black 2px', height:'200px'}}>
            <p>Cantidad de Unidades: {Unidades}</p>
            <br/>
            <button ref={buttonAdd}>+</button>

            <button ref={buttonSubtract} >-</button>

            <button ref={addCart}>Add Cart</button>

        </div>
    </>
)
}

export default ItemCount;