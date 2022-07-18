import React from "react";
import { useContext } from "react";
import { useEffect, useState } from "react";
import { CartContext } from "./CartContext";
import { Link } from 'react-router-dom';
import "./Styles.css";

function Persons (){
    const [Name,setName] = useState()
    const [Phone,setPhone] = useState()
    const [Email,setEmail] = useState();
    
    const {cart, itemPrice, emptyCart} = useContext(CartContext)

    

    function createBuyer(){
        const order = {
        buyer:{Name, Phone, Email},
        items: {cart},
        total : {itemPrice},
        };
        console.log(order)
        
        const finalOrder = alert(`muchas gracias por su compra ${order.buyer.Name}`)
    }

    return(
        <>
        <div className="containers">
                <input onChange={(e)=>setName(e.target.value)} placeholder="Ingrese su Nombre"></input>
                <input onChange={(e)=>setPhone(e.target.value)} placeholder="Ingrese su Telefono"></input>
                <input onChange={(e)=>setEmail(e.target.value)} placeholder="Ingrese su Email"></input>
                
                <button onClick={createBuyer}>Imgresar Datos</button>
                <button><Link to={"/"}>Volver al Inicio</Link></button>
        </div>
        </>
    )
}


export default Persons;


















