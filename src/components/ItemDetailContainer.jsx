//ts-check
import React from 'react';
import { Link } from 'react-router-dom';
import productos from "./products";
import "./Styles.css"

function CataloguePromise (){

   
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












