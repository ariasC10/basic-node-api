import mongoose from "mongoose"; //mongoDB lib

//book schema
const BookSchema = new mongoose.Schema(
    {
        isbn: {
            type: String,
            unique: true,
            required: true
        },
        name: {
            type: String
        },
        release_date: {
            type: String
        }
    }
);

//book model
const Book = mongoose.model('book', BookSchema);

export { Book };