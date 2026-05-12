const express = require('express');

//creating new server
const app = express();

const {adminAuth , userAuth} = require('./middlewares/admin');

//using server

// This will override all the below methods because it is starting with "/"
/* app.use("/",(req,res) => {
    res.send("Home page")
}) */


    //using dummy auth middleware
    app.use('/admin', adminAuth);

// This will override all the below /user methods because it is starting with "/"
//auth middleware use for user
app.use("/user" , userAuth , (req,res,next) => {
    //save data to DB
    res.send("user details");
    //next(); // if we write next() after res.send it will give error on server console saying "Cannot set headers after they are sent to the client"
    
},
(req,res,next) => {
    //save data to DB
    //res.send("user details 2");
    next(); //It will throw error on postman as "Cannot GET /user" because we don't have any request handler here
}
)


//listening on port 3000
app.listen(3000, () => {
    console.log("Server is successfully listening on port 3000...")
});



