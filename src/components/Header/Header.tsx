import React from 'react';
import Button from 'src/common/Button/Button';
import Logo from './components/Logo/Logo';

function Header() {
	const logo = {
		url: 'https://upload.wikimedia.org/wikipedia/en/thumb/2/2c/One_Piece_Logo.svg/800px-One_Piece_Logo.svg.png',
		name: 'One Piece',
	};

	const logoutButton = {
		text: 'Logout',
	};

	return (
		<>
			<div className='d-flex flex-column flex-md-row align-items-center p-3 mb-4 border-bottom'>
				<a
					href='/'
					className='d-flex align-items-center text-dark text-decoration-none'
				>
					<Logo logo={logo}></Logo>
				</a>

				<nav className='d-inline-flex mt-2 mt-md-0 ms-md-auto'>
					<a className='me-3 py-2 text-dark text-decoration-none'>Farman</a>
					<Button button={logoutButton}></Button>
				</nav>
			</div>
		</>
	);
}

export default Header;
