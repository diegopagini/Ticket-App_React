/** @format */
import { useContext, useEffect } from 'react';

import { UiContext } from '../context/UiContext';

export const useHideMenu = (hide: boolean) => {
	const { onShowMenu, onHideMenu } = useContext(UiContext);

	useEffect(() => {
		if (hide) onHideMenu();
		else onShowMenu();
	}, [hide, onShowMenu, onHideMenu]);
};
