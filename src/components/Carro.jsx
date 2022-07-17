
import React from "react";
import { useContext, useEffect, useState} from "react";
import { CartContext } from "./CartContext";
import { Link } from 'react-router-dom';


function Carro (){

    const{cart, itemPrice, deleteItem}= useContext(CartContext)

    function Cart (){
        const [carro, setCarro] = useState()

        useEffect(()=>{ 
     
            if(cart.length == 0 ){
                        return( 
                        
                            <>
                                <p>El carrito se encuentra vacio</p>
                                <button><Link to={'/ItemList'}>Ir al Catalogo</Link></button>
                            </>
                        )
                    }
                   
            if(cart != 0){
                return( 
                       setCarro(<>
                            <div>
                    
                                <ul>
                                    {cart.map((item)=>{
                                        <>
                                            <li key={item.id}>
                                                <h4>{item.nombre}</h4>
                                                <p>${item.precio}</p>
                                                <p>{item.qty}</p>
                                            </li>
                                            <button onClick={deleteItem ()} key={item.id}>X</button>
                                        </>
                                    })}
                                </ul>
                                <p>precio total: {itemPrice()}</p>
                            </div>
                        </>)
                    )
                    }
        },[setCarro])
                    
    }
    
    return(
        <div>
            {Cart()}
        </div>
    )

    
}

export default Carro;





{/*
const [carro, setCarro] = useState()
useEffect(()=>{},[])

*/}