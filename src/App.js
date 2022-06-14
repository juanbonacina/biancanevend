/*import logo from './logo.svg';*/
import './App.css';
import './components/CartWidget.jsx';
import './components/ItemList.jsx';
import './components/NavBar.jsx';
import ItemsList from './components/ItemList.jsx';
import './components/CountButton';
import ItemCount from './components/CountButton';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ShoppingCart from './components/CartWidget.jsx';
import Promise from './components/itemcatalogue';

function App() {
  return (
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path='/home' element={<App/>}/>
      <Route path='/cart' element={<ShoppingCart/>}/>
      <Route path='/catalogue' element={<Promise/>}/>
    </Routes>
    <ItemCount startPoint={0} />
    </BrowserRouter>  
  );
}

<ItemsList/>

export default App;
