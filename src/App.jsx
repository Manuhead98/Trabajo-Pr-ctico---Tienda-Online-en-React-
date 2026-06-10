import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Inicio";
import Products from "./pages/Productos";
import ProductDetail from "./pages/ProductoDetalle";
import Cart from "./pages/Carrito";
import Checkout from "./pages/CheckOut";
import Footer from "./components/Footer";

function App() {
  const [carrito, setCarrito] = useState([]);
  const agregarAlCarrito = (producto) => {
    console.log("Agregado:", producto.nombre);
    const existe = carrito.find(item => item.id === producto.id);
    if (existe) {
      setCarrito(
        carrito.map(item =>
          item.id === producto.id
            ? {
              ...item,
              cantidad: item.cantidad + 1
            }
            : item
        )
      );
    } else {
      setCarrito([
        ...carrito,
        {
          ...producto,
          cantidad: 1
        }
      ]);

    }
  };
  return (
    //BrowserRouter componente que envuelve la app para habilitar el enrutamiento
    //Declaro todas las rutas de la app dentro del componente Routes
    // en las rutas de productos y carrito le paso las funciones y estados  para manejar el carrito de compras
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<Products agregarAlCarrito={agregarAlCarrito} />} />
        <Route path="/producto/:id" element={<ProductDetail />} />
        <Route path="/carrito" element={<Cart carrito={carrito} setCarrito={setCarrito} />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;