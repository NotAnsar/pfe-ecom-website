import React, { useEffect } from 'react';
import Checkout from '../components/Checkout/Checkout';

export const CheckOut = () => {
	useEffect(() => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	}, []);

	return <Checkout />;
};
