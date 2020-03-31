'use strict';

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route');

Route.post('/users', 'UserController.create');
Route.post('/sessions', 'SessionController.create');
Route.post('/post', 'PostController.create').middleware('auth');
Route.delete('/post/:id', 'PostController.destroy').middleware('auth');
Route.put('/post/:id', 'PostController.update').middleware('auth');
Route.get('/post', 'PostController.index');
Route.get('/post/:id', 'PostController.show');
