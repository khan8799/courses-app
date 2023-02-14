import React, { useRef } from 'react';
import Button from 'src/common/Button/Button';

function SearchBar({ applySearch, resetSearch, addCourse }) {
	const inputRef = useRef(null);
	const searchButton = {
		text: 'Search',
		color: 'primary',
	};

	const addCourseButton = {
		text: 'Add new course',
		color: 'success',
	};

	const handleSearchInput = () => {
		applySearch(inputRef.current.value);
	};

	const handleChangeInput = () => {
		resetSearch();
	};

	const handleAddCourse = () => {
		addCourse();
	};

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
							onChange={handleChangeInput}
						/>
						<Button
							button={searchButton}
							handleClick={handleSearchInput}
						></Button>
					</div>
					<Button
						button={addCourseButton}
						handleClick={handleAddCourse}
					></Button>
				</div>
			</nav>
		</>
	);
}

export default SearchBar;
