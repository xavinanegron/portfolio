import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import projectsData from './ProjectsData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

function Projects() {
	const [projects, setProjects] = useState(projectsData);

	const renderToolIcon = (tool) => {
		switch (tool) {
			case 'HTML5':
				return (
					<img
						src='/icons/html.svg'
						alt='HTML5'
						style={{ width: '30px', height: '30px' }}
					/>
				);
			case 'CSS3':
				return (
					<img
						src='/icons/css.svg'
						alt='CSS3'
						style={{ width: '30px', height: '30px' }}
					/>
				);
			case 'JavaScript':
				return (
					<img
						src='/icons/javascript.svg'
						alt='JavaScript'
						style={{ width: '30px', height: '30px' }}
					/>
				);
			case 'Bootstrap':
				return (
					<img
						src='/icons/bootstrap.svg'
						alt='Bootstrap'
						style={{ width: '30px', height: '30px' }}
					/>
				);
			case 'ReactJS':
				return (
					<img
						src='/icons/react.svg'
						alt='ReactJS'
						style={{ width: '30px', height: '30px' }}
					/>
				);
			default:
				return null;
		}
	};

	return (
		<Container className='projects py-5 d-flex align-items-center justify-content-center'>
			<div style={{ maxWidth: '1200px' }}>
				<h2
					className='display-3 mb-5 mt-5 text-center'
					style={{
						color: '#820079',
						fontWeight: '500',
						fontFamily: 'Dancing Script',
					}}
				>
					Some of my work!
				</h2>
				<Row>
					{projects.map((project) => (
						<Col
							lg={6}
							key={project.id}
						>
							<div className='project'>
								<div className='project-container'>
									<img
										src={project.imageUrl}
										alt={project.title}
										style={{
											width: '400px',
											height: 'auto',
											display: 'block',
											margin: '0 auto',
											borderRadius: '8px',
										}}
									/>
									<h3
										className='project-title pt-4 text-center'
										style={{
											color: '#333333',
											fontFamily: 'Poppins',
										}}
									>
										{project.title}
									</h3>

									<p
										className='project-description pt-3'
										style={{
											fontSize: '18px',
											fontFamily: 'Poppins',
											fontWeight: 300,
											color: 'black',
											lineHeight: '30px',
											textAlign: 'justify',
										}}
									>
										{project.description}
									</p>
									<div className='tools d-flex justify-content-center mb-3'>
										{project.tools.map((tool, index) => (
											<span
												key={index}
												className='tool-icon mr-3'
											>
												{renderToolIcon(tool)}
											</span>
										))}
									</div>
									<div className='d-flex justify-content-center'>
										<Button
											className='custom-btn col-lg-6 outline'
											style={{
												maxWidth: '150px',
												color: '#8a53b2',
												fontSize: '18px',
												cursor: 'pointer',
											}}
										>
											Live Demo
										</Button>
										<Button
											className='custom-btn col-lg-6 ml-2 outline'
											style={{
												maxWidth: '150px',
												color: '#8a53b2',
												fontSize: '18px',
												cursor: 'pointer',
											}}
										>
											View Code <FontAwesomeIcon icon={faGithub} />
										</Button>
									</div>
								</div>
							</div>
						</Col>
					))}
				</Row>
			</div>
		</Container>
	);
}

export default Projects;
