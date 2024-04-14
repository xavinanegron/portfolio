import React, { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';
import { Link } from 'react-scroll';

const NavbarComponent = () => {
	const [expanded, setExpanded] = useState(false);

	return (
		<Navbar
			expanded={expanded}
			expand='lg'
			fixed='center'
			className='navbar-section p-3 fixed-top'
		>
			<Navbar.Toggle
				aria-controls='responsive-navbar-nav'
				onClick={() => setExpanded(!expanded)}
			/>
			<Navbar.Collapse id='responsive-navbar-nav'>
				<Nav className='navbar ml-auto p-3'>
					<Link
						className='links'
						to='home'
						onClick={() => setExpanded(false)}
						style={{ marginRight: '40px' }}
					>
						Home
					</Link>
					<Link
						className='links'
						to='about'
						onClick={() => setExpanded(false)}
						style={{ marginRight: '40px' }}
					>
						About
					</Link>
					<Link
						className='links'
						to='skills'
						onClick={() => setExpanded(false)}
						style={{ marginRight: '40px' }}
					>
						Skills
					</Link>
					<Link
						className='links'
						to='projects'
						onClick={() => setExpanded(false)}
						style={{ marginRight: '40px' }}
					>
						Projects
					</Link>
					<Link
						className='links'
						to='contact'
						onClick={() => setExpanded(false)}
						style={{ marginRight: '40px' }}
					>
						Contact
					</Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default NavbarComponent;
