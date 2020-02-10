import React, { Component } from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import './Home.scss';
import NavigationBar from './../navbar/NavigationBar.jsx';
import resumeJson from './../../resume.json';

export default class Home extends Component {
	render() {
		return (
			<React.Fragment>
				<NavigationBar />
				<div id={"level0"}>
					<Row >
						<Col xs={12} md={6} lg={6}>
							<div id={"title-bar"}>
								<div id={"headline"}>
									{resumeJson["headline"]}
								</div>
								<div id={"sub-headline"}>
									{resumeJson["sub-headline"]}
								</div>
							</div>
						</Col>
						<Col xs={12} md={6} lg={6}>
							<img id={["profile-img"]} src={resumeJson["profile-img"]} alt="profile" />
							{/* <div id={"contact"}>
									Email : austin@asdfasdf.com
									<br />
									Education : hello
								</div> */}
						</Col>
					</Row>
					<Row >
						<Col xs={12} >
							<div class={"textCenter"}>
								<div id={"mission-description"}>
									{resumeJson["mission"]}
								</div>
							</div>
						</Col>
					</Row>
					<Row>
						<Col xs={12} md={6} >
							<div class={"textLeftUnlessSmall"}>
								<div id={"education-title"}>
									Education
								</div>
								<div id={"education-description"}>
									<span class={"bold"}>Stony Brook University</span>, Stony Brook, NY<br />
									Expected May 2020<br />
									Bachelor of Science in Computer Science
								</div>
							</div>
						</Col>

						<Col xs={12} md={6} >
							<div class={"textRightUnlessSmall"}>
								<div id={"course-title"}>
									Course Work
									</div>
								<div id={"course-description"}>
									Machine Learning<br />
									Computer Security<br />
									Software Developement<br />
									Computer Networks<br />
									Principles of Database Systems<br />
								</div>
							</div>
						</Col>
					</Row>
				</div>
				<div class={"line"} />
				<div id={"level1"} class={"center"}>
					<Row >
						<Col xs={12} xl={3}>
							<div id={"skills"} class={"center"}>
								Skills
							</div>
							<div class={"cards-center"}>
								<Row>
									{resumeJson["skills"].map((item) => {
										return (

											<Col xs={6} sm={4} md={3}>
												<Card>
													<Card.Body>
														<Card.Title>{item["title"]}</Card.Title>
														<Card.Subtitle>
															{
																item["desc"].map((subitem) => {
																	return (<div>{subitem} <br /></div>);
																})
															}
														</Card.Subtitle>
													</Card.Body>
												</Card>
											</Col>
										)
									})}
								</Row>
							</div>
						</Col>

						<Col xs={12} xl={9}>
							<div id={"skills"}>
								Projects
							</div>
							<div class={"cards-center"}>
								<Row >
									{resumeJson["projects"].map((item) => {
										return (
											<Col xs={6} sm={4} md={3}>
												<Card>
													<Card.Body>
														<Card.Title>{item["title"]}</Card.Title>
														<Card.Subtitle>
															{
																item["desc"].map((subitem) => {
																	return (<div>{subitem} <br /></div>);
																})
															}
														</Card.Subtitle>
													</Card.Body>
												</Card>
											</Col>
										)
									})}
								</Row>
							</div>
						</Col>
					</Row>
				</div>
				<div class={"line"} />

				{/* <Container>
				</Container> */}
			</React.Fragment>
		);
	}
}
