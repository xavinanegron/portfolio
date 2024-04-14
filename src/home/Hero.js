import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import Typewriter from './Typewriter';
import NavbarComponent from './Navbar';

function Hero() {
	return (
		<>
			<NavbarComponent />
			<div className='hero'>
				<div className='row title-container'>
					<div className=' col-lg-12 d-flex align-items-center'>
						<div className='title-wrapper p-5'>
							<div className='title-text'>
								<h1>Hi there, I'm Xavina </h1>
								<p className='title-job'>
									Frontend Developer based in Orlando, FL
									{/* <Typewriter
									text=''
									delay={250}
									infinite
								/> */}
								</p>
								<div className='welcome-message'>
									<p
										className='message px-5'
										style={{
											fontSize: '22px',
											lineHeight: '40px',
											color: '#333333',
											fontWeight: '300',
										}}
									>
										Welcome to my portfolio! Take a look around and get to know
										the projects I've been tinkering with. From code to design,
										I've poured my heart and soul into each one. Feel free to
										reach out if you have any questions or just want to chat
										about all things tech!
									</p>
									<div className='icons text-center'>
										<FontAwesomeIcon
											icon={faLinkedin}
											style={{
												color: '#8a53b2',
												fontSize: '40px',
												padding: '15px',
											}}
										/>
										<FontAwesomeIcon
											icon={faEnvelope}
											style={{
												color: '#8a53b2',
												fontSize: '40px',
												padding: '15px',
											}}
										/>
										<FontAwesomeIcon
											icon={faGithub}
											style={{
												color: '#8a53b2',
												fontSize: '40px',
												padding: '15px',
											}}
										/>
									</div>
									{/* <p className='lead text-start'>
									<button
										className='custom-btn btn outline'
										href='#about'
										style={{
											marginTop: '2rem',
											color: 'black',
											fontSize: '1.5rem',
										}}
									>
										More About Me
									</button>
								</p> */}
								</div>
							</div>
						</div>
					</div>
					<div className='welcome-message-container col-lg-6 d-flex align-items-center'></div>
				</div>
			</div>
		</>
	);
}

export default Hero;
