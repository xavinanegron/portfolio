import React from 'react';
import DataSkills from './DataSkills.json';

function About() {
	const resumePDF = '/NegronXavinaResume2024.pdf';
	return (
		<div
			className='about py-5'
			id='about'
		>
			<div className='container py-5 text-center'>
				<div className='container row'>
					<div className='col-lg-5 col-md-8 align-self-center px-5'>
						<img
							className='border border-secondary rounded-circle img-fluid mb-5'
							src='/myprofile.jpg'
							alt='profile'
							style={{
								objectFit: 'cover',
								width: '100%',
								height: '100%',
								maxHeight: '350px',
								maxWidth: '350px',
								borderRadius: '50%',
								overflow: 'hidden',
							}}
						/>
					</div>
					<div className='col-lg-7'>
						<h2 className='display-2 mb-5 text-start'>About me!</h2>

						<p
							className='about-info lead text-start'
							style={{
								fontFamily: 'Poppins',
								color: '#333333',
							}}
						>
							My name is Xavina, a web developer and most recently a graduate of
							Nucamp's Full Stack Web and Mobile App Development bootcamp.
							Outside of coding, I find joy in painting, taking my mini aussie out for walks and staying active. <br />
							Detail-oriented and with a boundless curiosity, I see web
							development as the perfect canvas for my skills. It's where I
							thrive on creative problem-solving and relish the chance to dive
							into challenges headfirst. Thanks for visiting my portfolio. Feel
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
