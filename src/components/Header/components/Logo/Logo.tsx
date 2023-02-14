import React from 'react';

function Logo(props) {
	return (
		<img
			className='rounded'
			src={props.logo.url}
			alt={props.logo.name}
			width='16%'
			height='auto'
		/>
	);
}

export default Logo;
