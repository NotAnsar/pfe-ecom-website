import React, { useEffect } from 'react';
import { OrderConfirmPage } from '../components/Checkout/OrderConfirmPage';

export const OrderConfirm = () => {
	useEffect(() => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	}, []);

	return <OrderConfirmPage />;
};
