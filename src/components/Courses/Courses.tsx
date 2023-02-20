import React, { useEffect, useState } from 'react';
import CourseCard from './components/CourseCard/CourseCard';
import SearchBar from './components/SearchBar/SearchBar';

function Courses({ courses, handleAddCourse }) {
	const [filteredCourse, setFilteredCourse] = useState([]);

	useEffect(() => {
		setFilteredCourse(courses);
	}, [courses]);

	const applySearch = (text: string) => {
		setFilteredCourse(
			filteredCourse.filter(
				(course) =>
					course.title.toLowerCase().includes(text.toLowerCase()) ||
					course.id.toLowerCase().includes(text.toLowerCase())
			)
		);
	};

	return (
		<>
			<SearchBar
				applySearch={applySearch}
				resetSearch={() => setFilteredCourse(courses)}
				addCourse={() => handleAddCourse()}
			></SearchBar>
			{filteredCourse.map((course) => (
				<CourseCard key={course.id} author={course}></CourseCard>
			))}
		</>
	);
}

export default Courses;
