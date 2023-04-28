import { DeviceSniffing } from './components/DeviceSniffing';
import { useState, useEffect } from 'react';

// eslint-disable-next-line react/prop-types
const DeviceSniffingPage = () => {
	const [isOnline, setIsOnline] = useState(navigator.onLine);

	useEffect(() => {
		const handleStatusChange = () => {
			setIsOnline(navigator.onLine);
		};

		window.addEventListener('online', handleStatusChange);
		window.addEventListener('offline', handleStatusChange);

		return () => {
			window.removeEventListener('online', handleStatusChange);
			window.removeEventListener('offline', handleStatusChange);
		};
	}, [isOnline]);

	return <DeviceSniffing />;
};
export default DeviceSniffingPage;
