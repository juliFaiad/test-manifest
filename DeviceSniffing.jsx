import {
	browserName,
	osName,
	isMobile,
	mobileModel,
	mobileVendor,
	isElectron,
} from 'react-device-detect';

export const DeviceSniffing = () => {
	return (
		<>
			<div>{`I think you're using: ${browserName} on ${osName}`}</div>
			{isMobile && (
				<div>{`You're also on mobile using a ${mobileVendor} ${mobileModel}`}</div>
			)}
			{isElectron && <div>This is running on Electron</div>}
		</>
	);
};
