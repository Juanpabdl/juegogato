import React from 'react';
 
import Menu from '../Menu/Menu'; // Componente Menú (Lo he creado en la Parte 1 de este Tutorial) 
import Banner from "./Banner/Banner";
import Game from './Servicios/Servicios';
import Footer from '../Footer/Footer'; // Componente Footer (Lo he creado en la Parte 1 de este Tutorial) 
//import Jugador from '../Jugador/Jugador';
//import Reglas from '../Reglas/Reglas';
 
class Home extends React.Component {
 
	render() {
 
		return(
 
			<>
 
			<Menu /> 
 
			<main role="main" className="flex-shrink-0 mt-5">

		            <div className="container" id="content">
		  	  		
                        <div id='cont-banner'>
                            <Banner />
                        </div>

                        <div id="cont-game">
                            <Game />
                        </div>

                        <hr className="featurette-divider" />
 
		            </div>
 
	  		</main>
 
	  		<Footer />
 
	  		</>
 
		)
 
	}
 
}
 
export default Home;