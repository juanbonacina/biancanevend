import React, { useState } from "react";
import { useEffect } from "react";
import Items from "./item";
import "./ItemDetailContainer";
import ItemCount from "./CountButton";
import { useContext } from "react";
import { CartContext } from "./CartContext";

const persons = Items


function Details ({persons}){
    const [persons , qty, setPersons] = useState()

    const{justInIt, addCart, deleteUnity} = useContext(CartContext)
    justInIt(persons.id);
    addCart(persons,qty);
    deleteUnity(persons, qty)

    useEffect(()=>{
        
        const find = new Promise((res))
        setTimeout(()=>{
            res('mas detalles');
        },2000);

        find
        .then(()=>{
            Items.find(persons.id)
        })

        .then((persons)=>{
            setPersons (persons, qty)
        })
    })
    return(
                <>
                    <div>
                        <img/>
                        <div>
                            <h2>{persons.nombre}</h2>
                            <p>{persons.id}</p>
                            <p>{persons.sucursal}</p>
                            <p>{persons.genero}</p>
                        </div>
                        <div>
                            <ItemCountun/>
                        </div>
                    </div>        
                </>
    )

}


export default Details;








