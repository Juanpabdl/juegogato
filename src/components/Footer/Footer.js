import React from 'react';
 
 
class Footer extends React.Component {
 
  render() {
 
    return (
 
        <footer className="container">

            <p>&copy; {(new Date().getFullYear())} Personal. &middot; <a href="https://www.geeksforgeeks.org/how-to-create-a-simple-responsive-footer-in-react-js/">Política de Privacidad</a> &middot; <a href="https://www.geeksforgeeks.org/how-to-create-a-simple-responsive-footer-in-react-js/">Términos</a></p>
        </footer>
 
    )
    
  }
 
}
 
export default Footer;