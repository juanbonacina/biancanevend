//@ts-check
/*import logo from './logo.svg';*/
import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import './components/CartWidget.jsx';
import ShoppingCart from './components/CartWidget.jsx';
import "./components/ItemDetailContainer";
import CataloguePromise from './components/ItemDetailContainer';
import "./components/ItemDetails";
import Details from './components/ItemDetails';
import './components/ItemList.jsx';
import ItemList from './components/ItemList.jsx';
import './components/NavBar.jsx';
import Home from './components/Home';
import CartProvider from './components/CartContext';
import Carro from './components/Carro';
import Persons from './components/BuyerTicket';
import NavBarr from './components/NavBar.jsx';



function App() {

  return(
    <div className="App">
      
    <header className="App-header">
    
     <BrowserRouter>
     <NavBarr/>
      <CartProvider>
        <ShoppingCart/>
        <Routes>
            <Route path='/Carro' element={<Carro/>}/>
            <Route path="/CartWidget" element={<ShoppingCart/>}/>
            <Route path='/ItemDetails/:id' element={<Details/>}/>
            <Route path='/Itemlist' element={<ItemList/>}/>
            <Route path='/Categorias/:categoriaId' element={<CataloguePromise/>}/>
            <Route path='/' element={<CataloguePromise/>}/>
            <Route path='/BuyerTicket' element={<Persons/>}/>
            <Route path='/ItemDetailContainer/:id' element ={<CataloguePromise/>} />
        </Routes>
      </CartProvider>
     </BrowserRouter>
  
    
    </header>
    </div>
  )
}

export default App;

/*<ItemsList></ItemsList>*/