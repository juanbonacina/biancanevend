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



function App() {

  return(
    <div className="App">
    <header className="App-header">
    
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path="/CartWidget" element={<ShoppingCart/>}/>
      <Route path='/ItemDetails/:id' element={<Details/>}/>
      <Route path='/itemlist' element={<ItemList/>}/>
      <Route path='/ItemDetailContainer/:id' element ={<CataloguePromise/>} />
     </Routes>
     </BrowserRouter>
    {/*<ItemsList/>*/}
    </header>
    </div>
  )
}

export default App;

/*<ItemsList></ItemsList>*/