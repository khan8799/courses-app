import React, { useRef } from 'react';
import Button from 'src/common/Button/Button';

function SearchBar({ applySearch, resetSearch, addCourse }) {
	const inputRef = useRef(null);

	return (
		<>
			<nav className='navbar bg-body-tertiary'>
				<div className='container-fluid'>
					<div className='d-flex'>
						<input
							ref={inputRef}
							className='form-control me-2'
							type='search'
							placeholder='Search'
							aria-label='Search'
						/>
						<Button
							button={{
								text: 'Search',
								color: 'primary',
							}}
							handleClick={() => applySearch(inputRef.current.value)}
						></Button>
						<Button
							button={{
								text: 'Clear',
								color: 'danger',
							}}
							handleClick={() => resetSearch()}
						></Button>
					</div>
					<Button
						button={{
							text: 'Add new course',
							color: 'success',
						}}
						handleClick={() => addCourse()}
					></Button>
				</div>
			</nav>
		</>
	);
}

export default SearchBar;
