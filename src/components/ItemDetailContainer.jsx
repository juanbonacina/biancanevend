//ts-check
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import productos from "./Products";
import "./Styles.css"

function CataloguePromise (){
    const {categoriaId} = useParams()
    

    
    function Catalogue (){
    
        if (categoriaId == undefined) {
            return(
                <>
                    <div className='div'>
                        <ul className='ul'>
                                {productos.map((item)=>(

                                <li className='li' key={item.id}>
                                    <h4>{item.nombre}</h4>
                                    <p>U$D{item.precio}</p>
                                    <button className='links'><Link  to={`/ItemDetails/${item.id}`}>ver mas</Link></button>   
                                </li>
                                
                                ))
                                }
                        </ul>
                        
                    </div>
                </>
            )
        } else {
            console.log(categoriaId)
            const newArray = productos.filter((item)=> item.categoria == categoriaId);
            return(
                <>
                <div className='div'>
                    <ul className='ul'>
                        {newArray.map((item)=>(
                            <li className='li' key={item.id}>
                                <h4>{item.nombre}</h4>
                                <p>U$D:{item.precio}</p>
                                <button><Link to={`/ItemDetails/${item.id}`}>Ver Mas</Link></button>
                            </li>
                        ))}
                    </ul>
                </div>
                </>
            )
           
        }
        
    }

        

    
 
    return(
        <>
            <div>
                {Catalogue()}
            </div>

        </>  
    )
    
}

export default CataloguePromise;


 {/*
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 setTimeout(()=>{
            const getElement = new Promise ((res, rej)=>{
                res(listaProductos)
            })

    
            getElement.then((result)=>{
                setDetalle(result.find((item)=>item.id === id))
                
            })
            getElement.then((result)=>{
                console.log(detalle)
            })
            
        }, 2000)*/}




          
   {/* const [detalle, setDetalle]= useState([]);
    const {key} = useParams();

    const listaProductos = productos


    useEffect (()=>{
       const productoEncontrado =  productos.find((item)=>item.key === key)
      
        console.log (productoEncontrado)
    },[key])*/}












