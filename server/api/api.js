import express from 'express';

export const api = express.Router();

api.get('/api', (request, response) => {
	response.status(200);
	response.send(JSON.stringify(api.stack.filter(stack => stack.route && stack.route.path).map(stack => ({
		path: stack.route.path,
		method: stack.route.stack[0].method
	}))));
});

api.all('/api/*', (request, response) => {
	response.sendStatus(404);
});
