import mongoose from "mongoose"; //mongoDB lib

//user schema
const UserSchema = new mongoose.Schema(
    {
        name: {
            type: String
        },
        email: {
            type: String,
            unique: true,
            required: true
        },
        age: {
            type: Number
        }
    }
);

//user model
const User = mongoose.model('user', UserSchema);

export { User };