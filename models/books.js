const mongoose = require('mongoose')
const { Schema } = mongoose

const booksSchema = new Schema({
    title: String,
    description: String,
    year: Number,
    quantity: Number,
    imageURL: String
})

// model and export: 
const Book = mongoose.model('books', booksSchema)
module.exports = Book