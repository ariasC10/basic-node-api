import mongoose from "mongoose"; //mongoDB lib
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

//user model
const User = mongoose.model('user', UserSchema);

export { User };