import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Home from './components/home.js';

import Login from './components/Admin/Login';
import PrivateComponent from './components/PrivateComponent';

import AdminDashboard from './components/Admin/Dashboard.js';
import AdminBanner from './components/Admin/Banner.js';
import AdminBannerData from './components/Admin/BannerData.js';
import AdminAllProduct from './components/Admin/AllProduct.js';
import AdminAddProduct from './components/Admin/AddProduct.js';

function App() {

	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/login' element={<Login />} />
				<Route element={<PrivateComponent />} >
					<Route path='/admin/dashboard' element={<AdminDashboard />} />
					<Route path='/admin/banner' element={<AdminBanner />} />
					<Route path='/admin/banner/data' element={<AdminBannerData />} />
					<Route path='/admin/all-product' element={<AdminAllProduct />} />
					<Route path='/admin/add-product' element={<AdminAddProduct />} />
					<Route path='*' element={<AdminDashboard />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
