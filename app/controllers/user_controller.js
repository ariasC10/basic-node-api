import mongoose from "mongoose";
import { User } from "../models/user_model.js";

const options= {
    page: 1,
    limit: 10
}

//parse the id received to mongo objectId
const parseId = (id)=>{
    return new mongoose.Types.ObjectId(id);
};

//GET users collection
const getUsers = async (req, res)=>{
    try {
        const data = await User.paginate({}, options);
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
        res.status(200).send({data: saveUser});
    } catch (e) {
        res.status(400).send({error: e.message});
    }
}

//PUT user
const putUser = async (req, res)=>{
    try {
        const  { id } = req.params;
        const { body } = req;
        const updateUser = await User.updateOne({ _id: parseId(id)}, body);
        res.status(200).send({response: updateUser});
    } catch (e) {
        res.status(400).send({error: e.message});
    }
};

//DELETE user
const deleteUser = async (req, res)=>{
    try {
        const  { id } = req.params;
        const { body } = req;
        const deleteUser = await User.deleteOne({_id: parseId(id)}, body);
        res.status(200).send({response: deleteUser});
    } catch (e) {
        res.status(400).send({error: e.message});
    }
};

export { getUsers, postUser, putUser,deleteUser };