const express = require('express');
const mongoose = require('mongoose');
const Employee = require('../models/Employee');
const router = express.Router();

// To save record in MongoDB
// http://localhost:3000/api/addEmployee  with JSON Body
router.post('/api/addEmployee', async (req, res) => {
    try {
        const { firstName, lastName, Address, doj } = req.body;
        let employee = {};
        employee.firstName = firstName;
        employee.lastName = lastName;
        employee.Address = Address;
        employee.doj = doj;
        let employeeModel = new Employee(employee);
        await employeeModel.save();
        res.json(employeeModel);
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
});

// To get all records from MongoDB
// http://localhost:3000/api/getEmployees
router.get('/api/getEmployees', async (req, res) => {
    try {
        const employees = await Employee.find()
        res.json(employees)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
});

//To get perticular record from MongoDB
// http://localhost:3000/api/getEmployee/5e6e290d032b32156c33d8c8
router.get('/api/getEmployee/:id', getEmployee, (req, res) => {
    res.json(res.employee)
});

// To delete perticular record from MongoDB
router.delete('/api/deleteEmployee/:id', getEmployee, async (req, res) => {
    try {
        await res.employee.remove()
        res.json({ message: 'Deleted This Employee' })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
});

// Update Employee
router.patch('/api/updateEmployee/:id', getEmployee, async (req, res) => {
    if (req.body.firstName != null) {
        res.employee.firstName = req.body.firstName
    }
    if (req.body.lastName != null) {
        res.employee.lastName = req.body.lastName
    }
    if (req.body.Address != null) {
        res.employee.Address = req.body.Address
    }
    if (req.body.doj != null) {
        res.employee.doj = req.body.doj
    }
    try {
        const updatedEmployee = await res.employee.save()
        res.json(updatedEmployee)
    } catch {
        res.status(400).json({ message: err.message })
    }
});

// To find one document in mongo DB collection
// Use it for Get details of employee and Delete one record and Update one record
async function getEmployee(req, res, next) {
    try {
        employee = await Employee.findById(req.params.id)
        if (employee == null) {
            return res.status(404).json({ message: 'Cant find employee' })
        }
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
    res.employee = employee
    next()
}

module.exports = router;