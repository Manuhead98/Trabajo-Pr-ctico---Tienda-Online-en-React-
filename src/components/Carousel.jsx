import { Carousel } from 'react-bootstrap';

function HeroCarousel() {
    return (
        <Carousel>

            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="./public/img/banner1.jpg"
                    alt="Samsung"
                />
                <Carousel.Caption>
                    <h3>Últimos Samsung Galaxy</h3>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="./public/img/banner2.jpg"
                    alt="iPhone"
                />
                <Carousel.Caption>
                    <h3>Nueva línea iPhone</h3>
                </Carousel.Caption>
            </Carousel.Item>

        </Carousel>
    );
}

export default HeroCarousel;