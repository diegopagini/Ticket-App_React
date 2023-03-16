/** @format */
import 'antd/dist/reset.css';

import { UiProvider } from './context/UiContext';
import { RouterPage } from './pages/RouterPage';

export const TicketApp = () => {
	return (
		<UiProvider>
			<RouterPage />
		</UiProvider>
	);
};
