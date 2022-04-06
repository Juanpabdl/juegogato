import React from "react";
import Carousel from "react-bootstrap/Carousel";

class Banner extends React.Component{
    render(){
        return(
            <div>
                <Carousel variant="dark">
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://www.coolmathgames.com/sites/default/files/tic-tac-toe.png"
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
                        src="https://imagenes.elpais.com/resizer/X05m34NL7T1id4zS8WJjvvUUStA=/414x0/cloudfront-eu-central-1.images.arcpublishing.com/prisa/TLL6LLHXS4SHHAL7ZTU5RMZN7U.jpg"
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
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM_c7d5KAWjonSI581EGMqGr32J9vmw-AKHA&usqp=CAU"
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