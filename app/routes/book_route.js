import express from 'express';
import { getBooks, postBook } from '../controllers/book_controller.js';

//endpoints
const routerBook = express.Router();

//GET
routerBook.get('/book', getBooks);

//POST
routerBook.post('/book', postBook);

export { routerBook };//export the routes