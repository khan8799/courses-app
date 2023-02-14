import React, { useEffect, useState } from 'react';
import Button from 'src/common/Button/Button';
import Input from 'src/common/Input/Input';
import { mockedAuthorsList } from 'src/constants';

function CreateCourse() {
	const [authors, setAuthors] = useState([]);

	useEffect(() => {
		setAuthors(mockedAuthorsList);
	}, []);

	const saveButton = {
		text: 'Create Course',
	};

	const createAuthorButton = {
		text: 'Create Author',
	};

	const addAuthor = {
		text: 'Add Author',
	};

	const titleInput = {
		label: 'Title',
		placeholder: 'Enter Title',
	};

	const authorNameInput = {
		label: 'Author Name',
		placeholder: 'Enter Author Name',
	};

	const durationInput = {
		label: 'Duration',
		placeholder: 'Enter Duration in minutes',
	};

	return (
		<>
			<div className='row justify-content-between mb-4 px-4'>
				<div className='col-md-4'>
					<Input input={titleInput}></Input>
				</div>
				<div className='col-md-4 text-end'>
					<Button button={saveButton}></Button>
				</div>
			</div>

			<div className='row mb-4 px-4'>
				<div className='col-md-12'>
					<label className='form-label'>Description</label>
					<textarea
						className='form-control'
						id='exampleFormControlTextarea1'
						rows={4}
					></textarea>
				</div>
			</div>

			<div className='row p-4 mb-4'>
				<div className='col-md-6'>
					<div className='mb-4'>
						<h3 className='text-center'>Add Author</h3>
						<div>
							<Input input={authorNameInput}></Input>
						</div>

						<div className='mt-3 text-center'>
							<Button button={createAuthorButton}></Button>
						</div>
					</div>
					<div>
						<h3 className=' text-center'>Duration</h3>
						<div>
							<Input input={durationInput}></Input>
						</div>
					</div>
				</div>

				<div className='col-md-6'>
					<div>
						<h3 className='text-center'>Authors</h3>

						{authors.map((author) => (
							<div key={author.id} className='row justify-content-around mt-4'>
								<div className='col-auto text-left'>
									<label>{author.name}</label>
								</div>
								<div className='col-auto'>
									<Button button={addAuthor}></Button>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</>
	);
}

export default CreateCourse;
