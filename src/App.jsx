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
  //estado para manejar el carrito de compras, es un array de productos que el usuario ha agregado al carrito
  const [carrito, setCarrito] = useState([]);
  //funcion para agregar un producto al carrito, recibe el producto a agregar como parametro
  const agregarAlCarrito = (producto) => {
    //console.log("Agregado:", producto.nombre);
    //verifico si el producto ya existe en el carrito
    const existe = carrito.find(item => item.id === producto.id);
    if (existe) {
      //si el producto ya existe en el carrito, aumento la cantidad 
      setCarrito(carrito.map(item => item.id === producto.id ? { ...item, cantidad: item.cantidad + 1 } : item));
    } else {
      // si el producto no existe en el carrito, lo agrego con cantidad 1
      setCarrito([...carrito, { ...producto, cantidad: 1 }]);
    }
  };
  //funcion para eliminar un producto del carrito, recibe el id del producto a eliminar
  const eliminarDelCarrito = (id) => {
    setCarrito(carrito.filter(item => item.id !== id));

  };
  //funcion para aumentar la cantidad de un producto en el carrito, recibe el id del producto a aumentar
  const aumentarCantidad = (id) => {
    setCarrito(
      carrito.map(item => item.id === id ? { ...item, cantidad: item.cantidad + 1 } : item));
  };
  //funcion para disminuir la cantidad de un producto en el carrito, recibe el id del producto a disminuir
  const disminuirCantidad = (id) => {
    setCarrito(carrito.map(item => item.id === id ? { ...item, cantidad: item.cantidad - 1 } : item).filter(item => item.cantidad > 0));
  };
  return (
    //BrowserRouter componente que envuelve la app para habilitar el enrutamiento
    //Declaro todas las rutas de la app dentro del componente Routes
    // en las rutas de productos y carrito le paso las funciones y estados  para manejar el carrito de compras
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home agregarAlCarrito={agregarAlCarrito} />} />
        <Route path="/productos" element={<Products agregarAlCarrito={agregarAlCarrito} />} />
        <Route path="/producto/:id" element={<ProductDetail agregarAlCarrito={agregarAlCarrito} />} />
        <Route
          path="/carrito"
          element={<Cart carrito={carrito}
            eliminarDelCarrito={eliminarDelCarrito}
            aumentarCantidad={aumentarCantidad}
            disminuirCantidad={disminuirCantidad} />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;