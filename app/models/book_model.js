import mongoose from "mongoose"; //mongoDB lib
const { Schema } = mongoose

//book schema
const BookSchema = new Schema(
    {
        isbn: {
            type: String,
            unique: true,
            required: true
        },
        name: String,
        release_date: String
    }
);

//book model
const Book = mongoose.model('book', BookSchema);

export { Book };