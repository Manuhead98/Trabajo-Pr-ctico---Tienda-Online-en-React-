# 📱 CellStore

Tienda online de celulares desarrollada como Trabajo Práctico para la materia de Construcción de Interfaces de Usuario.

---

## Descripción

CellStore es una aplicación web que simula una tienda online de celulares. Los usuarios pueden explorar el catálogo de productos, ver el detalle de cada equipo, filtrar y buscar por distintos criterios, armar su carrito de compras y completar una compra simulada mediante un formulario.

---

## Tecnologías utilizadas

- [React](https://react.dev/) — Biblioteca principal para la construcción de la UI
- [JavaScript (ES6+)](https://developer.mozilla.org/es/docs/Web/JavaScript) — Lenguaje de programación
- [React Router DOM](https://reactrouter.com/) — Navegación y rutas dinámicas
- [React Bootstrap](https://react-bootstrap.github.io/) — Componentes y estilos responsivos
- [Bootstrap](https://getbootstrap.com/) — Framework CSS base
- [Vite](https://vitejs.dev/) — Herramienta de desarrollo y bundler

---

## Estructura del proyecto

```
src/
├── components/
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── ProductCard.jsx
    |__ Carousel.jsx 
├── pages/
│   ├── Inicio.jsx
│   ├── Productos.jsx
│   ├── ProductoDetalle.jsx
│   ├── Carrito.jsx
│   └── CheckOut.jsx
├── data/
│   └── productos.js
├── App.jsx
└── main.jsx
```

---

## Instalación y ejecución

Seguí estos pasos para correr el proyecto en tu máquina:

### 1. Clonar el repositorio

```bash
git clone https://github.com/Manuhead98/Trabajo-Pr-ctico---Tienda-Online-en-React-
cd "tienda online"
```

### 2. Instalar las dependencias

```bash
npm install
```

### 3. Iniciar el servidor de desarrollo

```bash
npm run dev
```

### 4. Abrir en el navegador

```
http://localhost:5173
```

---

## Funcionalidades implementadas

- Página de inicio con identidad visual de la tienda
- Catálogo con más de 12 productos
- Filtrado por categoría, búsqueda por nombre y ordenamiento por precio
- Vista de detalle de cada producto con ruta dinámica (`/producto/:id`)
- Carrito de compras: agregar, eliminar, modificar cantidades y ver total
- Formulario de compra controlado con validaciones
- Navegación completa con React Router DOM
- Diseño responsive adaptado a celular, tablet y escritorio

---

## Integrantes del grupo

| Nombre y Apellido | 
|-------------------|
| Solis Diaz Juan Manuel |
| Carolina Victoria Gonzalez Pisarello |
| Agustina Fontivero |
| Ramiro Casablancas |

---

## Entrega

Trabajo Práctico — Tienda Online en React  
Docente: Lucas Figarola  
Institución: UNAHUR
