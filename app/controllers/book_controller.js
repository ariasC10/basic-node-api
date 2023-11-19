import mongoose from "mongoose";
import { Book } from "../models/book_model.js";

const options= {
    page: 1,
    limit: 10
}
//parse the id received to mongo objectId
const parseId = (id)=>{
    return new mongoose.Types.ObjectId(id);
};

//GET books collection
const getBooks = async (req, res)=>{
    try {
        const data = await Book.paginate({}, options);
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
        res.status(200).send({data: saveBook});
    } catch (e) {
        res.status(400).send({error: e.message});
    }
}

//PUT book
const putBook = async (req, res)=>{
    try {
        const  { id } = req.params;
        const { body } = req;
        const updateBook = await Book.updateOne({ _id: parseId(id)}, body);
        res.status(200).send({response: updateBook});
    } catch (e) {
        res.status(400).send({error: e.message});
    }
};

//DELETE book
const deleteBook = async (req, res)=>{
    try {
        const  { id } = req.params;
        const { body } = req;
        const deleteBook = await Book.deleteOne({_id: parseId(id)}, body);
        res.status(200).send({response: deleteBook});
    } catch (e) {
        res.status(400).send({error: e.message});
    }
};

export { getBooks, postBook, putBook, deleteBook };