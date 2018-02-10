import React, { Component } from 'react';
import logo from '../../images/logo.png'

class Navbar extends Component {
    render() {

        return (
        	
			<header>
			
			<div className="contents"> 
			<div className= "logo"> 
			<a href="index.html">
				<img src={logo} alt="logo" /> </a>  </div>
    

				<div className= "top-mid">  
			<p> Nord Software </p>  </div>

				<div className="clear"> </div>  
   			 </div>

			</header>
			 
        );
    }
}

export default Navbar;
