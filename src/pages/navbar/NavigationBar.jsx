import React, { Component } from 'react';
import './NavigationBar.scss';

export default class NavigationBar extends Component {
	render() {
		return (
			<React.Fragment>
				<div id={"navbar"}>
					<div className="item">
						{/* <div id={"title"}>
							<div id="top">Austin Joseph</div>
							<div id="bottom">Full Stack Developer</div>
						</div> */}
					</div>
					<div className="item">Home</div>
					<div className="item">About Me</div>
					<div className="item">My Projects</div>
					<div className="item"> My Resume</div>
				</div>
			</React.Fragment>
		)
	}
}
