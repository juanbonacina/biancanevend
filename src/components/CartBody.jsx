import { useContext } from "react";
import { CartContext } from "./CartContext";

function BodyCart (){

    const{itemUnities, deleteItem, itemPrice, Cart, deleteUnity, emptyCart} = useContext(CartContext)

    function CartBody (){
        
          if(emptyCart){
                return(
                <>
                <h2>El carrito esta vacio</h2>
                <button>Ir a Catalogo</button>
                </>
            )} 
            else{
                <div>
                    {Cart.map((u) =>(<p>{u.nombre}</p>,<p>{u.id}</p>, <p>{u.price}</p>, <p>{u.unidades}</p>,<p>{u.precio}</p>))}
                    <button onClick={deleteUnity}>-</button>
                    <button onClick={deleteItem}>X</button>
                    <p>unidades : {itemUnities}</p>
                    <div>
                    <button onClick={buyer}>Finalizar Compra</button>
                    </div>
                    <div>
                        <p>{itemPrice}</p>
                    </div>
                </div>
            }
    }

    function buyer (){

    }
    
  

    return(
        <>
            <div>
                {CartBody}
            </div>
            
        </>
    )
}

export default BodyCart