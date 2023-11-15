import mongoose from "mongoose"; //mongoDB lib

const DB_URI = `mongodb://127.0.0.1:27017/testDB`;

//db connection
const initDB = async ()=>{
    try {
        const db = await mongoose.connect(DB_URI);
        return console.log('DB connected')
    } catch (error) {
        return console.log(error)
    }
};

export { initDB };