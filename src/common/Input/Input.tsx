import React from 'react';

function Input(props) {
	return (
		<>
			<label className='form-label'>{props.input.label}</label>
			<input
				type={props.input.type ? props.input.type : 'text'}
				className='form-control'
				name={props.input.name}
				placeholder={props.input.placeholder}
				onChange={props.handleChange}
			/>
		</>
	);
}

export default Input;
