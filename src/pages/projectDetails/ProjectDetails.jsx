import React, { Component } from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';
import './ProjectDetails.scss';
import NavigationBar from './../navbar/NavigationBar.jsx';
// import resumeJson from './../../resume.json';

export default class ProjectDetails extends Component {
	render() {
		return (
			<React.Fragment>
				<NavigationBar />
				Project details page
			</React.Fragment>
		);
	}
}
