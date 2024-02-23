import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import TopLoadingBar from '../TopLoadingBar';

function Login() {
	const navigate = useNavigate();

	useEffect(() => {
		const user = localStorage.getItem('user');
		if (user) {
			navigate('/admin/dashboard');
		}
	});

	const [showPasswordState, setShowPasswordState] = useState(false);
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [invalidUser, setInvalidUser] = useState('');
	const [error, setError] = useState(false);

	const showPass = () => {
		setShowPasswordState(!showPasswordState);
	}

	const getFormData = async () => {
		if (!username.trim() || !password.trim()) {
			setError(true);
			return false;
		}

		let result = await fetch(
			'http://localhost:5000/login',
			{
				'method': 'POST',
				'body': JSON.stringify({ username, password }),
				'headers': { 'Content-Type': 'application/json' },
			}
		);

		result = await result.json();

		if (result.status) {
			localStorage.setItem('user', JSON.stringify(result.user));
			navigate('/admin/dashboard');
		} else {
			setError(true);
			setInvalidUser(result.message);
		}
	}

	return (
		<section className='bg-gray-50 dark:bg-gray-900'>
			<TopLoadingBar />
			<div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
				<div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
					<div className="p-6 space-y-4 md:space-y-6 sm:p-8">
						<h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
							Sign in to your account
						</h1>
						<span className="text-red-400">{error && invalidUser}</span>
						<div>
							<label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your username</label>
							<input type="email" value={username} onChange={(e) => setUsername(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="username" required="" />
							{error && !username.trim() && <span className="invalid-input text-red-400">Enter Username ...</span>}
						</div>
						<div>
							<label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
							<input type={showPasswordState ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
							{error && !password.trim() && <span className="invalid-input text-red-400">Enter Password...</span>}
						</div>
						<div className="flex items-center justify-between">
							<div className="flex items-start">
								<div className="flex items-center h-5">
									<input id="remember" value={showPasswordState} onChange={(e) => showPass(e.target.value)} aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
								</div>
								<div className="ml-3 text-sm">
									<label htmlFor="remember" className="text-gray-500 dark:text-gray-300">Show Password</label>
								</div>
							</div>
							<button className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</button>
						</div>
						<button className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" onClick={getFormData}>Sign in</button>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Login;