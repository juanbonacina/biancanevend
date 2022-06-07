import React, { useEffect, useState } from 'react'
import './item.jsx'

const Client = Items

function Promise () {
    const [loading , setLoading] = useState ();
    const [result , setResult] = useState ();
    const [error, setError] = useState ();

    useEffect(()=>{
        setLoading(true);
        setError(false);
        setResult();

        const pay = new Promise((res, rej) =>{
            setTimeout(()=>{
                res("ya pago")
            }, 3000);
        })

        pay
        .then((resultado)=>{
            setResult(resultado)
        })
        .catch((err)=>{
            setError(true)
        })
        .finally(()=>{
            setLoading(false)
        })
    },[])
    
    return(
        <>
            <div>{loading && "loading"}</div>
            <div>{error && "Lo sentimos, tuvimos un error, vuelve a intentarlo mas tarde"}</div>
            <div>
                <ul>
                    {Client.map(u =><li>{u.nombre}{u.id}</li>)}
                </ul>
            </div>
        </>
    )

}

export default Promise