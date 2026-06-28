import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/NavBar";
import Inicio from "./pages/Inicio";
import Productos from "./pages/Productos";
import ProductoDetalle from "./pages/ProductoDetalle";
import Carrito from "./pages/Carrito";
import CheckOut from "./pages/CheckOut";
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
      if (existe.cantidad >= producto.stock) {
        alert("No hay más stock disponible");
        return;
      }
      setCarrito(
        carrito.map(item =>
          item.id === producto.id
            ? { ...item, cantidad: item.cantidad + 1 }
            : item
        )
      );
    } else {
      if (producto.stock <= 0) {
        alert("Producto sin stock");
        return;
      }
      setCarrito([
        ...carrito,
        { ...producto, cantidad: 1 }
      ]);
    }
  };

  const eliminarDelCarrito = (id) => {
    setCarrito(carrito.filter(item => item.id !== id));
  };

  const aumentarCantidad = (id) => {
    setCarrito(
      carrito.map(item => {
        if (item.id === id) {

          if (item.cantidad >= item.stock) {
            return item;
          }
          return {
            ...item,
            cantidad: item.cantidad + 1
          };
        }
        return item;
      })
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
            element={
              <Inicio
                agregarAlCarrito={agregarAlCarrito}
                carrito={carrito}
              />
            }
          />

          <Route
            path="/productos"
            element={
              <Productos
                agregarAlCarrito={agregarAlCarrito}
                carrito={carrito}
              />
            }
          />

          <Route
            path="/producto/:id"
            element={
              <ProductoDetalle
                agregarAlCarrito={agregarAlCarrito}
              />
            }
          />

          <Route
            path="/nosotros"
            element={<Nosotros />}
          />

          <Route
            path="/carrito"
            element={
              <Carrito
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
              <CheckOut
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