import type { Actions } from './$types';

export const actions: Actions = {
	async a({ request }) {
		console.log('hello from a');
		return { hello: 'a' };
	},
	async b({ request }) {
		console.log('hello from b');
		return { hello: 'b' };
	}
};
