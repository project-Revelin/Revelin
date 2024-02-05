const express = require('express')
const dotenv = require('dotenv');
const morgan = require('morgan');
const connectdb = require('./config/db');
const authRoute = require('./routes/authRoute')
const app = express();
dotenv.config();
connectdb();

app.use(express.json());
app.use(morgan('dev'));
app.use('/api/v1/auth',authRoute)


app.get('/',(req,res) =>{
    res.send({
        message:'Welcome to The Revelin heavy industries'
    })
})

const PORT = process.env.PORT || 8080;

app.listen(PORT, ()=>{
    console.log('Server is running');
})