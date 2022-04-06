import React from 'react';
 
import Menu from '../Menu/Menu';
import Jumbotron from './Jumbotron/Jumbotron'; // Este Componente lo crearé a continuación 
import Detalles from './Detalles/Detalles'; // Este Componente lo crearé a continuación 
import Footer from '../Footer/Footer';
 
 
class Nosotros extends React.Component {
 
	render() {
 
		return(
 
			<>
 
			<Menu />
 
			<main role="main" className="flex-shrink-0 mt-5">
		        
				<Jumbotron /> 
				<Detalles /> 
 
	  		</main>
 
	  		<Footer />
 
	  		</>
 
		)
 
	}
 
}
 
export default Nosotros;