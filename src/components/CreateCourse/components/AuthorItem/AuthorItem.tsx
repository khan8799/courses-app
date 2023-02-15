import React from 'react';
import Button from 'src/common/Button/Button';

function AuthorItem({ author, handleAddAuthor }) {
	const addAuthorButton = {
		text: 'Add Author',
	};
	return (
		<>
			<div key={author.id} className='row justify-content-around mt-4'>
				<div className='col-auto text-left'>
					<label>{author.name}</label>
				</div>
				<div className='col-auto'>
					<Button
						button={addAuthorButton}
						handleClick={() => handleAddAuthor(author.name)}
					></Button>
				</div>
			</div>
		</>
	);
}

export default AuthorItem;
