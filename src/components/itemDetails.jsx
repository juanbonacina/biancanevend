
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "./CartContext";
import ItemCount from "./CountButton";
import "./ItemDetailContainer";
import productos from "./Products";

function Details (){

    
    const [qty, setQty] = useState(1)
    const [item, setItem] = useState()
    const [loading, setLoading]= useState(true)
    const {id} = useParams()

    const {justInIt, addCart} = useContext(CartContext)

    const onAdd = () => {
        alert(`cantida de producto ${qty}`)
        justInIt(id)
        addCart(item, qty, id)
        
        console.log(item, qty, id)
    } 
    console.log(id)
   useEffect(()=>{
        
            setTimeout(()=>{
                const getElement = new Promise ((res, rej)=>{
                    res(productos)
                })


                getElement.then((result)=>{
                    setItem(productos.find((item)=>item.id == id))
                    
                })
                
                getElement.finally(()=>{
                    setLoading(false)
                })
                console.log(item)
            }, 2000)

    },[id])

    return(
        <>
            <div>
                <div>
                    {loading && ("loading...")}
                </div>
                <div>
                    {item && 
                        <> 
                        <article className="div">
                            <h2>{item.nombre}</h2>
                            <p>U$D{item.precio}</p>
                            <p>{item.tipo}</p>
                            <p>{item.descripcion}</p>
                        </article> 
                        <aside>                 
                            <ItemCount qty={qty} setQty={setQty} onAdd={onAdd} />
                        </aside>
                        </>
                    }

                          
                </div>
               
            </div>    
        </>  
    )

}


export default Details;

{/**/}