'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.0/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})

Route.get('/user', "UserController.getUser")
Route.post('/login', "UserController.login")

Route.post('/create', "UserController.createUser")

Route.delete('/delete/:id', "UserController.deleteUser")

//Coaches
Route.get('/coach/clients', "AssignmentController.getClients").middleware(['auth'])
Route.get('/coach/clients/:id', "AssignmentController.getOneClient").middleware(['auth'])
Route.post('/workouts', "WorkoutController.storeWorkout")//.middleware(['auth'])
Route.get('/workouts', "WorkoutController.fetchWorkout")//.middleware(['auth'])

Route.post('/macros', "MacroController.storeMacro")//.middleware(['auth'])
Route.get('/macros', "MacroController.fetchMacro")//.middleware(['auth'])


//Chatkit
Route.post('chatCreateRoom', 'MessageController.createRoom')
Route.post('chatGetRoom', 'MessageController.getUserRooms')
Route.post('chatSendMessage', 'MessageController.sendMessage')
