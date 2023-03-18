/** @format */
import { createContext, ReactNode } from 'react';
import { Socket } from 'socket.io-client';

import { useSocket } from '../hooks/useSocket';

interface Context {
	socket: Socket;
	online: boolean;
}

export const SocketContext = createContext<Context>({} as any);

interface Props {
	children: ReactNode;
}

export const SocketProvider = ({ children }: Props) => {
	const { socket, online } = useSocket('http://localhost:8080');

	return <SocketContext.Provider value={{ socket, online }}>{children}</SocketContext.Provider>;
};
