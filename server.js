const express = require('express');
const app = express();
// var bodyParser = require('body-parser');
const cors = require('cors');
const connecDB = require('./connection');

connecDB();
app.use(cors());
// app.use(bodyParser.json());
app.use(express.json({extended:false}))
// app.use('/api/addEmployee',require('./Api/Employee'));
app.use(require('./Api/Employee'));
// app.use('/api/getEmployees',require('./Api/Employee'));

const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>console.log('Server is running ..!'));