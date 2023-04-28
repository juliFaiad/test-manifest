import { useNavigate } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
export const Menu = ({ changeView }) => {
	const navigate = useNavigate();
	return (
		<div>
			<div>
				<button
					onClick={() => navigate('/')}
					style={{ margin: '1rem' }}>
					Device Sniffing (Route)
				</button>
				<button
					onClick={() => navigate('/async')}
					style={{ margin: '1rem' }}>
					Async Testing (Route)
				</button>
			</div>
			<div>
				<button
					onClick={() => changeView('device_sniffing')}
					style={{ margin: '1rem' }}>
					Device Sniffing (Component)
				</button>
				<button
					onClick={() => changeView('async_testing')}
					style={{ margin: '1rem' }}>
					Async Testing (Component)
				</button>
			</div>
		</div>
	);
};
