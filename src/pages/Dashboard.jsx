import React, { useEffect } from 'react';
import DashboardPage from '../components/Dashboard/DashboardPage';

const Dashboard = () => {
	useEffect(() => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	}, []);

	return <DashboardPage />;
};

export default Dashboard;
