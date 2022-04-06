import React from 'react';

import Formulario from './Formulario/Formulario'; 

class Contacto extends React.Component {
 
	render() {
		return(
			<div id='cont-contact'>
					<h2 className="mb-5">Contacto</h2>
 
            		<div className="row">
 
            			<div className="col-md-6">
		        
							<Formulario /> 
 
						</div>
 
						<div className="col-md-6">
		        
							<img alt='tictactoeIMG' width={350} height={350} src='https://store-images.s-microsoft.com/image/apps.2005.14057826194083709.67242c47-4fd7-4f1a-9dd6-5d93f6cc10df.f80f14c0-72ab-46ff-86cd-9d801c8e04e8?mode=scale&q=90&h=300&w=300'></img>
 
						</div>
 
					</div>
 
	  		</div>
 
		)
 
	}
 
}
 
export default Contacto;