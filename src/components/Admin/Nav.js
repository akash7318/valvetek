import React from 'react';
import './Nav.css';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import TopLoadingBar from '../TopLoadingBar';

function Nav() {
	return (
		<div className='w-full drop-shadow-md bg-white nav_bar flex border-b'>
			<TopLoadingBar />
			<div className='w-1/6'><h1 className='font-bold text-3xl'>Admin</h1></div>
			<div className='w-5/6'><span className='cursor-pointer'><MenuOpenIcon /></span></div>
		</div>
	);
}

export default Nav;