import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import ShopCart from "./CartWidget";



function BodyCart (){

    const [Finish, setFinish] = useState (0);

    useEffect(()=>{
        const finalButton = useRef (FinishShop);
        finalButton.onClick = (()=>{

            setFinish (Finish + ShopCart.price * ShopCart.unidades);

            alert("Total =" + " " + setFinish )
        })
 
    },[Finish])
   
    

    return(
        <>
            <div>
                {ShopCart.map(item =><p>{item.nombre}</p>,<p>{item.id}</p>, <p>{item.price}</p>, <p>{item.unidades}</p>)}
            </div>
            <div>
                <button ref={FinishShop}>Finalizar Compra</button>
            </div>
        </>
    )
}

export default BodyCart