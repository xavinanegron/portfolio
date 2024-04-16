import React from 'react';
import DataSkills from './DataSkills.json';

function About() {
	const resumePDF = '/XavinaNegronPortfolio2024.pdf';
	return (
		<div
			className='about py-5'
			id='about'
		>
			<div className='container py-5 text-center'>
				<div className='container row'>
					<div className='col-5 d-none d-lg-block align-self-center px-5'>
						<img
							className='border border-secondary rounded-circle'
							src='/portfoliopic.jpg'
							alt='profile'
							width={350}
							height={350}
							style={{
								objectFit: 'cover',
								width: '100%',
								height: '100%',
								borderRadius: '50%',
							}}
						/>
					</div>
					<div className='col-lg-7'>
						<h2 className='display-2 mb-5 text-start'>
							A little bit about me!
						</h2>

						<p
							className='about-info lead text-start'
							style={{
								fontSize: '20px',
								fontFamily: 'Poppins',
								color: '#333333',
								lineHeight: '40px',
							}}
						>
							Hi there, I'm Xavina, currently pursuing a BAS degree in Computing
							Technology and Software Development and most recently a graduate
							of Nucamp's Full Stack Web and Mobile App Development bootcamp.
							Outside of coding, I find joy in painting, taking my miniature
							australian shepherd out for walks and staying active. <br />
							Detail-oriented and with a boundless curiosity, I see software
							development as the perfect canvas for my skills. It's where I
							thrive on creative problem-solving and relish the chance to dive
							into challenges headfirst. Thanks for visiting my portfolio! Feel
							free to explore further!
						</p>
						<p className='lead text-start'>
							<a
								href={resumePDF}
								target='_blank'
								rel='noreferrer'
							>
								<button
									className='custom-btn btn mb-5 mx-1'
									style={{
										marginTop: '2rem',
										color: '#fafafa',
										backgroundColor: '#cd4662',
										fontSize: '1.3rem',
										borderRadius: '0',
									}}
									onMouseOver={(e) => {
										e.currentTarget.style.backgroundColor = '#e58c9e';
										e.currentTarget.style.Color = '#cd4662';
									}}
									onMouseOut={(e) => {
										e.currentTarget.style.backgroundColor = '#cd4662';
										e.currentTarget.style.Color = '#cd4662';
									}}
								>
									Download Resume
								</button>
							</a>
						</p>
					</div>
				</div>
				<hr className='decorative-line' />
			</div>
			<div
				className='skills col-lg-12'
				id='skills'
			>
				<h2 className='section-title display-2 py-5  text-start'>
					My Tech Stack
				</h2>
				<div className='d-flex justify-content-center pb-5'>
					<div className='skills-box'>
						{DataSkills.map((skill) => {
							return (
								<div
									className=''
									key={skill.id}
								>
									<div className='skill-card'>
										<img
											className='skill-icon'
											src={`${process.env.PUBLIC_URL}${skill.img}`}
											alt='skill icon'
										/>
										<p
											className='skill-name text-center'
											style={{
												fontSize: '22px',
												color: '#333333',
												fontWeight: '300',
											}}
										>
											{skill.name}
										</p>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
}

export default About;
