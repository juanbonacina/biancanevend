
import React, { useContext, useEffect } from "react";
import { Link } from 'react-router-dom';
import { CartContext } from "./CartContext";
import ItemCount from "./CountButton";


function Carro (){
    const{cart, itemPrice, itemUnities, deleteItem}= useContext(CartContext)
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
                                <li className="li" key={item.id}>
                                    <div >
                                        <h4>{item.nombre}</h4>
                                        <p>unidades: {item.qty}</p>
                                        <p>U$D {item.precio}</p>        
                                    </div>
                                    <span onClick={()=>deleteItem(item.id)}>🗑️</span>
                                </li>
                            ))
                            }
                            </ul>
                            <div className="div">
                                <p>precio total: U$D {itemPrice()}</p>
                                <p>cantidad total de unidades: {itemUnities()}</p>
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