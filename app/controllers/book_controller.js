import { Book } from "../models/book_model.js";

//GET books collection
const getBooks = async (req, res)=>{
    try {
        const data = await Book.find({});
        res.status(200).send({data: data});
    } catch (e) {
        res.status(400).send({error: e.message});
    }
};

//POST book
const postBook = async (req, res)=>{
    try {
        const data = req.body;
        const saveBook = await Book.create(data);
        res.send({data: saveBook}, 200);
    } catch (e) {
        res.send({error: e.message}, 400);
    }
}

export { getBooks, postBook };