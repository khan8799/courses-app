import React, { useState } from 'react';
import './App.css';
import Courses from './components/Courses/Courses';
import CreateCourse from './components/CreateCourse/CreateCourse';
import Header from './components/Header/Header';

function App() {
	const [toggleCourseComponent, setToggleCourseComponent] = useState(true);
	const [newCourseComponent, setNewCourseComponent] = useState(null);

	const handleFormSubmit = (data) => {
		setNewCourseComponent(data);
		setToggleCourseComponent(!toggleCourseComponent);
	};

	return (
		<>
			<div className='container'>
				<Header></Header>

				{toggleCourseComponent ? (
					<Courses
						newCourse={newCourseComponent}
						handleAddCourse={() =>
							setToggleCourseComponent(!toggleCourseComponent)
						}
					></Courses>
				) : (
					<CreateCourse handleFormSubmit={handleFormSubmit}></CreateCourse>
				)}
			</div>
		</>
	);
}

export default App;
