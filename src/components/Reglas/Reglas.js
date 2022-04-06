import React from "react";
import Accordion from "react-bootstrap/Accordion";
import AccordionBody from "react-bootstrap/esm/AccordionBody";
import AccordionHeader from "react-bootstrap/esm/AccordionHeader";
import AccordionItem from "react-bootstrap/esm/AccordionItem";

class Reglas extends React.Component{
    render(){
        return(
            <div id="juegoReglas">
                <h2 className="mb-5">Reglas de Tic Tac Toe</h2>
                <Accordion>
                    <AccordionItem eventKey="0">
                        <AccordionHeader>Regla #1</AccordionHeader>
                        <AccordionBody>
                            Se necesitan 2 participantes para el juego, cada uno se le asignará un simbolo:
                            X para el jugador 1, y O para el jugador 2.
                        </AccordionBody>
                    </AccordionItem>
                    <AccordionItem eventKey="1">
                        <AccordionHeader>Regla #2</AccordionHeader>
                        <AccordionBody>
                            Cada jugador tomará turnos para hacer click en una de las casillas del Tablero de 
                            juego, gana quien forme una fila de 3 del mismo simbolo (horizontal, vertical o
                            diagonal).
                        </AccordionBody>
                    </AccordionItem>
                    <AccordionItem eventKey="2">
                        <AccordionHeader>Regla #3</AccordionHeader>
                        <AccordionBody>
                            Si todas las casillas se llenan sin que se haya formado una fila de 3 simbolos, 
                            se declara un empate y los dos jugadores se sienten confundidos de como pudo pasar
                        </AccordionBody>
                    </AccordionItem>
                    <AccordionItem eventKey="3">
                        <AccordionHeader>Regla #4</AccordionHeader>
                        <AccordionBody>
                            Para reiniciar la partida, se debe de oprimir el botón "Go to Game start" abajo 
                            del Tablero para limpiarlo. Tambien es posible revisar todos los movimientos
                            pasados de la partida con los demás botones "Go to move #".
                        </AccordionBody>
                    </AccordionItem>
                </Accordion>
            </div>
        );
    }
}

export default Reglas