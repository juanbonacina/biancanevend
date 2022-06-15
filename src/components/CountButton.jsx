import React, { useEffect, useState } from "react";
import { useRef } from "react";
import "./CartWidget";

function ItemCount  ({startPoint}) {
    const [x, setX] = useState(0);
    useEffect(()=>{

        const Add = useRef(buttonAdd)
        Add.onClick = (()=>{
            setX (x + 1)

            if(x === 10){
                
            Add.setDisable(true)       
            }   
        });

    },[x]);
    useEffect(()=>{
        
        const subtrack = useRef (buttonSubtract)
        subtrack.onClick = (()=>{

            setX (x - 1)
            
            if(x === 0){

            subtrack.setDisable(true)       
            }
        });

    },[x]);

    useEffect(()=>{

        const addShopping = useRef (addCart)

        addShopping.onClick =(()=>{

            ShopCart.push( x , persons.id)
        })

    })


return(

    <>
        <div style={{border: 'solid black 2px', height:'200px'}}>
            <p>Cantidad de Unidades: {x}</p>
            <br/>
            <button ref={buttonAdd}>+</button>

            <button ref={buttonSubtract} >-</button>

            <button ref={addCart}>Add Cart</button>

        </div>
    </>
)
}

export default ItemCount;