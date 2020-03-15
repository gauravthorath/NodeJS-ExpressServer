const express = require('express');
const mongoose = require('mongoose');
const Employee = require('../models/Employee');
const router = express.Router();

router.post('/', async(req,res)=>{
    const {firstName,lastName}=req.body;
    let employee = {};
    employee.firstName = firstName;
    employee.lastName = lastName;
    let employeeModel = new Employee(employee);
    await employeeModel.save();
    res.json(employeeModel);
});

module.exports = router;