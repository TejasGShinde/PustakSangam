const Book = require('../model/book');


const getAllBooks = async (req, res, next) =>{
    let books;
    try{
        books = await Book.find();
    }
    catch(err){
        console.error(err);
    }
    if(!books){
        return res.status(404).json({message:"book not found"});
    }
    else{
        return res.status(200).json({books});
    }
}
const getById = async (req, res, next) => {
    const id = req.params.id;
    let book;
    try{
        book = await Book.findById(id);
    }
    catch(err){
        console.error(err);
    }
    if(!book){
        return res.status(404).json({message:"book id not found"});
    }
    else{
        return res.status(200).json({book});
    }
}
const addBooks = async (req, res,next) =>{
    const {name,author,description,price,available,image} = req.body;
    let book;
    try{
        book = new Book({
            name,
            author,
            description,
            price,
            available,
            image
        });
        await book.save();
    }
    catch(err){
        console.error(err);
    }
    if(!book){
        return res.status(500).json({message:"book cannot be added"});
    }
    else{
        return res.status(201).json({book});
    }
}

const updateBook = async (req, res,next) => {
    const id = req.params.id;
    const {name,author,description,price,available,image} = req.body;
    let book;
    try{
        book = await Book.findById(id,{
            name,
            author,
            description,
            price,
            available,
            image
        })
    }
    catch(err){
        console.error(err);
    }
    if(!book){
        return res.status(404).json({message:"book id not found"});
    }
    else{
        return res.status(200).json({book});
    }

}
const deleteBook = async (req, res,next) =>{
    const id = req.params.id;
    let book;
    try{
        book = await Book.findByIdAndRemove(id);
    }
    catch(err){
        console.error(err);
    }
    if(!book){
        return res.status(404).json({message:"book cannot be deleted"});
    }
    else{
        return res.status(200).json({book});
    }
}

exports.getAllBooks = getAllBooks;
exports.addBooks =addBooks;
exports.getById = getById;
exports.updateBook = updateBook;
exports.deleteBook = deleteBook;