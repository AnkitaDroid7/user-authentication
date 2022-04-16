const mongoose = require ('mongoose');
const { MONGO_URL } = require('../../config');
const connectDB = async () => {
    try{
          const conn = await mongoose.connect(MONGO_URL, err => {
        if(err) throw err;
        console.log('connected to MongoDB')
    });  
          console.log(`Mongodb connected: ${conn.connection.host}`);
    }catch(error){
            console.error(`Error: ${error.message}`);
            process.exit();
    }
};

module.exports = connectDB;