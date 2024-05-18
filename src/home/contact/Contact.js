import React from 'react';
import ContactForm from './ContactForm';

function Contact() {
	return (
		<div
			className='contact py-5'
			id='contact'
		>
			<div className='container py-5 text-center'>
				<div className='container row'>
					<div className='col-5 d-none d-lg-block align-self-center px-5'></div>
					<div className='col-lg-12'>
						<h2 className='display-2 mb-5 mt-5 text-center'>Get In Touch!</h2>
						<p
							style={{
								fontFamily: 'Poppins',
								color: '#333333',
							}}
						>
							Feel free to reach out! I'm eager to connect and explore
							opportunities in the software development industry. Currently
							seeking full-time roles and also open to internships to further
							develop my skills. Whether you have a specific position in mind,
							questions about my work, or just want to say hello, don't hesitate
							to contact me through LinkedIn or here. I'm looking forward to
							hearing from you!{' '}
						</p>
					</div>
				</div>
			</div>
			<ContactForm />
		</div>
	);
}

export default Contact;
