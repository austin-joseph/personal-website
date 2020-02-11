import React, { Component } from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';
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
							<div className={"textCenter"}>
								<div id={"mission-description"}>
									{resumeJson["mission"]}
								</div>
							</div>
						</Col>
					</Row>
					<Row>
						<Col xs={12} md={6} >
							<div className={"textLeftUnlessSmall"}>
								<div id={"education-title"}>
									Education
								</div>
								<div id={"education-description"}>
									{
										resumeJson["education"].map((item) => {
											return (<div>{item} <br /></div>);
										})
									}
								</div>
							</div>
						</Col>

						<Col xs={12} md={6} >
							<div className={"textRightUnlessSmall"}>
								<div id={"course-title"}>
									Course Work
									</div>
								<div id={"course-description"}>
									{
										resumeJson["courses"].map((item) => {
											return (<div>{item} <br /></div>);
										})
									}
								</div>
							</div>
						</Col>
					</Row>
				</div>
				<div className={"line"} />
				<div id={"level1"} className={"center"}>
					<Row >
						<Col xs={12} xl={6}>
							<div id={"skills"} className={"center"}>
								Skills
							</div>
							<div className={"cards-center"}>
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
						<Col xs={12} xl={6}>
							<div id={"skills"}>
								Projects
							</div>
							<div className={"cards-center"}>
								<Row >
									{resumeJson["projects"].map((item) => {
										return (
											<Col xs={12} sm={6}>
												<Card>
													<Card.Body>
														<Card.Title>{item["title"]}</Card.Title>
														<Card.Subtitle>
															{
																item["desc"].map((subitem) => {
																	return (<div>{subitem} <br /></div>);
																})
															}
															<a href={item["details"]} >
																<Button >
																	Details
																</Button>
															</a>
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
				<div className={"line"} />
			</React.Fragment>
		);
	}
}
