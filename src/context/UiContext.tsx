/** @format */
import { createContext, ReactNode, useState } from 'react';

interface Context {
	hideMenu: boolean;
	onShowMenu: () => void;
	onHideMenu: () => void;
}

export const UiContext = createContext<Context>({
	hideMenu: true,
	onShowMenu: () => {},
	onHideMenu: () => {},
});

interface Props {
	children: ReactNode;
}

export const UiProvider = ({ children }: Props) => {
	const [hideMenu, setHideMenu] = useState(false);

	const onShowMenu = () => {
		setHideMenu(false);
	};

	const onHideMenu = () => {
		setHideMenu(true);
	};

	return (
		<>
			<UiContext.Provider
				value={{
					hideMenu,
					onShowMenu,
					onHideMenu,
				}}
			>
				{children}
			</UiContext.Provider>
		</>
	);
};
