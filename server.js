const express=require('express')
require('dotenv').config();
const app = express();
const db= require('./db');

const PORT =process.env.PORT || 3000;

const bodyParser = require('body-parser');
app.use(bodyParser.json());// store jata in req.body


app.get('/', (req, res) => {
  res.send('Welcome to my Hotel.... How can I help you? ')
})
app.get('/chicken',(req,res)=>{
    res.send('Sure,I will serve you Chicken!')
})

// Import the router files
const personRoutes = require('./routes/personRoutes');
const menuItemRoutes = require('./routes/menuItemsRoutes');
// Use the routers
app.use('/person', personRoutes);
app.use('/menu', menuItemRoutes);



app.listen(PORT)