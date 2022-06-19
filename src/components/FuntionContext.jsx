import { useState } from "react";
import CartContext from "./CartContext";


function cartContextProvider ({defaultvalue = [], children}){

    const [item, setItem] = useState(defaultvalue)

    function findItem (id){
        return item.find(obj => obj.id === id)

    };

    function isIN (id){
        return id === undefined ? undefined : getFrom !== undefined
    }

    function addToItem(obj){
        if(isIN ( obj && obj.id )) {
            alert("this item is all redy in the cart");
            return;
        }
    }

    return <CartContext.Provider value ={{item, addToItem, isIN,itemSize: item.length}}>
        {children}
    </CartContext.Provider>

}

export default cartContextProvider















