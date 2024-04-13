import React from 'react';
import DataSkills from './DataSkills.json';

function About() {
	return (
		<div className='about py-3 m-0'>
			<div className='container py-5 text-center'>
				<div className='container row'>
					<div className='col-5 d-none d-lg-block align-self-center'>
						<img
							className='border border-secondary rounded-circle'
							src='/assets/'
							alt='profile'
							width={375}
							height={375}
						/>
					</div>
					<div className='col-lg-7'>
						<h2 className='display-4 mb-5 text-center'>About Me</h2>
						<p
							className='about-info lead text-center'
							style={{
								fontSize: '20px',
								fontFamily: 'Poppins',
								color: 'black',
								lineHeight: '40px',
							}}
						>
							Hello, I'm Xavina, a graduate of Nucamp's Full Stack Web and
							Mobile App Development bootcamp. I'm currently pursuing a BAS
							degree in Computing Technology and Software Development. Outside
							of coding, I find joy in painting, taking my miniature aussie out
							for walks and staying active. I'm a detail-oriented and
							open-minded individual. Software development is where I can best
							utilize these qualities, allowing me to think creatively and
							tackle challenges head-on. Thanks for visiting my portfolio! Feel
							free to explore further!
						</p>
						<p className='lead text-center'>
							<button
								className='custom-btn btn mb-5'
								href='#about'
								style={{
									marginTop: '2rem',
									color: '#fafafa',
									backgroundColor: '#cd7676',
									fontSize: '1.5rem',
								}}
							>
								Download Resume
							</button>
						</p>
					</div>
				</div>
			</div>
			<div className='skills mt-5 py-5 col-lg-12'>
				<h2 className='section-title display-4 mb-5 mt-5 text-start'>
					My Toolkit
				</h2>
				<div className='d-flex justify-content-center'>
					<div className='skills-box '>
						{DataSkills.map((skill) => {
							return (
								<div
									className='mb-4 '
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
												fontSize: '20px',
												fontFamily: 'Poppins',
												color: 'black',
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
