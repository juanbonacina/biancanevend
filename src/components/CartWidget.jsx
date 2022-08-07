
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useContext } from "react";
import { CartContext } from "./CartContext";
import {Link} from 'react-router-dom';


function ShoppingCart (){

  const {itemUnities} = useContext(CartContext)

  return(
    <> 
      <div><Link to={'/Carro'} className='p'>🛒{itemUnities()}</Link></div>
    </>    
  )
}

export default ShoppingCart