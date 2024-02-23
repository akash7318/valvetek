import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Sidebar.css';
import PageNaviComp from './PageNaviComp';

import DashboardIcon from '@mui/icons-material/Dashboard';

function Sidebar() {

	const navigate = useNavigate();

	useEffect(() => {
		const user = localStorage.getItem('user');
		if (!user) {
			navigate('/login');
		}
	});

	const location = useLocation();

	const nav = [
		{
			name: 'Dashboard',
			icon: <DashboardIcon />,
			link: '/admin/dashboard',
			hasChildren: false,
			addClass: location.pathname === "/admin/dashboard" ? "active" : null
		},
		{
			name: 'Banner',
			icon: <DashboardIcon />,
			link: '/admin/banner',
			hasChildren: false,
			addClass: location.pathname === "/admin/banner" ? "active" : null
		},
		{
			name: 'Product',
			icon: <DashboardIcon />,
			link: '#',
			hasChild: true,
			addClass: location.pathname.includes('product') ? "active" : null,
			childs: [
				{
					name: 'All Product',
					link: '/admin/all-product',
					addChildClass: location.pathname === "/admin/all-product" ? "active" : null
				},
				{
					name: 'Add Product',
					link: '/admin/add-product',
					addChildClass: location.pathname === "/admin/add-product" ? "active" : null
				}
			]
		}
	];

	return (
		<div className='w-1/6 border-r Sidebar drop-shadow-lg bg-white overflow-auto'>
			<div className='w-full p-[10px]'>
				{
					nav.map((value, index) =>
						<PageNaviComp
							key={index}
							name={value.name}
							icon={value.icon}
							link={value.link}
							hasChild={value.hasChild}
							addClass={value.addClass}
							childrens={value.childs ? value.childs : null}
						/>
					)
				}
			</div>
		</div>
	);
}

export default Sidebar;