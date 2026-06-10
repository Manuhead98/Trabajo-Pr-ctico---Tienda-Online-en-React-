import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Inicio";
import Products from "./pages/Productos";
import ProductDetail from "./pages/ProductoDetalle";
import Cart from "./pages/Carrito";
import Checkout from "./pages/CheckOut";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/productos" element={<Products />} />

        <Route path="/producto/:id" element={<ProductDetail />} />

        <Route path="/carrito" element={<Cart />} />

        <Route path="/checkout" element={<Checkout />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;