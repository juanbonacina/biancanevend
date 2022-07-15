
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import ItemCount from "./CountButton";
import "./ItemDetailContainer";
import productos from "./products";

function Details (){

    
    const [qty, setQty] = useState(0)
    const [item, setItem] = useState()
    const [loading, setLoading]= useState(true)
    const {id} = useParams()

    const onAdd = () => {
        alert(`cantida de producto ${qty}`)
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
                        <p>hola</p>
                        <h2>{item.nombre}</h2>
                        <p>${item.precio}</p>
                        <p>{item.tipo}</p>
                                            
                        <ItemCount qty={qty} setQty={setQty} onAdd={onAdd} /></>}
                                
                </div>
            </div>    
        </>  
    )

}


export default Details;

{/**/}



   
       {/*function showProduct (){
            setItem(x => producto.filter(x => x.id === id))

            return(
                <>
                        <div>
                        {/* <p>hola</p>
                            <h2>{item.nombre}</h2>
                            <p>${item.precio}</p>
                            <p>{item.tipo}</p>}
                        
                            <ItemCount qty={qty} setQty={setQty} onAdd={onAdd} />
                        </div>        
                    </>
            )
        }*/}


