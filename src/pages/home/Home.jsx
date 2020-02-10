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
							<div id={"textLeft"}>
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
							<div id={"textRight"}>
								<div id={"course-title"}>
									Course Work
									</div>
								<div id={"course-description"}>
									Machine Learning<br />
									Computer Security<br />
									Software Developement<br />
									Computer Networks<br />
									Princles of Database Systems<br />
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
									<Col xs={6} sm={4} md={3}>
										<Card>
											<Card.Body>
												<Card.Title>Programming</Card.Title>
												<Card.Subtitle>
													Java<br />
													Python<br />
													Javascript<br />
													HTML5/CSS3<br />
													Spring Boot/MVC<br />
												</Card.Subtitle>
											</Card.Body>
										</Card>
									</Col>
									<Col xs={6} sm={4} md={3}>
										<Card>
											<Card.Body>
												<Card.Title>Team Integration Tools</Card.Title>
												<Card.Subtitle>
													Github<br />
													Bitbucket<br />
													Trello<br />
												</Card.Subtitle>
											</Card.Body>
										</Card>
									</Col>
									<Col xs={6} sm={4} md={3}>
										<Card>
											<Card.Body>
												<Card.Title>Database Managment</Card.Title>
												<Card.Subtitle>
													MySQL<br />
													MySQL Workbench<br />
													MongoDB<br />
													MongoDB Compass<br />
												</Card.Subtitle>
											</Card.Body>
										</Card>
									</Col>
									<Col xs={6} sm={4} md={3}>
										<Card>
											<Card.Body>
												<Card.Title>Application Deployment</Card.Title>
												<Card.Subtitle>
													AWS Elastic Beanstalk<br />
													Google Cloud App Engine<br />
													Docker<br />
													MongoDB Atlas<br />
												</Card.Subtitle>
											</Card.Body>
										</Card>
									</Col>
									{resumeJson["tiles"].map((item, index) => {
										return (<Col xs={4}>
											{/* <div class={"nametag"}>
										<div >
											{item["title"]}
										</div>
										<div>
											{item["desc"]}
										</div>
									</div> */}
											{/* <Card>
										<Card.Body>
											<Card.Title>{item["title"]}</Card.Title>
											<Card.Text>
												{item["desc"]}
											</Card.Text>
										</Card.Body>
									</Card> */}
										</Col>)
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
									<Col xs={12} lg={3}>
										<Card>
											<Card.Body>
												<Card.Title>Raising The Bar</Card.Title>
												<Card.Subtitle>
													Led a team of 4 students in designing, coding and deploying a web based bartender training application.<br />
													Utilized ReactJs,  React-Bootstrap and other React modules to create a bartop interface in which a user can create and learn about a variety.<br />
													Utilized Spring Boot MVC and MongoDB to control user accounts, user data, as well as drink recipes and metadata to allow for easy access by the front end application.<br />
													Deployed the application to AWS Elastic Beanstalk as well as MongoDB Atlas<br />
													Created a unified development environment for all team members by utilizing a VirtualBox virtual machine running Linux Mint Cinnamon as well as Docker containers to ensure consistent SDK versions and a consistent build system.<br />
												</Card.Subtitle>
											</Card.Body>
										</Card>
									</Col>

									<Col xs={12} lg={3}>
										<Card>
											<Card.Body>
												<Card.Title>Raising The Bar</Card.Title>
												<Card.Subtitle>
													Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe, voluptate? Dolor nostrum odio libero ab, doloribus nam iure nihil, soluta beatae deserunt quasi consequuntur vero quas quae qui et voluptate!
									</Card.Subtitle>
											</Card.Body>
										</Card>
									</Col>

									<Col xs={12} lg={3}>
										<Card>
											<Card.Body>
												<Card.Title>Raising The Bar</Card.Title>
												<Card.Subtitle>
													Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe, voluptate? Dolor nostrum odio libero ab, doloribus nam iure nihil, soluta beatae deserunt quasi consequuntur vero quas quae qui et voluptate!
									</Card.Subtitle>
											</Card.Body>
										</Card>
									</Col>
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
