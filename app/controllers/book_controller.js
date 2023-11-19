import { Book } from "../models/book_model.js";

const options= {
    page: 1,
    limit: 10
}

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

export { getBooks, postBook };