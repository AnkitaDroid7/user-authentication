const mongoose = require ('mongoose');
const connectDB = async () => {
    try{
          const conn = await mongoose.connect("mongodb+srv://ankitasingh01:sNUWSskp62yhTkG8@cluster0.lwsuq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", err => {
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