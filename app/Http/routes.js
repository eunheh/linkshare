'use strict'

/*
|--------------------------------------------------------------------------
| Router
|--------------------------------------------------------------------------
|
| AdonisJs Router helps you in defining urls and their actions. It supports
| all major HTTP conventions to keep your routes file descriptive and
| clean.
|
| @example
| Route.get('/user', 'UserController.index')
| Route.post('/user', 'UserController.store')
| Route.resource('user', 'UserController')
*/

const Route = use('Route')

Route.on('/').render('welcome')

Route.post('/users', 'UserController.register')
Route.post('/login', 'UserController.login')
Route.get('/auth_test', 'UserController.auth_test').middleware('auth')

Route.post('/post', 'PostController.submit').middleware('auth')
Route.get('/post/:id', 'PostController.index')
Route.delete('/post/:id', 'PostController.delete').middleware('auth')

Route.post('/comment/:id', 'CommentController.comment').middleware('auth')
Route.get('/comment/:id', 'CommentController.index')
