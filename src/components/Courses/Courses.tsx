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
				resetSearch={() => setFilteredCourse(getCourses())}
				addCourse={() => handleAddCourse()}
			></SearchBar>
			{filteredCourse.map((course) => (
				<CourseCard key={course.id} author={course}></CourseCard>
			))}
		</>
	);
}

export default Courses;
