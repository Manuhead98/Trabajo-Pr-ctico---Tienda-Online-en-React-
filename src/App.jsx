import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/NavBar";
import Home from "./pages/Inicio";
import Products from "./pages/Productos";
import ProductDetail from "./pages/ProductoDetalle";
import Cart from "./pages/Carrito";
import Checkout from "./pages/CheckOut";
import Footer from "./components/Footer";
import Nosotros from "./pages/Nosotros";

function App() {
  const [carrito, setCarrito] = useState(() => {
  const carritoGuardado = localStorage.getItem("carrito");
  return carritoGuardado ? JSON.parse(carritoGuardado) : [];
  });
  useEffect(() => {
  localStorage.setItem("carrito", JSON.stringify(carrito));
  }, [carrito]);
  const [darkMode, setDarkMode] = useState(false);

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
      <div
        className={
          darkMode
            ? "bg-dark text-light min-vh-100"
            : "bg-light text-dark min-vh-100"
        }
      >
        <Navbar
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />

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
            path="/nosotros"
            element={<Nosotros />}
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
            element={
              <Checkout
                carrito={carrito}
                setCarrito={setCarrito}
              />
            }
          />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;