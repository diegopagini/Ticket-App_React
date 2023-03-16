/** @format */

export const getUserStorage = () => {
	return {
		agent: localStorage.getItem('agent') || null,
		desk: localStorage.getItem('desk') || null,
	};
};
