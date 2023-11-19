import express from 'express';
import { getBooks, postBook, putBook, deleteBook } from '../controllers/book_controller.js';

//endpoints
const routerBook = express.Router();

//GET all
routerBook.get('/book', getBooks);

//POST data
routerBook.post('/book', postBook);

//PUT item
routerBook.put('/book/:id', putBook);

//DELETE item
routerBook.delete('/book/:id', deleteBook);

export { routerBook };//export the routes