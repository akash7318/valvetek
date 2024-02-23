import React, { useState } from 'react'
import BreadCrumb from './BreadCrumb'

import Tinymce from './Tinymce';

import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const VisuallyHiddenInput = styled('input')({
	clip: 'rect(0 0 0 0)',
	clipPath: 'inset(50%)',
	height: 1,
	overflow: 'hidden',
	position: 'absolute',
	bottom: 0,
	left: 0,
	whiteSpace: 'nowrap',
	width: 1,
});

function BannerDataComp() {

	const [name, setName] = useState('');
	const [textField1, setTextField1] = useState('');
	const [textField2, setTextField2] = useState('');
	// const [file, setFile] = useState('');
	const [description, setDescription] = useState('');

	const setContent = (content) => {
		setDescription(content);
	}

	const submitHandler = async (event) => {
		event.preventDefault();

		const data = new FormData();
		data.append("name", name);
		data.append("textField1", textField1);
		data.append("textField2", textField2);
		// data.append("file", file);
		data.append("description", description);

		const url = "http://localhost:5000/createBanner";

		let result = await fetch(
			url,
			{
				method: "POST",
				body: data,
			}
		);

		result = await result.json();

		console.log(result);
	}

	return (
		<div className='w-5/6 nav-with-content bg-gray-100 overflow-auto'>
			<div className='Content_box m-4'>
				<div className="bg-white p-8 rounded-md w-full">
					<BreadCrumb name="Add Banner" link="/admin/banner" btnName="Manage Banner" />
					<form onSubmit={submitHandler}>
						<input type="text" placeholder='Test' onChange={(e) => setName(e.target.value)} />
						<input type="text" placeholder='Test' onChange={(e) => setTextField1(e.target.value)} />
						<input type="text" placeholder='Test' onChange={(e) => setTextField2(e.target.value)} />
						{/* <input type="file" onChange={(e) => setFile(e.target.files[0])} /> */}
						<Tinymce value="" description={setContent} />
						<button type='submit' className='bg-sky-500 px-4 py-2 rounded text-white'>Save</button>
					</form>
					{/* <div>
						<div>
							<TextField
								required
								// id="name"
								label="Name"
								onChange={(e) => setName(e.target.value)}
							// defaultValue="Hello World"
							/>
							<TextField
								// required
								// id="textField1"
								label="Text Field 1"
								onChange={(e) => setTextField1(e.target.value)}
							// defaultValue="Hello World"
							/>
							<TextField
								// required
								// id="textField2"
								label="Text Field 2"
								onChange={(e) => setTextField2(e.target.value)}
							// defaultValue="Hello World"
							/>
							<Button
								component="label"
								role={undefined}
								variant="contained"
								tabIndex={-1}
								startIcon={<CloudUploadIcon />}
								onChange={(e) => setFile(e.target.files[0])}
							>
								Upload file
								<VisuallyHiddenInput type="file" />
							</Button>
							<Tinymce value="" description={setContent} />
						</div>

						<button type='button' onClick={submitHandler} className='bg-sky-500 px-4 py-2 rounded text-white'>Save</button>
					</div> */}
				</div>
			</div>
		</div>
	)
}

export default BannerDataComp