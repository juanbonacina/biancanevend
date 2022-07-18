
import React, { useContext, useEffect } from "react";
import { Link } from 'react-router-dom';
import { CartContext } from "./CartContext";


function Carro (){
    const{cart, itemPrice}= useContext(CartContext)
    const cartArray = cart
    console.log(cart)
    console.log(cartArray)
    
   
    useEffect(()=>{
        RenderDaetails()
    },[cart])
        
        function RenderDaetails (){
            
                if(cart.length === 0 ){
                            return( 
                            
                                <>
                                <div className="divCarro">
                                    <p>El carrito se encuentra vacio</p>
                                    <button><Link to={'/ItemList'}>Ir al Catalogo</Link></button>
                                </div>
                                </>
                            )
                }
                   
                 else{
                    return( 
                        <>
                            <ul className="ul">
                            {cart.map((item)=>(
                                <li className="li">
                                    <div key={item.id}>
                                        <h4>{item.nombre}</h4>
                                        <p>unidades: {item.qty}</p>
                                        <p>U$D {item.precio}</p>        
                                    </div>
                                </li>
                            ))
                            }
                            </ul>
                            <div className="div">
                                <p>precio total: U$D {itemPrice()}</p>
                                <button><Link to={'/BuyerTicket'}>finalizar Compra</Link></button>
                            </div>
                        </>
                    )
                }
            
        }
                    
    
    
    return(
        <div className="containers">
            {RenderDaetails()}
        </div>
    )

   
}

export default Carro;





{/*
const [carro, setCarro] = useState()
useEffect(()=>{},[])

 

*/}