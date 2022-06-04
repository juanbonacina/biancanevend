import React, { useEffect, useState } from "react";

function ItemCount  ({startPoint}) {
    const [x, setX] = useState(0);
    useEffect(()=>{
        
        if(x === 10){
            
        document.getElementById('buttonAdd').setDisable(true)       
        }

    });
    useEffect(()=>{
        
        if(x === 0){
            
        document.getElementById('buttonSubtract').setDisable(true)       
        }

    });


return(

    <>
        <div style={{border: 'solid black 2px', height:'200px'}}>
            <p>Cantidad de Unidades: {x}</p>
            <br/>
            <button id="buttonAdd"
                onClick={()=>{

                setX (x + 1);

                }}   
            >+</button>

            <button id="buttonSubtract"
                onClick={()=>{

                    setX (x - 1);
                }}  
            >-</button>



        </div>
    </>
)
}

export default ItemCount;