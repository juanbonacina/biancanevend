//@ts-check
import { useContext } from "react";
import { useEffect, useState } from "react";
import { CartContext } from "./CartContext";
import {addDoc, collection, getFirestore} from "firebase/firestore"


function Persons (){
    const [Name,setName] = useState()
    const [Phone,setPhone] = useState()
    const [Email,setEmail] = useState();
    // @ts-ignore
    const {Cart, itemPrice} = useContext(CartContext)

    const db = getFirestore()
    const orderCollection = collection(db, "order")

    function createBuyer(){
        const order = {
        buyer:{Name, Phone, Email},
        items: Cart,
        total : itemPrice,
        };

           
       addDoc(orderCollection, order).then(({id})=>{
        console.log(id)
       }) 
            
    }

    return(
        <>
        <input onChange={(e)=>setName(
// @ts-ignore
        e.target.value)} placeholder="Ingrese su Nombre"></input>
        <input onChange={(e)=>setPhone(
// @ts-ignore
        e.target.value)} placeholder="Ingrese su Numero de Telefono"></input>
        <input onChange={(e)=>setEmail(
// @ts-ignore
        e.target.value)} placeholder="Ingrese su Email"></input>
        <button onClick={createBuyer} ></button>
        </>
    )
}


export default Persons;


















