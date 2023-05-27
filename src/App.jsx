import { useState, useEffect, useContext, createContext } from 'react'
import {BrowserRouter, Link, Router, Route}from "react-router-dom"
import './Carrito'
import './App.css'


const CartContext = createContext();

const ShoppingCart =()=> {
  const cartContext = useContext(CartContext);
  const { AddToCart, removeFromCart, clearCart } = cartContext;

  return(
  
    <div> 
      <h2>Productos en el Carrito</h2>
    </div>

      if(AddToCart.length === 0){
        <p>No hay productos seleccionados</p>
      }else{

      }
     
   

  );
};
function App() {
  const [count, setCount] = useState(0);
  

  return (
  
  );
}

export default App
