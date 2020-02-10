import React, { Component } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import './NavigationBar.scss';

export default class NavigationBar extends Component {
	render() {
		return (
			<Navbar expand="lg" className="navbar-fixed-top custom-navbar">
				<Navbar.Brand href="/">
					<href>
						<img className="logo" src={"profile-icon.png"} alt="" />
					</href>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ml-auto">
						<Nav.Item><Nav.Link href="/"> Projects </Nav.Link></Nav.Item>
						<Nav.Item><Nav.Link href="/workshop"> Resume </Nav.Link></Nav.Item>
						<Nav.Item><Nav.Link href="/creator"> Contact </Nav.Link></Nav.Item>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		)
	}
}
