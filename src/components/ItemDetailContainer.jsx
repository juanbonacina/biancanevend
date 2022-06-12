import React, { useEffect, useState } from "react";
import "./item";
import Items from "./item";
import Details from "./itemDetails";


function CataloguePromise (){
    const[wait, setWait] = useState();
    const[element, setElement] = useState();
    const[fail, setFail] = useState();

    useEffect(()=>{
        setWait(true);
        setFail(false);
        setElement();

        const search = new Promise((res, rej))
        setTimeout (()=>{
            res("ya pago / pagaron")
        },2000);        
    

        search
        .then((element)=>{
            setElement(element)
        })
        .catch((fail)=>{
            setFail(fail)
        })
        .finally(()=>{
            setWait(false)
        })
    },[])

    return(
        <>
            <div>{wait && "loading..."}</div>
            <div>{fail && "lo sentimos, tuvimos un problema, intente mas tarde"}</div>
            <div>
                {Items.map(u=><><p>{u.nombre}</p> <button id="masInfo">mas info</button></>)}
                function person() {
                   document.getElementById('masInfo').addEventListener('click', ()=>{
                    Details
                   })
                }
            </div>
        </>
    )
}

export default CataloguePromise;














