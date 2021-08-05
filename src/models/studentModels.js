//2. Lets Define the Model
const mongoose = require('mongoose');

//Lets Import Schema
// const element = require('library');
const Schema = mongoose.Schema; // require('mongoose').Schema
//1 . Let create schema
const StudentScheme = new Schema({
    name:{ type: String },
    rollno:{ type: String, require: [true,"The roll number is very compulsory"] },
    present:{ type: Boolean }
});
const StudentModel = mongoose.model('students',StudentScheme);

module.exports = StudentModel;