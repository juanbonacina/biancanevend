import React, { useState } from "react";
import { useEffect } from "react";
import Items from "./item";
import "./ItemDetailContainer"

const persons = Items

function Details ({persons}){
    const [persons , setPersons] = useState()


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
            setPersons (persons)
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
                    </div>        
                </>
    )

}


export default Details;








