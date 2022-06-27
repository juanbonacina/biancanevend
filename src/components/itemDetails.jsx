import { useContext, useEffect, useState } from "react";
import { CartContext } from "./CartContext";
import Items from "./item";
import "./ItemDetailContainer";
import {getFirestore, doc, getDoc, collection, query, where} from "firebase/firestore";

const persons = Items


function Details ({persons}){
    const [Productos , qty, setProductos] = useState()

    const{justInIt, addCart, deleteUnity} = useContext(CartContext)
    justInIt(persons.id);
    addCart(persons,qty);
    deleteUnity(persons, qty)

    useEffect(()=>{
        const db = getFirestore()
        const query = query(
            collection(db, "productos"),
            where("categoria", "===", "accesorios")
        );
        getDoc(query).then((snapshot)=>{
            if(snapshot === 0){
                <p>No se encuentran productos, intente mas tarde</p>
            }
            setProductos=(snapshot.docs.map((doc)=>({id: doc.id, ...doc.data()})));
        })
    },[]);

    return(
                <>
                    <div>
                        <img/>
                        <div>
                            <h2>{Productos.nombre}</h2>
                            <p>{Productos.data}</p>
                        </div>
                        <div>
                            <ItemCountun/>
                        </div>
                    </div>        
                </>
    )

}


export default Details;








