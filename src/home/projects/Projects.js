import React, { useState } from 'react';
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

	const handleDemoClick = (demoLink) => {
		window.open(demoLink, '_blank');
	};

	const handleGithubClick = (githubLink) => {
		window.open(githubLink, '_blank');
	};

	return (
		<div
			className='projects py-5 d-flex'
			id='projects'
		>
			<div
				className='container'
				style={{ maxWidth: '1050px' }}
			>
				<h2
					className='display-2 py-5 mt-5 ml-5 text-start'
					style={{
						color: '#cd4662',
						fontWeight: '500',
						fontFamily: 'BrotherSignature',
						overflowY: 'hidden',
					}}
				>
					Some of my Work!
				</h2>
				<div className='row'>
					{projects.map((project) => (
						<div
							className='col-lg-6'
							key={project.id}
						>
							<div className='project'>
								<div className='project-container'>
									<div className='image-container'>
										<img
											src={project.imageUrl}
											alt={project.title}
											style={{
												maxWidth: '100%',
												height: 'auto',
												display: 'block',
											}}
										/>
									</div>
									<h3
										className='project-title pt-4 text-center'
										style={{
											color: '#333333',
											fontFamily: 'Poppins',
											overflowY: 'hidden',
										}}
									>
										{project.title}
									</h3>

									<p
										className='project-description pt-3'
										style={{
											fontSize: '17px',
											fontFamily: 'Poppins',
											fontWeight: 300,
											color: '#333333',
											lineHeight: '28px',
											textAlign: 'center',
										}}
									>
										{project.description}
									</p>
									<div className='tools d-flex justify-content-center mb-3'>
										{project.tools.map((tool, index) => (
											<span
												key={index}
												className='tool-icon mr-4'
											>
												{renderToolIcon(tool)}
											</span>
										))}
									</div>
									<div className='d-flex justify-content-center'>
										<button
											className='btn custom-btn m-2'
											style={{
												maxWidth: '150px',
												color: '#fafafa',
												backgroundColor: '#e58c9e',
												fontSize: '18px',
												cursor: 'pointer',
												borderRadius: '0',
											}}
											onClick={() => handleDemoClick(project.demoLink)}
										>
											Live Demo
										</button>
										<button
											className='btn custom-btn ml-2 m-2'
											style={{
												maxWidth: '150px',
												color: '#fafafa',
												backgroundColor: '#e58c9e',
												fontSize: '18px',
												cursor: 'pointer',
												borderRadius: '0',
											}}
											onClick={() => handleGithubClick(project.githubLink)}
										>
											View Code <FontAwesomeIcon icon={faGithub} />
										</button>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default Projects;
