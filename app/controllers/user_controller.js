import { User } from "../models/user_model.js";

const options= {
    page: 1,
    limit: 10
}

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

export { getUsers, postUser };