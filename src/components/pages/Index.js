import Nav from '../../components/Nav'

import Container from 'react-bootstrap/Container'

import Content from '../../components/Content'

import Image from '../../components/Image'

import Footer from '../../components/Footer'

import Project1 from '../../components/ProjectCarousel'

import Email from '../../components/Email'

import Skills from '../../components/Skills'

const Index = ({ information, project }) => {

	return (
			<section>
				<div className="container-fluid">
					<div className="row" id="portfolio">
						<div className="container">
								<Nav />
							<div className="content">
								<Content info={information.info1} />
							</div>
							<div className="imgBx">
								<Image src={information.info1.src} alt={information.info1.alt} />
							</div>
						</div>
					</div>
					<div className="row" id="about">
						<div className="container">
							<div className="imgBx">
								<Image src={information.info2.src} alt={information.info2.alt} />
							</div>
							<div className="content2">
								<Content info={information.info2} />
							</div>
						</div>
					</div>	

					<div className="row" id="skills">
						<div className="container">
							
							<div className="content" >
								<Skills info={information.info3} />
							</div>
							<div className="imgBx">
								<Image src={information.info3.src}alt={information.info3.alt} />
							</div>	
						</div>
					</div>	

					<div className="row" id="project">
						<div className="container">
							
							<div className="imgBx">
								<Image src={information.info4.src} alt={information.info4.alt} />
							</div>
							<div className="content2" >
								<Project1 img = { project } />							
							</div>
								
						</div>
					</div>

					<div className="row" id="contact">
						<div className="container" >

							<div className="content" >		
								<h2> Contact </h2>
								<Email />
							</div>
							<div className="imgBx">
								<Image src={information.info5.src} alt={information.info5.alt} />
							</div>	

							<Footer />	
						
						</div>
					</div>


				</div>				
			</section>	
		
	)
}

export default Index