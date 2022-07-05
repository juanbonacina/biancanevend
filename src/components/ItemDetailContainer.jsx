import { useEffect, useState } from "react";
import {getFirestore, collection, getDoc} from "firebase/firestore"

function CataloguePromise (){
    const [Productos, setProductos] = useState()
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
            <div>
                <div>
                    {getDoc}
                </div>
                
            </div>
        </>
    )
}

export default CataloguePromise;















