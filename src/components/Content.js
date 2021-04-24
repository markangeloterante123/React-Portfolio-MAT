

const Content = ({ info }) => {
	return (
		<>
			<h2> {info.name} </h2>
			<p> {info.content} </p>
		
			<h2 style={{fontSize:'24px',fontWeight:'700'}}> {info.title1} </h2>
			<p>{info.content1}</p>
			<p>{info.content2}</p>
			<p>{info.content3}</p>
			<h2 style={{fontSize:'24px',fontWeight:'700'}}> {info.title2} </h2>
			<p>{info.content4}</p>
			<p>{info.content5}</p>
			<h2 style={{fontSize:'24px',fontWeight:'700'}}> {info.title3} </h2>
			<p>{info.content6}</p>
			<p>{info.content7}</p>
			<p>{info.content8}</p>
			<p>{info.content9}</p>
		</>
	)
}

export default Content
