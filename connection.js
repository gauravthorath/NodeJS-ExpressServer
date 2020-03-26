const mongoose = require('mongoose');
const URI = 'mongodb+srv://firstUser:firstPassword@employeecluster-fql8m.mongodb.net/EmployeeDB?retryWrites=true&w=majority';



const connectDB = async() => {
  await mongoose.connect(URI,{ 
      useUnifiedTopology: true,
      useNewUrlParser: true 
    },(err)=>{
      //var dbase = db.db("EmployeeDB");
      if (err) return console.log(err)
    });
  console.log("MongoDB connected");
}

module.exports = connectDB;