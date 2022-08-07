//@ts-check
import React from 'react';
import './CartWidget.jsx';
import { Link } from 'react-router-dom';


let styleList = {

    display:"flex",
    flexDirection:"row",
    listStyle:"none",
    justifyContent:"space-between",

}

function NavBarr () {
    return (

            <div className='containers'>
                <h1>Biancaneve</h1>
                <h2>snowsport equipment</h2>
                
                <div className='divHeader'>
                    
                    <p><Link to={'/'} className='p'>Inicio</Link></p>
                    <p><Link to={'/ItemList'} className='p'>Catalogo</Link></p>
                    
                    
                </div>

            </div>        

    )

}

export default NavBarr