import React, { useEffect, useState } from "react";
import "./item";
import Items from "./item";
import Details from "./itemDetails";


function CataloguePromise (){
    const [Productos , qty, setProductos] = useState()
    useEffect(()=>{
        const db = getFirestore()
        const itemCollection = collection(db, "productos")
        getDoc(itemCollection).then((snapshot)=>{
            if(snapshot === 0){
                <p>No se encuentran productos, intente mas tarde</p>
            }
            setProductos=(snapshot.docs.map((doc)=>({id: doc.id, ...doc.data()})));
        });
    },[]);

    return(
        <>
            <div>{wait && "loading..."}</div>
            <div>{fail && "lo sentimos, tuvimos un problema, intente mas tarde"}</div>
            <div>
                <P>{setProductos}</P>
                
            </div>
        </>
    )
}

export default CataloguePromise;















