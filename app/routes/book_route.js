import express from 'express';
import { getBook } from '../controllers/book_controller.js';

//endpoints
const routerBook = express.Router();
routerBook.get('/book', getBook);

export { routerBook };//export the routes