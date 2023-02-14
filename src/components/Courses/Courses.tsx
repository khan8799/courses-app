import React, { useEffect, useState } from 'react';
import { mockedAuthorsList, mockedCoursesList } from 'src/constants';
import CourseCard from './components/CourseCard/CourseCard';
import SearchBar from './components/SearchBar/SearchBar';

function Courses({ newCourse, handleAddCourse }) {
	const [filteredCourse, setFilteredCourse] = useState([]);

	const getCourses = () => {
		return mockedCoursesList.map((course) => {
			const authorNames = [];
			course.authors.forEach((id) => {
				const result = mockedAuthorsList.find((author) => author.id === id);
				if (result) authorNames.push(result.name);
			});
			course.authorNames = authorNames.join(', ');

			return course;
		});
	};

	useEffect(() => {
		if (newCourse) setFilteredCourse([newCourse, ...getCourses()]);
		else setFilteredCourse(getCourses());
	}, []);

	const applySearch = (text) => {
		setFilteredCourse(
			filteredCourse.filter((course) =>
				course.title.toLowerCase().includes(text.toLowerCase())
			)
		);
	};

	const resetSearch = () => {
		setFilteredCourse(filteredCourse);
	};

	return (
		<>
			<SearchBar
				applySearch={applySearch}
				resetSearch={resetSearch}
				addCourse={() => handleAddCourse()}
			></SearchBar>
			{filteredCourse.map((course) => (
				<CourseCard key={course.id} author={course}></CourseCard>
			))}
		</>
	);
}

export default Courses;
