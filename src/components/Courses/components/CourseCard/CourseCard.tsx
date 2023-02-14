import React from 'react';
import Button from 'src/common/Button/Button';

function CourseCard(props) {
	const showCourseButton = {
		text: 'Show Course',
	};
	return (
		<>
			<div className='row border border-primary mb-4'>
				<div className='col-md-7 p-4'>
					<h1 className='mb-4'>{props.author.title}</h1>
					<p>{props.author.description}</p>
				</div>
				<div className='col-md-5 p-4'>
					<ul className='list-unstyled'>
						<li className='mb-2'>
							<strong>Authors: </strong>
							{props.author.authorNames}
						</li>
						<li className='mb-2'>
							<strong>Duration: </strong>
							{props.author.duration}
						</li>
						<li className='mb-2'>
							<strong>Created: </strong>
							{props.author.creationDate}
						</li>
					</ul>
					<div className='text-center'>
						<Button button={showCourseButton}></Button>
					</div>
				</div>
			</div>
		</>
	);
}

export default CourseCard;
