const mongoose = require('mongoose');

const employee = new mongoose.Schema({
    firstName:{
        type:String
    },
    lastName:{
        type:String
    }
});

module.exports = Employee = mongoose.model('employee',employee,'Employee');