import React, { useState } from "react";
import { useEffect } from "react";
import Items from "./item";
import "./ItemDetailContainer"

const persons = Items

function Details ({persons}){
const [persons , setPersons] = useState()


    useEffect(()=>{
        if(setPersons.id === Items.id){
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
    })

}


export default Details;








