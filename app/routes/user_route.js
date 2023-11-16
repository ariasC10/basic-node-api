//dependencies required
import express from 'express';
import { getUsers, postUser } from '../controllers/user_controller.js'

//endpoints
const routerUser = express.Router();

//GET
routerUser.get('/user', getUsers);

//POST
routerUser.post('/user', postUser);

export { routerUser }; //export the routes