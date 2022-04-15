const dotenv= require('dotenv');
const express = require('express');
const notes = require("./data/notes");
const userRoutes = require('./routes/userRoutes');
const adminRoutes = require('./routes/adminRoutes');

const app = express();
dotenv.config();

const connectDB = require('./config/db');
const { notFound, errorHandler } = require('./middlewares/errorMiddleware');

connectDB();

app.use(express.json());
app.use((req,res,next) => {
     res.setHeader('Access-Control-Allow-Origin','*'),
     res.setHeader('Access-Control-Allow-Headers','*'),
     next();
 });

app.get("/",(req,res)=>{
    res.send("API is running..");
});

app.get("/api/notes", (req,res)=>{
    res.json(notes);
}); 

 app.use('/api/users',userRoutes);
 app.use('api/admin',adminRoutes)


 app.use(notFound);
 app.use(errorHandler);

// app.get("/api/notes/:id",(req,res)=>{
//     const note= notes.find((n)=>n._id===req.params.id);
//     res.send(note);
// });

const PORT = process.env.PORT || 5000;

app.listen(PORT,console.log(`Server started on PORT ${PORT}`));