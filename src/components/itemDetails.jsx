import { collection, getDoc, getFirestore, where } from "firebase/firestore";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "./CartContext";
import { itemCount } from "./CountButton";
import "./ItemDetailContainer";



function Details (){
    const [Producto , setProducto] = useState()
    const [Qty, setQty] = useState()
    const unidades = Qty
    const item = Producto


    const{justInIt, addCart, deleteUnity} = useContext(CartContext)
    justInIt(item.id);
    addCart(item, unidades);
    deleteUnity(item, unidades);
    itemCount(Qty)

    useEffect(()=>{
        const db = getFirestore()
        const query = query(
            collection(db, "productos"),
            where("name", "===", "campera snowboard")
        );
        getDoc(query).then((snapshot)=>{
            if(snapshot === 0){
                <p>No se encuentran productos, intente mas tarde</p>
            }
            setProducto=(snapshot.docs.map((doc)=>({id: doc.id, ...doc.data()})));
        })
    },[]);
    
       

    return(
                <>
                    <div>
                        <img/>
                        <div>
                            <h2>{Producto.nombre}</h2>
                            <p>{Producto.data}</p>
                        </div>
                        <div>
                            {itemCount((e)=>setQty(e.target.value))}
                        </div>
                        <div>
                            <button onClick={addCart} >Add to Cart</button>
                        </div>
                    </div>        
                </>
    )

}


export default Details;








