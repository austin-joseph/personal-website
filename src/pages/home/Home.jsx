import React, { Component } from 'react';
import './Home.scss';
// import NavigationBar from './../navbar/NavigationBar.jsx';
// import resumeJson from './../../resume.json';

export default class Home extends Component {
	render() {
		return (
			<React.Fragment>
				{/* <NavigationBar /> */}
				<div id="introduction">
					<div id="info">
						<div className="title">Choose a developer who can tackle your projects</div>
						<div className="subtitle"><span className="bold">Experienced</span> in a variety of full stack technologies</div>
						<div className="subtitle"><span className="bold">Leader</span> proven effective across multiple sucessful projects </div>
						<div className="subtitle"><span className="bold">Effective</span> I have the skills ot meet your needs and your deadlines </div>
						<div className="subtitle"><span className="custom-name-color">Austin Joseph </span><span className="custom-title-color">Full-Stack Web Developer</span></div>

						<div id="button-holder">
							<div className="button">
								<a href="#projects">View My Work</a>
							</div>
							<div className="button">
								<a href="#about">See My Credientials</a>
							</div>
							{/* <div className="button">
								<a href="#education">My Credientials</a>
							</div> */}
						</div>
					</div>
				</div>

				{/* Center title
				Make title bigger
				Center buttons and make them smaller
				Make description smaller */}

				<div id="projects">
					<div id="title">What I Have Worked On</div>

					<div className="section-title">Projects Ive Lead</div>
					<div className="project-section">
						<div className="element left">
							<div className="title underline">Raising The Bar</div>
							<div className="subtitle">A web based bartender training and testing application</div>
							<div className="body"><a href="">Project Website</a><a href="">Github</a> </div>
						</div>
						<div className="element right">
							<div className="title underline">Raising The Bar</div>
							<div className="subtitle">A web based bartender training and testing application</div>
							<div className="body"><a href="">Project Website</a><a href="">Github</a> </div>
						</div>
					</div>

					<div className="section-title">Projects Ive Contributed To</div>
					<div className="project-section">
						<div className="element left">
							<div className="title underline">Raising The Bar</div>
							<div className="subtitle">A web based bartender training and testing application</div>
							<div className="body"><a href="">Project Website</a><a href="">Github</a> </div>
						</div>
						<div className="element right">
							<div className="title underline">Raising The Bar</div>
							<div className="subtitle">A web based bartender training and testing application</div>
							<div className="body"><a href="">Project Website</a><a href="">Github</a> </div>
						</div>
					</div>
				</div>
				<div id="about">
					<div id="title">My Credientials</div>
					<div id="about-body">
						<div id="left-side">
							<div id="profile-image"><img src="profile256.png" alt="profile" /></div>
							<div id="bottom-text">austinobejo@gmail.com</div>
						</div>

						<div id="description">
							I am a tech savvy hardworking individual focused on creating real life solutions and achieving programming excellence through dedication and teamwork
						</div>
					</div>
					<div className="highlights" id="highlights-1">
						<div>
							{/* <div className={"highlight-img"}>Fast</div> */}
							<div className={"highlight-title"}>Education</div>
							<div className={"highlight-description"}>Bachelors of Science in Computer Science </div>
							<div className={"highlight-description"}>From Stony Brook University</div>
							<div className={"highlight-description"}>Graduated May 2020</div>
							<div className={"highlight-description"}> Machine Learning | Computer Security | Software Development | Computer Networks | Principles of Database Systems | Data Structures | Analysis of Algorithms </div>
						</div>
						<div>
							<div className={"highlight-title"}>Leadership</div>
							<div className={"highlight-description"}>5 years of expereince leading 2- 4 person developement teams</div>
						</div>
					</div>
					<div className="highlights" id="highlights-2">
						<div>
							<div className={"highlight-title"}>Skills</div>
							<div className={"highlight-description"}>Programming in: Java, Python, Javascript, HTML5, CSS/SCSS, Spring Boot/MVC, Flask</div>
							<div className={"highlight-description"}>Website Design: React Js, Bootstrap, REST Api Integration, jQuery</div>
							<div className={"highlight-description"}>Team Integration: Github, Bitbucket and Trello</div>
						</div>
						<div>
							<div className={"highlight-title"}>Title Card 4</div>
							<div className={"highlight-description"}>Websites don't have to be static, I love making pages come to life. </div>
						</div>
						<div>
							<div className={"highlight-title"}>Title Card 4</div>
							<div className={"highlight-description"}>Websites don't have to be static, I love making pages come to life. </div>
						</div>
						<div>
							<div className={"highlight-title"}>Title Card 4</div>
							<div className={"highlight-description"}>Websites don't have to be static, I love making pages come to life. </div>
						</div>
					</div>
				</div>
			</React.Fragment >
		);
	}
}
