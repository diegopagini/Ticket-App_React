/** @format */
import { Ticket } from '../interfaces/ticket.interface';

export const getTickets = async (): Promise<{ ok: boolean; tickets: Ticket[] }> => {
	const response = await fetch(`http://localhost:8080/tickets`);
	return await response.json();
};
