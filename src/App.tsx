import React, { useState } from 'react';
import './App.css';
import Courses from './components/Courses/Courses';
import CreateCourse from './components/CreateCourse/CreateCourse';
import Header from './components/Header/Header';

function App() {
	const [toggleCourseComponent, setToggleCourseComponent] = useState(true);

	return (
		<>
			<div className='container'>
				<Header></Header>

				{toggleCourseComponent ? (
					<Courses
						handleAddCourse={() =>
							setToggleCourseComponent(!toggleCourseComponent)
						}
					></Courses>
				) : (
					<CreateCourse></CreateCourse>
				)}
			</div>
		</>
	);
}

export default App;
