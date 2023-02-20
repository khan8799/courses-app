import { mockedCoursesList, mockedAuthorsList } from 'src/constants';

export const CourseList = () => {
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
