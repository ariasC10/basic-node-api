import express from 'express';

const app = express();

const PORT = 3050;

app.get('/',(req, res)=>{
    res.send({data:'Project started!'})
});

app.listen(PORT, ()=> {
    console.log('application started at port: ', PORT)
})