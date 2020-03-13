import React, { Component } from 'react';
import './NavigationBar.scss';

export default class NavigationBar extends Component {
	render() {
		return (
			<React.Fragment>
				<div id={"navbar"}>
					<div className="item">
						<div id={"title"}>
							<div id="top">Austin Joseph</div>
							<div id="bottom">Full Stack Developer</div>
						</div>
					</div>
					<div className="item">
						Portfolio
						</div>
					<div className="item">
						Resume
						</div>
					<div className="item">
						Contact
						</div>
				</div>
			</React.Fragment>
		)
	}
}
