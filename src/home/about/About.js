import React from 'react';
import DataSkills from './DataSkills.json';

function About() {
	return (
		<div className='about py-5'>
			<div className='container py-5 text-center'>
				<div className='container row'>
					<div className='col-5 d-none d-lg-block align-self-center px-5'>
						<img
							className='border border-secondary rounded-circle'
							src='/public/profilepic.png'
							alt='profile'
							width={375}
							height={375}
						/>
					</div>
					<div className='col-lg-7'>
						<h2 className='display-3 mb-5 text-start'>
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
							Greetings, I'm Xavina, a graduate of Nucamp's Full Stack Web and
							Mobile App Development bootcamp. I'm currently pursuing a BAS
							degree in Computing Technology and Software Development. Outside
							of coding, I find joy in painting, exploring the great outdoors
							with my miniature australian shepherd and staying active. <br />
							Detail-oriented and with a boundless curiosity, I see software
							development as the perfect canvas for my skills. It's where I
							thrive on creative problem-solving and relish the chance to dive
							into challenges headfirst.. Thanks for visiting my portfolio! Feel
							free to explore further!
						</p>
						<p className='lead text-start'>
							<button
								className='custom-btn btn mb-5 mx-1 outline'
								href='#about'
								style={{
									marginTop: '2rem',
									color: '#8a53b2',
									fontSize: '1.5rem',
								}}
							>
								Download Resume
							</button>
						</p>
					</div>
				</div>
				<hr className='decorative-line' />
			</div>
			<div className='skills col-lg-12'>
				<h2 className='section-title display-3 py-5 text-start'>
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

// className =
// 	'hover:transition hover:ease-in-out hover:scale-110 hover:duration-300';
