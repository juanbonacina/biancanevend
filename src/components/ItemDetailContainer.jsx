//ts-check
import React from 'react';
import { Link } from 'react-router-dom';
import productos from "./products";


function CataloguePromise (){

   
    return(
        <>
            <div>
                <button><Link to={'/Carro'}>Carrito</Link> </button>
                <ul>
                        {productos.map((item)=>(

                        <li key={item.id}>
                            <h4>{item.nombre}</h4>
                            <p onClick={console.log(item)}>{item.precio}</p>
                            <button><Link to={`/ItemDetails/${item.id}`}>ver mas</Link></button>
                            
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












