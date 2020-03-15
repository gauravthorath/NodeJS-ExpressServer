const mongoose = require('mongoose');
const URI = 'mongodb+srv://firstUser:firstPassword@employeecluster-fql8m.mongodb.net/EmployeeDB?retryWrites=true&w=majority';

const connectDB = async() => {
  await mongoose.connect(URI,{ 
      useUnifiedTopology: true,
      useNewUrlParser: true 
    });
  console.log("db connected");
}

module.exports = connectDB;