const express = require('express')
const app = express();
require('dotenv').config();
const PORT = process.env.PORT;
var cors = require('cors')
const db = require('./db.js');
const bodyParser = require('body-parser')
app.use(bodyParser.json()); 
app.use(cors())

app.get('/',(req,res)=>{res.send('Hello World')})
const contactRoute = require('./router/contactRoute');
app.use('/',contactRoute)



app.listen(PORT,()=>{
    console.log('Server is Runnig on port',PORT)
})