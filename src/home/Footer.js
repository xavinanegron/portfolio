import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faHeart } from '@fortawesome/free-solid-svg-icons';

function Footer() {
	return (
		<div>
			<div className='row p-4'>
				<div className=' col-lg-12 d-flex align-items-center justify-content-center'>
					<div>
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
										fontSize: '30px',
										padding: '10px',
										cursor: 'pointer',
									}}
								/>
							</a>
							<a href='mailto:your_email@example.com'>
								<FontAwesomeIcon
									icon={faEnvelope}
									style={{
										color: '#cd4662',
										fontSize: '30px',
										padding: '10px',
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
										fontSize: '30px',
										padding: '10px',
										cursor: 'pointer',
									}}
								/>
							</a>
						</div>
						<p
							className='footer-text'
							style={{
								fontSize: '20px',
								fontFamily: 'Poppins',
								color: '#333333',
								lineHeight: '40px',
								display: 'flex',
								alignItems: 'center', // Vertical alignment
								justifyContent: 'center', // Optional: Horizontal alignment
							}}
						>
							Designed and developed with{' '}
							<FontAwesomeIcon
								icon={faHeart}
								style={{
									color: '#cd4662',
									fontSize: '25px',
									padding: '10px',
									cursor: 'pointer',
								}}
							/>{' '}
							by Xavina Negron
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Footer;
