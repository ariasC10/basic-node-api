//Dependencies required for the app
import express from 'express';
import { routerUser } from './app/routes/user_route.js';
import { routerBook } from './app/routes/book_route.js';

const app = express();

const PORT = 3050;

app.use(routerUser, routerBook);

app.get('/',(req, res)=>{
    res.send({data:'Project started!'})
});


app.listen(PORT, ()=> {
    console.log('application started at port: ', PORT)
})