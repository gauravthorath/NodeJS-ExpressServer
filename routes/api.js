const express = require('express');
const router = express.Router()

const employee = require('../models/employee')
// const mongoose = require('mongoose')
// const db = 'mongodb://firstUser:firstPassword@employeecluster-shard-00-00-fql8m.mongodb.net:27017?retryWrites=true&w=majority'

// mongoose.connect(db, {useNewUrlParser: true, useUnifiedTopology: true}, err=> {
//     if(err) {
//         console.error('Error!', err)
//     } else {
//         console.log('Connected to MongoDB')
//     }
// })

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://firstUser:firstPassword@employeecluster-fql8m.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true});
client.connect(err => {
  if(err){
      console.log('Error!'+ err.message);
  } else 
  {
    console.log('Connected to MongoDB');
  }
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

router.get('/',(req,res)=> {
    res.send('From API route')
})

router.post("/addnew", (req, res) => {
     let employeeData = req.body
     let emp = new employee(employeeData)
     emp.save()
     .then(item => {
       res.send("item saved to database");
     })
     .catch(err => {
       res.status(400).send("unable to save to database");
     });
    // emp.save((error, resisteredEmployee) => {
    //     if(error){
    //         console.log(error)
    //     } else {
    //         res.status(200).send(resisteredEmployee)
    //     }
    // })
    // res.send('From post route')
})
module.exports = router