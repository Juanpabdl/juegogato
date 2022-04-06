import React from "react";
import Carousel from "react-bootstrap/Carousel";

class Banner extends React.Component{
    render(){
        return(
            <div>
                <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://steemitimages.com/640x0/https://cdn.steemitimages.com/DQmPB2bMY9tfHLpDeAoYTdN8gH7rpmzbFfgX3nvZayUG95e/Konstant%20Third%20party%20Banners.png"
                        alt="Slide1"
                    ></img>
                    <Carousel.Caption>
                        <h3>Bienvenido a TicTacToe</h3>
                        <p>Un sitio para participar en el clásico juego de Gato</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://www.biz4solutions.com/blog/wp-content/uploads/2020/09/banner_3_Sep_20.jpg"
                        alt="Slide1"
                    ></img>
                    <Carousel.Caption>
                        <h3>Entra con un amigo</h3>
                        <p>Jugar con alguien representa un gran desafio</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://cdn-media-1.freecodecamp.org/images/1*I9VVnu-qsD51IkCrK5Wa5A.png"
                        alt="Slide1"
                    ></img>
                    <Carousel.Caption>
                        <h3>Pasenla bien</h3>
                        <p>Y disfruten del juego</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            </div>
        );
    }
}

export default Banner;