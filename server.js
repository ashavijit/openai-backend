const dotenv = require("dotenv").config();
const express = require("express");
const path = require('path');
const cors = require('cors');
const port = process.env.PORT || 3000;

const app = express();

app.use(cors());

// Enable body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// route
app.use('/',(req,res)=>{
    res.send("Hello World");
});
app.use('/openai', require('./routes/index.js'));

app.listen(port, () => {
    console.log(`listing to the server: ${port}`);
})