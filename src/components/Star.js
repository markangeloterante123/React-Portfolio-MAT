

const Star = ({ star }) => {
	 return (
	 	<>
		 	{[...Array(star)].map((_, i) => (
		 		<i key={i} className="star-active fa fa-star "></i>
		 	))}
		</>
	 )
}

export default Star