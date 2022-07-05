
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

            <div style={{textAling:"center", border:"solid black 2px"}}>
                <h1>Biancaneve</h1>
                <h2>snowsport equipment</h2>
                <div className="shoppingCart">
                    <ShoppingCart/>
                    <div className="shoppingElements">

                    </div>
                </div>
                <div>
                    <ul style={styleList} className="navList">
                        <button><link to={'/App'}>inicio</link></button>
                        <button><link to={'/ItemCatalogue'}>catalogo</link></button>
                        <button><link to={'/App'}>noticias</link></button>
                        <button><link to={'/ItemCatalogue/id'}>promociones</link></button>
                        <button><link to={'/CartWidget'}>carrito</link></button>
                    </ul>
                </div>

            </div>        

    )

}

export default NavBarr