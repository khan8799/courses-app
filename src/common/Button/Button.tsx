import React from 'react';

function Button(props) {
	return (
		<button
			className='me-3 py-2 btn btn-outline-primary'
			type={props.button.type ? props.button.type : 'button'}
			onClick={() => props.handleClick()}
		>
			{props.button.text}
		</button>
	);
}

export default Button;
