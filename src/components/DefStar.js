

const DefStar = ({ learn }) => {
	return (
		<>
		 	{[...Array(learn)].map((_, i) => (
		 		<i key={i} className="fa fa-star "></i>
		 	))}
		</>
	)
}
export default DefStar