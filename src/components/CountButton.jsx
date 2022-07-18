//@ts-check
import React from "react";
import { useEffect,useState } from "react";


function ItemCount  ({qty, setQty, onAdd}) {
    const [disableSuma, setDisableSuma] = useState (false);
    const [disableResta, setDisableResta] = useState (false)

    
    const addQty = (()=>{

        setQty (qty + 1) 

        if(qty >= 9){
            setDisableSuma(true)
            
        }else if(qty <= 9){
            setDisableSuma(false)
            setDisableResta(false)    
        }

    })

    const deleteQty = (()=>{

        setQty (qty - 1)

        if(qty <= 1){
            setDisableResta(true)
            
        }else if(qty >= 1){
            setDisableResta(false)
            setDisableSuma(false)
        }

    });

    return(
        <>
            <div className="containers">
                <p>Cantidad de Unidades: {qty}</p>
                <br/>
                <div>
                    <button disabled={disableResta} onClick={deleteQty}>-</button>
                    <button disabled={disableSuma} onClick={addQty}>+</button>
                </div>
                <div>
                <button onClick={()=>{onAdd()}}>Agregar al Carrito</button>
                </div>
            </div>
        </>
    )
}

    export default ItemCount;

function onAdd() {
    throw new Error("Function not implemented.");
}
