const express = require('express');
const app = express();

const connecDB = require('./connection');
connecDB();

app.use(express.json({extended:false}))
app.use('/api/addEmployee',require('./Api/Employee'));

const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>console.log('Server is running ..!'));