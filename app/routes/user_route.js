//dependencies required
import express from 'express';
import { getUsers, postUser, putUser, deleteUser } from '../controllers/user_controller.js'

//endpoints
const routerUser = express.Router();

//GET all
routerUser.get('/user', getUsers);

//POST
routerUser.post('/user', postUser);

//PUT item
routerUser.put('/user/:id', putUser);

//DELETE item
routerUser.delete('/user/:id', deleteUser);

export { routerUser }; //export the routes