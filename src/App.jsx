import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/NavBar";
import Home from "./pages/Inicio";
import Products from "./pages/Productos";
import ProductDetail from "./pages/ProductoDetalle";
import Cart from "./pages/Carrito";
import Checkout from "./pages/CheckOut";
import Footer from "./components/Footer";

function App() {
  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (producto) => {
    const existe = carrito.find(item => item.id === producto.id);

    if (existe) {
      setCarrito(
        carrito.map(item =>
          item.id === producto.id
            ? { ...item, cantidad: item.cantidad + 1 }
            : item
        )
      );
    } else {
      setCarrito([...carrito, { ...producto, cantidad: 1 }]);
    }
  };

  const eliminarDelCarrito = (id) => {
    setCarrito(carrito.filter(item => item.id !== id));
  };

  const aumentarCantidad = (id) => {
    setCarrito(
      carrito.map(item =>
        item.id === id
          ? { ...item, cantidad: item.cantidad + 1 }
          : item
      )
    );
  };

  const disminuirCantidad = (id) => {
    setCarrito(
      carrito
        .map(item =>
          item.id === id
            ? { ...item, cantidad: item.cantidad - 1 }
            : item
        )
        .filter(item => item.cantidad > 0)
    );
  };

  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={<Home agregarAlCarrito={agregarAlCarrito} />}
        />

        <Route
          path="/productos"
          element={<Products agregarAlCarrito={agregarAlCarrito} />}
        />

        <Route
          path="/producto/:id"
          element={<ProductDetail agregarAlCarrito={agregarAlCarrito} />}
        />

        <Route
          path="/carrito"
          element={
            <Cart
              carrito={carrito}
              eliminarDelCarrito={eliminarDelCarrito}
              aumentarCantidad={aumentarCantidad}
              disminuirCantidad={disminuirCantidad}
            />
          }
        />

        <Route
          path="/checkout"
          element={<Checkout carrito={carrito} />}
        />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;