import express from 'express';

export const Routes = express.Router();

Routes.get('/api', (request, response) => {
  response.status(200);
  response.send(JSON.stringify(Routes.stack.filter(stack => stack.route && stack.route.path).map(stack => ({
    path: stack.route.path,
    method: stack.route.stack[0].method
  }))));
});

Routes.all('/api/*', (request, response) => {
  response.sendStatus(404);
});
