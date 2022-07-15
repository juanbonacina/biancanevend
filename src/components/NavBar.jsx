//@ts-check
import './CartWidget.jsx';
import ShoppingCart from './CartWidget.jsx';

let styleList = {

    display:"flex",
    flexDirection:"row",
    listStyle:"none",
    justifyContent:"space-between",

}

function NavBarr () {
    return (

            <div style={{border:"solid black 2px"}}>
                <h1>Biancaneve</h1>
                <h2>snowsport equipment</h2>
                <div className="shoppingCart">
                    <ShoppingCart/>
                    <div className="shoppingElements">

                    </div>
                </div>
                <div>
                    <ul  className="navList">
                        <button>inicio</button>
                        <button>catalogo</button>
                        <button>noticias</button>
                        <button>promociones</button>
                        <button>carrito</button>
                    </ul>
                </div>

            </div>        

    )

}

export default NavBarr