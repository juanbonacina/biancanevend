/*import logo from './logo.svg';*/
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import './components/CartWidget.jsx';
import ShoppingCart from './components/CartWidget.jsx';
import './components/CountButton';
import ItemCount from './components/CountButton';
import Items from './components/item';
import Promise from './components/itemcatalogue';
import './components/ItemList.jsx';
import ItemsList from './components/ItemList.jsx';
import './components/NavBar.jsx';
import { initializeApp } from "firebase/app";




function App() {
  
  const firebaseConfig = {
    apiKey: "AIzaSyBEukEJjcU_80hwSr4DF5cMoJhtvQ3Jm3c",
    authDomain: "biancaneve-ecommerce.firebaseapp.com",
    projectId: "biancaneve-ecommerce",
    storageBucket: "biancaneve-ecommerce.appspot.com",
    messagingSenderId: "380164417839",
    appId: "1:380164417839:web:d0412574fc3e9ac4a6d9da"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);




  return (
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path='/home' element={<App/>}/>
      <Route path='/cart' element={<ShoppingCart/>}/>
      <Route path='/catalogue' element={<Promise/>}/>

    </Routes>
    <ItemCount startPoint={0} />
    <div>
      <cartContextProvider>
        <Items/>
        <CountButton/>
      </cartContextProvider>
    </div>
    </BrowserRouter>  
  );
}

<ItemsList/>

export default App;
