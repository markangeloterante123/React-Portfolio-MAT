
import React, { useState } from 'react'

import Index from './components/pages/Index'

const Data = () => {
	
	const information = {
		info1 :{
			name: 'WEB-DEVELOPER',
			content:"Hi, I'm Mark and I am a web developer and looking for a job as a  "+
					"ReactJS developer I don't have any work experience but I have lots of"+
					"pet projects on my Github. I am also familiar with Php, MVC- Codeigniter, "+
					"Bootstrap, Jquery-Ajax, MySql, JS, CSS/SASS, and HTML."+
					"I'm hoping to have real experience to gain more knowledge,"+
					"and experience as a Front-end web developer and soon grow as a "+
					"Fullstack developer and To Achieve something I must continue to learn.",
			src:'./images/portfolio.png',		  
			alt:'Images'
		},
		info2 :{
			name: 'ABOUT',
			title1:'EDUCATION',
			content1:'-Course: Bachelor of Science in Information Technology 2017-2022',
			content2:'-Course: Bachelor of Elementary Education 2011-2013 Undergraduate',
			content3:'-Secondary: General Mariano Alvarez Technical High School 2007-2011',
			title2:'WEB DEVELOPMENT EXPERIENCE',
			content4:'-No Work Experience in Programmning Industry',
			content5:'-1 Year experience Pet Projects',
			title3:'WORK EXPERIENCE',
			content6:'Fravinz Enterprises Inc. July 2013 - May 2017',
			content7:'-BOSH Safety Officer 2015-2017',
			content8:'-Emergency Response Team 2015-2017',
			content9:'-Toolkeeper / Document Encoder -2017',
			src:'./images/skills.png',
			alt:'Images'		  
		},
		info3 :{
			name:'SKILLS',
			src:'./images/skill.png',
			img:([
				{id:9, src:'../images/GIT.png', star:1, learn:9, alt:'GIT', yr:'April, 2021 - Present'},
				{id:0, src:'../images/react-1.svg', star:3, learn:7, alt:'ReactJS', yr:'April, 2021 - Present'},
				{id:1, src:'../images/js.png', star:2, learn:8, alt:'Javascript', yr:'Dec, 2020 - Present'},
				{id:3, src:'../images/ajax.png', star:4, learn:6, alt:'JQUERY-AJAX', yr:'June, 2020 - Present'},
				{id:4, src:'../images/bootstrap4.png', star:4, learn:6, alt:'Bootstrap', yr:'April, 2020 - Present'},
				{id:5, src:'../images/CSS.png', star:3, learn:7, alt:'CSS/SASS', yr:'April, 2020 - Present'},
				{id:6, src:'../images/code.png', star:4, learn:6, alt:'CodeIgniter', yr:'March, 2020 - Present'},
				{id:7, src:'../images/xamp.png', star:4, learn:6, alt:'MySQL', yr:'March, 2020 - Present' },
				{id:8, src:'../images/php.png', star:4, learn:6, alt:'PHP', yr:'March, 2020 - Present'},
				{id:7, src:'../images/html.png', star:4, learn:6, alt: 'HTML', yr:'March, 2020 - Present'}
			])		  
		},
		info4 :{
			src:'./images/office.png',		  
			alt:'Images'
		},
		info5 :{
			src:'./images/goal.png',
			alt:'Images'		  
		}
	}


	const [project, setProject] = useState ([
		{id:1, img: "../motor/in.png", proj: "INVENTORY-MOTOR", descrip:"FUNCTION: POINT OF SALES"},
		{id:2, img: "../motor/in1.png", proj: "INVENTORY-MOTOR", descrip:"FUNCTION: DISPLAY ITEM CATEGORY" },
		{id:3,img: "../motor/in2.png", proj: "INVENTORY-MOTOR", descrip:"FUNCTION: INVENTORY RECORDS"},
		{id:4,img: "../motor/in3.png", proj: "INVENTORY-MOTOR", descrip:"FUNCTION: POS COMPUTATION"},
		{id:5,img: "../motor/in4.png", proj: "INVENTORY-MOTOR", descrip:"FUNCTION: PRINTABLE RECIEPT"},
		{id:6,img: "../motor/in5.png", proj: "INVENTORY-MOTOR", descrip:"FUNCTION: ACCOUNT MANAGEMENT-AJAX"},
		{id:7,img: "../motor/in6.png", proj: "INVENTORY-MOTOR", descrip:"FUNCTION: LANDING PAGES"},
		{id:8,img: "../motor/in7.png", proj: "INVENTORY-MOTOR", descrip:"FUNCTION: MODAL ADD CATEGORY"},
		{id:9,img: "../motor/in8.png", proj: "INVENTORY-MOTOR", descrip:"FUNCTION: RETURN ITEM /REPLACEMENT-AJAX "},
		{id:10, img: "../beu/be1.png", proj: "BEU-INVENTORY", descrip:"FUNCTION: POS-AJAX"},
		{id:11, img: "../beu/be2.png", proj: "BEU-INVENTORY", descrip:"FUNCTION: POS-AJAX"},
		{id:13, img: "../beu/be3.png", proj: "BEU-INVENTORY", descrip:"FUNCTION: POS-AJAX"},
		{id:14, img: "../beu/be4.png", proj: "BEU-INVENTORY", descrip:"FUNCTION: MANAGE ITEM INFORMATION-AJAX"},
		{id:15, img: "../beu/be5.png", proj: "BEU-INVENTORY", descrip:"FUNCTION: ITEM SALES RECORDS-AJAX"},
		{id:16, img: "../beu/be6.png", proj: "BEU-INVENTORY", descrip:"FUNCTION: ADD NEW ITEM"},
		{id:17, img: "../beu/be7.png", proj: "BEU-INVENTORY", descrip:"FUNCTION: POS RECORDS-AJAX"},
		{id:18, img: "../beu/be8.png", proj: "BEU-INVENTORY", descrip:"FUNCTION: PRINTABLE RECORDS-AJAX"},
		{id:19, img: "../beu/be9.png", proj: "BEU-INVENTORY", descrip:"FUNCTION: SALES INVOICE RECORDS-AJAX"},
		{id:20, img: "../beu/be10.png", proj: "BEU-INVENTORY", descrip:"FUNCTION: RE-SELLERS RECORDS-AJAX"},
		{id:21, img: "../beu/be11.png", proj: "BEU-INVENTORY", descrip:"FUNCTION: CHARTJS-AJAX"},
		{id:22, img: "../beu/be12.png", proj: "BEU-INVENTORY", descrip:"FUNCTION: CHARTJS-AJAX"},
		{id:23, img: "../beu/be13.png", proj: "BEU-INVENTORY", descrip:"FUNCTION: ACCOUNT MANAGEMENT-AJAX"},
		{id:24,img: "../lms/lm.png", proj: "LMS",descrip:"FUNCTION: LEARNING MATERIALS MANAGEMENT-AJAX"},
		{id:25,img: "../lms/lm1.png", proj: "LMS",descrip:"FUNCTION: CHARTJS-AJAX"},
		{id:26,img: "../lms/lm2.png", proj: "LMS",descrip:"FUNCTION: STUDENT CONCERNS-AJAX"},
		{id:27,img: "../lms/lm3.png", proj: "LMS",descrip:"FUNCTION: STUDENT RECORDS, INFORMATION & ACC. MANAGEMENT-AJAX"},
		{id:28,img: "../lms/lm4.png", proj: "LMS",descrip:"FUNCTION: PRINTABLE GRADES-AJAX"},
		{id:29,img: "../lms/lm5.png", proj: "LMS",descrip:"FUNCTION: REGISTRAR MONITORING LIST-AJAX"},
		{id:30,img: "../lms/lm6.png", proj: "LMS",descrip:"FUNCTION: INSTRUCTORS CLASS VIEW MODE-AJAX"},
		{id:31,img: "../lms/lm7.png", proj: "LMS",descrip:"FUNCTION: SWAL ALERT-AJAX"},
		{id:32,img: "../lms/lm8.png", proj: "LMS",descrip:"FUNCTION: SIDE BAR AND CALENDAR"},
		{id:33,img: "../lms/lm9.png", proj: "LMS",descrip:"FUNCTION: OPEN CLASSROOM-AJAX"},
		{id:34,img: "../lms/lm10.png", proj: "LMS",descrip:"FUNCTION: GALLERY"},
		{id:35,img: "../lms/lm11.png", proj: "LMS",descrip:"FUNCTION: SHARABLE LEARNING MATERIALS-AJAX"},
		{id:36,img: "../lms/lm12.png", proj: "LMS",descrip:"FUNCTION: LEARNING MATERIALS"},
		{id:37,img: "../lms/lm13.png", proj: "LMS",descrip:"FUNCTION: VIEW SUBMITTED RECORDS-AJAX"},
		{id:38,img: "../lms/lm14.png", proj: "LMS",descrip:"FUNCTION: VIEW SUBMITTED RECORDS-AJAX"},
		{id:39,img: "../lms/lm15.png", proj: "LMS",descrip:"FUNCTION: VIEW SUBMITTED RECORS-AJAX"},
		{id:40,img: "../lms/lm16.png", proj: "LMS",descrip:"FUNCTION: UPLOAD ACTIVITY-AJAX"},
		{id:41,img: "../lms/lm17.png", proj: "LMS",descrip:"FUNCTION: JQUERY SHOW/HIDE DIV"},
		{id:42,img: "../lms/lm18.png", proj: "LMS",descrip:"FUNCTION: JQUERY SHOW/HIDE DIV"},
		{id:43,img: "../lms/lm19.png", proj: "LMS",descrip:"FUNCTION: GRADING SYSTEM-AJAX"},
		{id:44,img: "../lms/lm20.png", proj: "LMS",descrip:"FUNCTION: VIEW RECORDS-AJAX"},
		{id:45,img: "../lms/lm21.png", proj: "LMS",descrip:"FUNCTION: UPLOAD OR TAKE ONLINE"}
	])

	return (
		<Index information={information} project={project} />
	)
}

export default Data