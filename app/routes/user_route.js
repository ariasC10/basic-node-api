//dependencies required
import express from 'express';
import { getUser } from '../controllers/user_controller.js'

//endpoints
const routerUser = express.Router();
routerUser.get('/user', getUser);

export { routerUser }; //export the routes