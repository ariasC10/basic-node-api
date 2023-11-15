import express from 'express';
import { getUser } from '../controllers/user_controller.js'

const routerUser = express.Router();

routerUser.get('/user', getUser);

export { routerUser };