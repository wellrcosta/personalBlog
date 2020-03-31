'use strict';

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route');

Route.post('/users', 'UserController.create');

Route.post('/sessions', 'SessionController.create');

Route.post('/post', 'PostController.create').middleware('auth');
Route.delete('/post/:id', 'PostController.destroy').middleware('auth');
Route.put('/post/:id', 'PostController.update').middleware('auth');
Route.get('/post', 'PostController.index');
Route.get('/post/:id', 'PostController.show');

Route.post('/portfolio', 'PortfolioController.create').middleware('auth');
Route.delete('/portfolio/:id', 'PortfolioController.destroy').middleware(
	'auth'
);
Route.put('/portfolio/:id', 'PortfolioController.update').middleware('auth');
Route.get('/portfolio', 'PortfolioController.index');
Route.get('/portfolio/:id', 'PortfolioController.show');
Route.post('/porfolio/:id/images', 'ImageController.store').middleware('auth');

Route.get('/images/:path', 'ImageController.show');
Route.get('/listImages', 'ImageController.listAll');
