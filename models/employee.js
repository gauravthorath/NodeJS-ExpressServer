const mongoose = require('mongoose')
const Schema = mongoose.Schema

const employeeSchema = new Schema({
    firstName :String,
    lastName : String, 
    Address : String
})

module.exports = mongoose.model('employee', employeeSchema, 'Employee') //first employee is name of model refered locally and 2nd employee is reffered in mongodb server
