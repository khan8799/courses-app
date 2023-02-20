import React, { useState } from 'react';
import './App.css';
import Courses from './components/Courses/Courses';
import CreateCourse from './components/CreateCourse/CreateCourse';
import Header from './components/Header/Header';
import { CourseList } from './helpers/formatCourses';

function App() {
	const [toggleCourseComponent, setToggleCourseComponent] = useState(true);
	const [courses, setCourses] = useState(CourseList);

	const handleFormSubmit = (data) => {
		setCourses([data, ...courses]);
		setToggleCourseComponent(!toggleCourseComponent);
	};

	return (
		<>
			<div className='container'>
				<Header></Header>

				{toggleCourseComponent ? (
					<Courses
						courses={courses}
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
