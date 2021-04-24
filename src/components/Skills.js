
import Image from './Image'

import Star from './Star'

import DefStar from './DefStar'

const Skills = ({ info }) => {
	return (
		<>
			<h2> {info.name}</h2>
			{info.img.map((Img, i) => ( 
				<div key={i} className="skills-images">
					<Image  src={ Img.src }  alt={Img.alt}/>
					<span><b>{Img.alt}</b> <Star star={ Img.star }/><DefStar learn={ Img.learn } />  {Img.yr}</span>
				</div>
			))}
		</>
	)
}

export default Skills