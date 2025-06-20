const express= require('express');
const router= express.Router();
const MenuItem = require('./../modles/MenuItem');

// GET method to get the Menu Items
router.get('/', async (req, res) =>{
    try{
        const data = await MenuItem.find();
        console.log('data fetched');
        res.status(200).json(data);
    }catch(err) {
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'});
    }
})

router.post('/',async(req,res)=>{
    try{
        const data1=req.body
        const newItem= new MenuItem(data1);
        const response1 = await newItem.save();
        console.log('data saved');
        res.status(200).json(response1);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:'Internal server error'});
    }
})

module.exports= router;