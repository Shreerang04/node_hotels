const mongoose = require('mongoose');
const mongoURL ='mongodb://localhost:27017/hotels'


mongoose.connect(mongoURL)

const db= mongoose.connection;


db.on('connected',()=>{
    console.log('Connected to MongoDB server');
})

db.on('disconnected',()=>{
    console.log('Disonnected to MongoDB server');
})

db.on('error',(err)=>{
    console.log('Error in connection');
})

module.exports=db;
