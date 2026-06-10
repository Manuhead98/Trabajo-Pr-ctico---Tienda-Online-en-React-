import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";
function Inicio() {
    return (
        <>
            <Navbar />
            <div className="container mt-4">
                <h1>Bienvenido a nuestra tienda</h1>
                <p>Explora nuestros productos y encuentra el que mejor se adapte a tus necesidades.</p>
            </div>
            <Carousel />
        </>
    );
}

export default Inicio;