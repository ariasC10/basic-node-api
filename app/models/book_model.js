import mongoose from "mongoose"; //mongoDB lib
import mongoosePaginate from 'mongoose-paginate-v2';
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

BookSchema.plugin(mongoosePaginate);

//book model
const Book = mongoose.model('book', BookSchema);

export { Book };