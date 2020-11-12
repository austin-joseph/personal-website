import React, { Component } from 'react';
import './Home.scss';
// import NavigationBar from './../navbar/NavigationBar.jsx';
import websiteData from './../../website-data.json';
import ctaImage from './../images/cta-background.png';
import profilePhoto from './../images/profile512.png';

export default class Home extends Component {
	constructor() {
		super();
		this.state = {
			projectSelected: null
		}
		this.changeSelectedProject = this.changeSelectedProject.bind(this);
	}

	changeSelectedProject(index) {
		console.log(index)
		if (this.state.projectSelected === index) {
			this.setState({ projectSelected: null });
		} else {
			this.setState({ projectSelected: index });
		}
	}
	render() {
		let classThis = this;
		return (
			<React.Fragment>
				{/* <NavigationBar /> */}
				<div id="home">
					<div id="introduction" style={{ backgroundImage: `url( ${ctaImage})` }}>
						<div id="centerText">
							<div className="text">My name is<br /><span>Austin Joseph</span></div>
							<div className="text">I am a <span>Full Stack Developer</span></div>
						</div>
					</div>
					<div id="about">
						{/* <div id="title">About Me</div> */}
						<div id="about-body">
							{/* <div id="about-body" className="sizeTest"> */}
							<div id="left">
								<img src={profilePhoto} />
								{/* <div id="buttons">
									<div className="button">Github</div>
									<div className="button">LinkedIn</div>
									<div className="button">Resume</div>
								</div> */}

								<div className="desc">
									I am a tech savvy, hardworking individual focused on creating real life solutions and achieving programming excellence through dedication and teamwork
								</div>
							</div>
							<div id="right">
								{
									websiteData.highlights.map((highlight) => {
										return (
											<div>
												<div className="title">{highlight.title}</div>
												{
													highlight.description.map((descLine, index) => {
														return <div className="desc">{descLine}</div>
													})
												}
											</div>
										);
									})
								}
								{/* <div>
									<div className="title">Education</div>
									<div className="desc">Bachelor of Science in Computer Science</div>
									<div className="desc">Stony Brook University, Stony Brook, New York</div>
								</div> */}
							</div>
						</div>
					</div>

					<div id="projects">
						<div id="project-list">
							{
								websiteData.projects.map((project, index) => {
									return (
										<div className={"element"} >
											<div className="title underline" onClick={classThis.changeSelectedProject.bind(classThis, index)}>{project.title}</div>
											<div className={"element-body " + (classThis.state.projectSelected === index ? "shown" : "hidden")}>
												{
													project.description.map((descLine) => {
														return <div className="subtitle">{descLine}</div>
													})
												}
												<div className="buttons">
													{project.details != null && project.details != "" ? (<div className="button"><a href={project.details}>Details</a></div>) : (<div />)}
													{project.details != null && project.github != "" ? (<div className="button"><a href={project.github}>Github</a></div>) : (<div />)}
													{project.details != null && project.deployment != "" ? (<div className="button"><a href={project.deployment}>Try It Out</a></div>) : (<div />)}
												</div>
											</div>
										</div>
									);
								})
							}
						</div>
					</div>
				</div>

			</React.Fragment >
		);
	}
}
