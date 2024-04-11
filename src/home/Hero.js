import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

function Hero() {
	return (
		<div
			className='hero'
			style={{
				background: 'linear-gradient(to right, #998f 50%, #fafafa 50%)',
			}}
		>
			<div className='row'>
				<div className='col-lg-6 d-flex align-items-center'>
					<div className='title-wrapper'>
						<div className='title-text'>
							<h1>Xavina</h1>
							<p> Web Developer</p>
						</div>
					</div>
				</div>
				<div className='col-lg-6 d-flex align-items-center'>
					<div className='welcome-message'>
						<p>
							Welcome to my portfolio! Take a look around and get to know the
							projects I've been tinkering with. From code to design, I've
							poured my heart and soul into each one. Feel free to reach out if
							you have any questions or just want to chat about all things tech!
						</p>
						<div className='icons'>
							<FontAwesomeIcon
								icon={faLinkedin}
								style={{ color: 'black', fontSize: '40px', padding: '15px' }}
							/>
							<FontAwesomeIcon
								icon={faEnvelope}
								style={{ color: 'black', fontSize: '40px', padding: '15px' }}
							/>
							<FontAwesomeIcon
								icon={faGithub}
								style={{ color: 'black', fontSize: '40px', padding: '15px' }}
							/>
						</div>
						<p className='lead text-center'>
							<button
								className='custom-btn btn'
								href='#about'
								style={{
									marginTop: '2rem',
									color: '#fafafa',
									backgroundColor: 'black',
									fontSize: '1.5rem',
								}}
							>
								More About Me
							</button>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Hero;
