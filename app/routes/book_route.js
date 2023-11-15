import express from 'express';
import { getBook } from '../controllers/book_controller.js';
const routerBook = express.Router();

routerBook.get('/book', getBook);

export { routerBook };