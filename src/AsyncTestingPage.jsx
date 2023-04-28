import { AsyncTesting } from './components/AsyncTesting';
import { useState, useEffect } from 'react';

// eslint-disable-next-line react/prop-types
const AsyncTestingPage = () => {
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

	return (
		<>
			<AsyncTesting />
			<p>
				{`Looks like you're `}
				{isOnline ? <strong>Online</strong> : <strong>Offline</strong>}
			</p>
		</>
	);
};
export default AsyncTestingPage;
