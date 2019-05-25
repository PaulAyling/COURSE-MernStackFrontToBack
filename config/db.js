const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

const connectDB = async () => {
  try {
    await mongoose.connect(db,{
        useNewUrlParser: true ,
        useCreateIndex: true,
        useFindAndModify: false,
        });
    
    console.log('mongo DB connected .......');
  } catch (err) {
    console.error(err.message);
    //exit process with faliure
    process.exit(1);
  }
};

module.exports = connectDB;
