import React, { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';

const NavbarComponent = () => {
	const [expanded, setExpanded] = useState(false);

	return (
		<Navbar
			expanded={expanded}
			expand='lg'
			variant='dark'
			fixed='center'
			className='navbar-section'
		>
			<Navbar.Toggle
				aria-controls='responsive-navbar-nav'
				onClick={() => setExpanded(!expanded)}
			/>
			<Navbar.Collapse id='responsive-navbar-nav'>
				<Nav className='navbar ml-auto px-5 p-2'>
					<Nav.Link
						href='#home'
						onClick={() => setExpanded(false)}
						style={{ marginRight: '20px' }}
					>
						Home
					</Nav.Link>
					<Nav.Link
						href='#about'
						onClick={() => setExpanded(false)}
						style={{ marginRight: '20px' }}
					>
						About
					</Nav.Link>
					<Nav.Link
						href='#skills'
						onClick={() => setExpanded(false)}
						style={{ marginRight: '20px' }}
					>
						Skills
					</Nav.Link>
					<Nav.Link
						href='#projects'
						onClick={() => setExpanded(false)}
						style={{ marginRight: '20px' }}
					>
						Projects
					</Nav.Link>
					<Nav.Link
						href='#contact'
						onClick={() => setExpanded(false)}
					>
						Contact
					</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default NavbarComponent;
