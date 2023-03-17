/** @format */
import 'antd/dist/reset.css';

import { SocketProvider } from './context/socketContext';
import { UiProvider } from './context/UiContext';
import { RouterPage } from './pages/RouterPage';

export const TicketApp = () => {
	return (
		<SocketProvider>
			<UiProvider>
				<RouterPage />
			</UiProvider>
		</SocketProvider>
	);
};
