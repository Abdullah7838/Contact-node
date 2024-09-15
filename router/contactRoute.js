const express = require('express');
const Contact = require('../models/Contacti');
const router = express.Router();

router.post('/contact',async(req,res)=>{
    try{
    const {name,email,number,msg} = req.body;
    const newForm = new Contact({name,email,number,msg})
    const save =await newForm.save()
    if(!save){
        console.log('Error while saving in try')
        res.status(404).json({message:"Error while saving in try"});

    }
    console.log(" Form Data Saved Sucessfully")
    res.status(200).json({message:"Form Data Saved"});
    }catch(err){
        console.log(err)
        console.log("Error while saving Form data")
        res.status(500).json({message:"Error while saving Form data"});
    }
})

router.get('/orders', async (req, res) => {
    try {
      const data = await Contact.find(); 
      if (!data || data.length === 0) {  
        return res.status(404).json({ message: 'No orders found' });
      }
      res.status(200).json(data); 
    } catch (error) {
      res.status(500).json({ message: 'Server error', error }); 
    }
  });
  
module.exports=router;