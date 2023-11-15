//Dependencies required for the app
import express from 'express';
import { routerUser } from './app/routes/user_route.js';
import { routerBook } from './app/routes/book_route.js';
import { initDB } from './config/db.js';

//app config
const app = express();
const PORT = 3050;

//initialize DB connection
initDB();
app.use(routerUser, routerBook);

//base path
app.get('/',(req, res)=>{
    res.send({data:'Project started!'})
});
//verify the server is up and running
app.listen(PORT, ()=> {
    console.log('application started at port: ', PORT)
});