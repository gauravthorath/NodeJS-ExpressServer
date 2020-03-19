const express = require('express');
const mongoose = require('mongoose');
const Employee = require('../models/Employee');
const router = express.Router();

// const app = express();
// app.use(express.json({extended:false}));

router.post('/', async(req,res)=>{
    const {firstName,lastName,Address,doj}=req.body;
    let employee = {};
    employee.firstName = firstName;
    employee.lastName = lastName;
    employee.Address = Address;
    employee.doj = doj;
    let employeeModel = new Employee(employee);
    await employeeModel.save();
    res.json(employeeModel);
});

module.exports = router;