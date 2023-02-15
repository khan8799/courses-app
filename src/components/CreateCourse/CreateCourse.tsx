import React, { useEffect, useRef, useState } from 'react';
import Button from 'src/common/Button/Button';
import Input from 'src/common/Input/Input';
import { mockedAuthorsList } from 'src/constants';
import { getCurrentDate } from 'src/helpers/formatCreationDate';
import { randomString } from 'src/helpers/generateRandomString';
import AuthorItem from './components/AuthorItem/AuthorItem';

function CreateCourse({ handleFormSubmit }) {
	const [authors, setAuthors] = useState([]);
	const [bookAuthors, setbookAuthors] = useState([]);
	const authorInputRef = useRef(null);

	useEffect(() => {
		setAuthors(mockedAuthorsList);
	}, []);

	const addAuthors = (bookAuthor) => {
		setbookAuthors((old) => [...old, bookAuthor]);

		setAuthors(() => authors.filter((author) => author.name !== bookAuthor));
	};

	const onCreateAuthor = () => {
		setAuthors((old) => [
			{
				name: authorInputRef.current.value,
				id: randomString(30),
			},
			...old,
		]);
	};

	const handleSubmit = async (event) => {
		try {
			event.preventDefault();

			const data = new FormData(event.currentTarget);
			const formData = {
				id: randomString(30),
				title: data.get('title'),
				duration: data.get('duration'),
				description: data.get('description'),
				authorNames: bookAuthors.join(', '),
				creationDate: getCurrentDate(),
			};
			handleFormSubmit(formData);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<>
			<form onSubmit={handleSubmit}>
				<div className='row justify-content-between mb-4 px-4'>
					<div className='col-md-4'>
						<Input
							input={{
								label: 'Title',
								name: 'title',
								placeholder: 'Enter Title',
							}}
						></Input>
					</div>
					<div className='col-md-4 text-end'>
						<Button
							button={{ text: 'Create Course', type: 'submit' }}
							handleClick={() => console.log('form')}
						></Button>
					</div>
				</div>

				<div className='row mb-4 px-4'>
					<div className='col-md-12'>
						<label className='form-label'>Description</label>
						<textarea
							name='description'
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
								<input
									ref={authorInputRef}
									className='form-control me-2'
									type='text'
									placeholder='Enter Author Name'
								/>
							</div>

							<div className='mt-3 text-center'>
								<Button
									button={{ text: 'Create Author' }}
									handleClick={onCreateAuthor}
								></Button>
							</div>
						</div>
						<div>
							<h3 className=' text-center'>Duration</h3>
							<div>
								<Input
									input={{
										label: 'Duration',
										name: 'duration',
										placeholder: 'Enter Duration in minutes',
									}}
								></Input>
							</div>
						</div>
					</div>

					<div className='col-md-6'>
						<div className='mb-4'>
							<h3 className='text-center'>Authors</h3>

							{authors.map((author) => (
								<AuthorItem
									key={author.id}
									author={author}
									handleAddAuthor={addAuthors}
								></AuthorItem>
							))}
						</div>
						<div>
							<h3 className='text-center'>Course Authors</h3>
							{bookAuthors.length < 1 ? (
								<p>Author List is empty</p>
							) : (
								<div>
									{bookAuthors.map((author) => (
										<p key={author}>{author}</p>
									))}
								</div>
							)}
						</div>
					</div>
				</div>
			</form>
		</>
	);
}

export default CreateCourse;
