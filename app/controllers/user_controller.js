import { User } from "../models/user_model.js";

//GET users collection
const getUsers = async (req, res)=>{
    try {
        const data = await User.find({});
        res.status(200).send({data: data});
    } catch (e) {
        res.status(400).send({error: e.message});
    }
};

//POST user
const postUser = async (req, res)=>{
    try {
        const data = req.body;
        const saveUser = await User.create(data);
        res.send({data: saveUser}, 200);
    } catch (e) {
        res.send({error: e.message}, 400);
    }
}

export { getUsers, postUser };