import React from 'react';

function Input(props) {
	return (
		<>
			<label className='form-label'>{props.input.label}</label>
			<input
				type='text'
				className='form-control'
				name={props.input.name}
				placeholder={props.input.placeholder}
			/>
		</>
	);
}

export default Input;
