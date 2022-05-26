
let styleList = {

    display:"flex",
    flexDirection:"row",
    listStyle:"none",
    justifyContent:"space-between",

}

function navBar () {
    return (

            <div style={{textAling:"center"}}>
                <h1>Biancaneve</h1>
                <h2>snowsport equipment</h2>
                <div className="shoppingCart">
                    <img/>
                    <div className="shoppingElements">

                    </div>
                </div>
                <div>
                    <ul style={styleList} className="navList">
                        <li><a href="#">inicio</a></li>
                        <li><a href="#">catalogo</a></li>
                        <li><a href="#">noticias</a></li>
                        <li><a href="#">promociones</a></li>
                    </ul>
                </div>

            </div>        

    )

}