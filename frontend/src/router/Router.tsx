import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BasicLayout from '../components/BasicLayout';
import Main from '../pages/Main';
import UserHome from '../pages/UserHome';

const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<BasicLayout />}>
					<Route path="/" element={<Main />} />
					<Route path="/user" element={<UserHome />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default Router;
