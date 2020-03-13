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
					<div className="title">Austin Joseph</div>
					<div className="subtitle">Full Stack Developer</div>
					<div id="button-holder">
						<a href="/portfolio">Portfolio</a>
						<a href="/resume">Resume</a>
						<a href="/contact">Contact</a>
					</div>
				</div>
				<div id="about-me">
					<img src="profile256.png" alt="profile" />
					<div>
						I am a tech savvy hardworking individual focused on creating real life solutions and achieving programming excellence through dedication and teamwork
						</div>
				</div>
				<div id="portfolio">
					<div className="element">
						<div className="title">Raising The Bar</div>
						<div className="subtitle">A web based bartender training and testing application</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}
