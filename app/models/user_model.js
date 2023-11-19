import mongoose from "mongoose"; //mongoDB lib
import mongoosePaginate from 'mongoose-paginate-v2';
const { Schema } = mongoose

//user schema
const UserSchema = new Schema(
    {
        name: String,
        email: {
            type: String,
            unique: true,
            required: true
        },
        age: Number
    },
    {
        versionKey: false,
        timestamps: true
    }
);

UserSchema.plugin(mongoosePaginate);

//user model
const User = mongoose.model('user', UserSchema);

export { User };