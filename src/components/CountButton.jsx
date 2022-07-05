import { useEffect, useRef, useState } from "react";


function ItemCount  ({startPoint}) {
    const [Qty , setQty] = useState(0);
    const addQty = (()=>{

        setQty (Qty + 1)

         if(Qty === 10){
           return(
           <button disable ={true}>+</button>
           )     
                   
        }   

    },[Qty])

    const deleteQty = (()=>{
    
     setQty (Qty - 1)
            
    if(Qty === 0){
        return(
           <button disable ={true}>-</button>
        )
               
    }
        

    },[Qty]);


return(

    <>
        <div style={{border: 'solid black 2px', height:'200px'}}>
            <p>Cantidad de Unidades: {Qty}</p>
            <br/>
            <button onClick={addQty}>+</button>

            <button onClick={deleteQty}>-</button>

        </div>
    </>
)
}

export default ItemCount;