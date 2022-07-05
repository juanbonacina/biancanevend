/*import logo from './logo.svg';*/
import { initializeApp } from "firebase/app";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import './components/CartWidget.jsx';
import ShoppingCart from './components/CartWidget.jsx';
import './components/CountButton';
import ItemCount from './components/CountButton';
import './components/ItemList.jsx';
import ItemsList from './components/ItemList.jsx';
import './components/NavBar.jsx';
import NavBarr from "./components/NavBar.jsx";
import NavBar from "./components/NavBar.jsx";
import "./components/ItemDetailContainer";
import CataloguePromise from "./components/ItemDetailContainer";



function App() {
/*
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

      </Routes>
    </BrowserRouter>
    <>
      <NavBar/>
    </>
  );*/
  return(
    <div className="App">
    <header className="App-header">
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
    <body>
    <h1>Biancaneve snowsport equipment</h1>
    <p>hola</p>  
    </body>
    </div>
  )
}

export default App;
