
import React, { useState, useEffect } from "react"

import { CSSTransition } from "react-transition-group"


const Nav = () => {

	  const [active, setActive] = useState('Profile')
	  const [isNavVisible, setNavVisibility] = useState(false)
	  const [isSmallScreen, setIsSmallScreen] = useState(true)

	  useEffect(() => {
	    const mediaQuery = window.matchMedia("(max-width: 600px)")
	    mediaQuery.addListener(handleMediaQueryChange)
	    handleMediaQueryChange(mediaQuery)

	    return () => {
	      mediaQuery.removeListener(handleMediaQueryChange)
	    };
	  }, []);

	  const handleMediaQueryChange = mediaQuery => {
	    if (mediaQuery.matches) {
	      setIsSmallScreen(true)
	    } else {
	      setIsSmallScreen(false)
	    }
	  }
				
	  const toggleNav = () => {  	
	    setNavVisibility(!isNavVisible)
	  }

	return (
		<>
			<header className="Header">
				<a href="#" className="logo" >M.A.T</a>
				<CSSTransition
			        in={!isSmallScreen || isNavVisible}
			        timeout={350}
			        classNames="NavAnimation"
			        unmountOnExit
			     >
					<ul>
						<li><a href="#portfolio" >Home</a></li>
						<li><a href="#about">About</a></li>
						<li><a href="#skills">Skills</a></li>
						<li><a href="#project">Project</a></li>
						<li><a href="#contact">Contact</a></li>
					</ul>
				</CSSTransition>
			     	<button  className="Burger" onClick = { toggleNav }>
		              { !isNavVisible ?  <i className="fa fa-bars"></i> : <i className="fa fa-times"></i> }	
			      	</button>	
			</header>
		</>
	)
}

export default Nav