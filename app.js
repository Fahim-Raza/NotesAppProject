require('dotenv').config();
const express = require('express');
const mongoose =require('mongoose');
const expressLayouts= require('express-ejs-layouts');
const { PORT,MONGODB_URI} = require('./config/environment');
const e = require('express');
const session = require('express-session');
const passport = require('passport');




const app = express();
const port = PORT

app.use(passport.initialize());
app.use(passport.session());

app.use(express.urlencoded({extended:  true}));
app.use(express.json());

//Static files
app.use(express.static('public'))

//templating engine
app.use(expressLayouts);
app.set('layout','./layouts/main');
app.set('view engine','ejs');

// routes
app.use('/',require('./server/routes/index'))
app.use('/',require('./server/routes/auth'))
//app.use('/',require('./server/routes/dashboard'))

try{

    app.listen(port,async(req,res)=>{
    const connection=await mongoose.connect(MONGODB_URI)
     console.log(`Database is connected at ${port} `)

    })
}
catch(error){
    res.json({
        "error":"connection"
    })

}

// app.listen(port,()=>{
//     console.log(`server is started on port ${port}`)
// })



