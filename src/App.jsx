import './App.css';
import { useState, useEffect } from 'react';
import { DeviceSniffing } from './components/DeviceSniffing';
import { AsyncTesting } from './components/AsyncTesting';
import { Menu } from './components/Menu';
import { Routes, Route } from 'react-router-dom';
import DeviceSniffingPage from './DeviceSniffingPage';
import AsyncTestingPage from './AsyncTestingPage';

function App() {
	const [view, setView] = useState('device_sniffing');
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
			<Menu changeView={setView} />
			<div
				style={{
					backgroundColor: '#242526',
					padding: '4rem',
					color: 'white',
					marginBottom: '2rem',
				}}>
				<h1>Component:</h1>
				{view === 'device_sniffing' && <DeviceSniffing />}
				{view === 'async_testing' && <AsyncTesting />}
				<p>
					{`Looks like you're `}
					{isOnline ? (
						<strong>Online</strong>
					) : (
						<strong>Offline</strong>
					)}
				</p>
			</div>
			<div>
				<h1>Route:</h1>
				<Routes>
					<Route path='/' element={<DeviceSniffingPage />} />
					<Route path='/async' element={<AsyncTestingPage />} />
				</Routes>
			</div>
		</>
	);
}

export default App;
