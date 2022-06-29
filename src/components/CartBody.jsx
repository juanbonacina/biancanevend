import { useContext } from "react";
import { CartContext } from "./CartContext";
import {persons} from "./Persons"



function BodyCart (){

    const{itemUnities, deleteItem,itemPrice, Cart, deleteUnity} = useContext(CartContext)
    const user = persons

    function buyer (){

    }
    
  

    return(
        <>
            <div ref={itemdiv}>
                {Cart.map(item =><p>{item.nombre}</p>,<p>{item.id}</p>, <p>{item.price}</p>, <p>{item.unidades}</p>, <p>{item.precio}</p>)}
                <button onClick={deleteUnity}>-</button>
                <button onClick={deleteItem}>X</button>
                <p>unidades : {itemUnities}</p>
            </div>
            <div>
                <button onClick={buyer}>Finalizar Compra</button>
            </div>
            <div>
                <p>{itemPrice}</p>
            </div>
        </>
    )
}

export default BodyCart