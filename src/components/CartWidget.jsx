
import { useContext } from "react";
import BodyCart from "./CartBody";
import { CartContext } from "./CartContext";


function ShoppingCart (){

  const {itemUnities, emptyCart} = useContext(CartContext)

  const CartEmpty = () => {
    if(emptyCart){
      return(
        <>
        <h2>El carrito esta vacio</h2>
        <button>Ir a Catalogo</button>
        </>
    )}else{
      <BodyCart/>
    }
  }





  return(
    <> <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><img src="img/shoppingCart.jpg" height={120} width={120} {...itemUnities}/></button>

      <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasRightLabel">Offcanvas right</h5>
          <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
        <CartEmpty/>
        </div>
      </div> </>    
  )
}

export default ShoppingCart