import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import NavbarComponent from './Navbar';

function Hero() {
	return (
		<>
			<NavbarComponent />
			<div
				className='hero stick'
				id='home'
			>
				<div className='row title-container'>
					<div className='col-lg-12 d-flex align-items-center'>
						<div className='title-wrapper p-5'>
							<div className='title-text'>
								<h1>
									Hello,{' '}
									<span
										style={{
											fontFamily: 'BrotherSignature',
											fontSize: '4.7rem',
										}}
									>
										I'm Xavina{' '}
									</span>
								</h1>
								<p className='title-job'>
									Frontend Developer based in Orlando, FL
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
										<a
											href='https://www.linkedin.com/in/xavinanegronds/'
											target='_blank'
											rel='noopener noreferrer'
										>
											<FontAwesomeIcon
												icon={faLinkedin}
												style={{
													color: '#cd4662',
													fontSize: '40px',
													padding: '15px',
													cursor: 'pointer',
												}}
											/>
										</a>
										<a href='mailto:xavinanegron@gmail.com'>
											<FontAwesomeIcon
												icon={faEnvelope}
												style={{
													color: '#cd4662',
													fontSize: '40px',
													padding: '15px',
													cursor: 'pointer',
												}}
											/>
										</a>
										<a
											href='https://github.com/xavinanegron'
											target='_blank'
											rel='noopener noreferrer'
										>
											<FontAwesomeIcon
												icon={faGithub}
												style={{
													color: '#cd4662',
													fontSize: '40px',
													padding: '15px',
													cursor: 'pointer',
												}}
											/>
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Hero;
