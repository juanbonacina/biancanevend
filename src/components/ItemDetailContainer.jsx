import React, { useEffect, useState } from "react";
import "./item";
import Items from "./item";
import Details from "./itemDetails";


function CataloguePromise (){
    const[wait, setWait] = useState(true);
    const[element, setElement] = useState();
    const[fail, setFail] = useState(false);

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
                {Items.map(u=><><p>{u.nombre}</p> <button id="masInfo" onClick={Details}>mas info</button></>)}
            </div>
        </>
    )
}

export default CataloguePromise;















