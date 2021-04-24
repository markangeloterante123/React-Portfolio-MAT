import  React, { useState } from 'react'

import Carousel from 'react-grid-carousel'

const ProjectCarousel = ({ img }) => {
	const [isHover, setIsHover] = useState({
		setIsHover : true
	})

	return (
		<Carousel hideArrow={!isHover} >
			{img.map((Img, i) => (
			    <Carousel.Item key={i} >
			    	<h2> {Img.proj} </h2>
			      	<img className="imgCarousel" src={Img.img}  />
			    	<p>Images: {Img.id} out of 45</p>
			    	<p> {Img.descrip}</p>
			    </Carousel.Item>
			))}
		</Carousel>
	)
}

export default ProjectCarousel