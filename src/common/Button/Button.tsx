import React from 'react';

function Button(props) {
	return (
		<button
			className='me-3 py-2 btn btn-outline-primary'
			onClick={() => props.handleClick()}
		>
			{props.button.text}
		</button>
	);
}

export default Button;
