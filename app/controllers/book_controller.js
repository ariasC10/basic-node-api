const getBook = (req, res)=>{
    res.send({isbn:'abcd-defg-ghij', name: 'example name', release_date: '01-01-2023'})
};


export { getBook };