//@ts-check
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


function ShoppingCart (){

  function carritoveri(){
    console.log("funciono")
  }


  return(
    <> 
      <button onClick={carritoveri}  className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">Carrito</button>

      <div className="offcanvas offcanvas-start" data-bs-scroll="true" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">Backdrop with scrolling</h5>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <h3>hola</h3>
        </div>
      </div> 
    </>    
  )
}

export default ShoppingCart