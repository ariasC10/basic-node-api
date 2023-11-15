const getUser = (req, res)=>{
    res.send({user:'user 1', email: 'user1@example.com'})
};

export { getUser };