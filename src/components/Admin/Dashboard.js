import React from 'react';
import './Dashboard.css';
import Sidebar from './Sidebar';
import Nav from './Nav';
import DashboardComp from './components/DashboardComp';

function Dashboard() {

	return (
		<section className='w-full h-dvh overflow-hidden dashboard'>
			<Nav />
			<div className='flex h-full'>
				<Sidebar />
				<DashboardComp />
			</div>
		</section>
	);
}

export default Dashboard;