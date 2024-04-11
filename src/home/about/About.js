import React from 'react';
import DataSkills from './DataSkills.json';

function About() {
	return (
		<div className='about py-3 m-0'>
			<div className='container py-5 mt-5 text-center'>
				<div className='container row'>
					<div className='col-5 d-none d-lg-block align-self-center'>
						<img
							className='border border-secondary rounded-circle'
							src=''
							alt='profile'
							width={375}
							height={375}
						/>
					</div>
					<div className='col-lg-7'>
						<h2 className='display-4 mb-5 text-center'>About Me</h2>
						<p className='lead text-center'>
							Hello, I'm Xavina, a graduate of Nucamp's Full Stack Web and
							Mobile App Development bootcamp. Currently pursuing a BAS degree
							in Computing Technology and Software Development. Outside of
							coding, I find joy in painting, taking my miniature aussie out for
							walks and staying active. I'm a detail-oriented and open-minded
							individual. Software development is where I can best utilize these
							qualities, allowing me to think creatively and tackle challenges
							head-on. Thanks for visiting my portfolio! Feel free to explore
							further!
						</p>
						<p className='lead text-center'>
							<button
								className='custom-btn btn mb-5'
								href='#about'
								style={{
									marginTop: '2rem',
									color: '#fafafa',
									backgroundColor: 'black',
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
				<h2 className='section-title display-4 mb-5 text-center'>Skills</h2>
				<div className='skills-box'>
					{DataSkills.map((skill) => {
						return (
							<div
								className='skill-card'
								key={skill.id}
							>
								<img
									className='skill-icon'
									src={`${process.env.PUBLIC_URL}${skill.img}`}
									alt='skill icon'
								/>
								<p className='skill-name'>{skill.name}</p>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}

export default About;
