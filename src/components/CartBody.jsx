import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { CartContext } from "./CartContext";
import shopCart from "./CartWidget";
import productos from "./Products";



function BodyCart (){

    const{itemUnities, deleteItem,itemPrice, Cart, deleteUnity} = useContext(CartContext)

    function deleteProduct (id) {
        const deleteAll = useRef(deleteAll);
        deleteButton.onClick(()=>{
            {deleteItem}
        })
    }
    function deleteQty (id){
        const deleteButton = useRef(deleteButton);
        deleteButton.onClick(()=>{
            {deleteUnity}
        })
    }

    return(
        <>
            <div ref={itemdiv}>
                {Cart.map(item =><p>{item.nombre}</p>,<p>{item.id}</p>, <p>{item.price}</p>, <p>{item.unidades}</p>, <p>{item.precio}</p>)}
                <button ref={deleteButton}>-</button>
                <button ref={deleteAll}>X</button>
                <p>unidades : {itemUnities}</p>
            </div>
            <div>
                <button ref={FinishShop}>Finalizar Compra</button>
            </div>
            <div>
                <p>{itemPrice}</p>
            </div>
        </>
    )
}

export default BodyCart