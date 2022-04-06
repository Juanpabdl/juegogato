import React from "react";
import Card from "react-bootstrap/Card";

class Jugador extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            imgJugador: 'https://api-private.atlassian.com/users/96d228355e3538b478dc652f16c78f72/avatar',
        };
    }
    render(){
        return(
            <div className="player">
                <Card style={{width: '15rem'}}>
                    <Card.Img variant="top" src={this.state.imgJugador} alt="Img_Jugador"/>
                    <Card.Body>
                        <Card.Title>Jugador</Card.Title>
                        <Card.Text>Signo:</Card.Text>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}

export default Jugador;