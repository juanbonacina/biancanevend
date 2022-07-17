import React from "react";
import { useContext } from "react";
import { useEffect, useState } from "react";
import { CartContext } from "./CartContext";
import {addDoc, collection, getFirestore} from "firebase/firestore"


function Persons (){
    const [Name,setName] = useState()
    const [Phone,setPhone] = useState()
    const [Email,setEmail] = useState();
    
    const {Cart, itemPrice} = useContext(CartContext)

    

    function createBuyer(){
        const order = {
        buyer:{Name, Phone, Email},
        items: Cart,
        total : itemPrice,
        };
            
    }

    return(
        <>
        <input onChange={(e)=>setName(e.target.value)} placeholder="Ingrese su Nombre"></input>
        <input onChange={(e)=>setPhone(e.target.value)} placeholder="Ingrese su Numero de Telefono"></input>
        <input onChange={(e)=>setEmail(e.target.value)} placeholder="Ingrese su Email"></input>
        <button onClick={createBuyer} ></button>
        </>
    )
}


export default Persons;


















