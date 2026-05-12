const express = require('express');

//creating new server
const app = express();


app.get("/getUserData", (req,res,next) => {
    try{
        //Logic of DB and get user data

        throw new Error("jfjsfsj");
        res.send("user data sent");
    }catch(err){
        res.status(500).send("Some error occured!");
    }
})

//Wild card error handling 
app.use("/user",(err,req,res,next) => {
    throw new Error("jfjsfsj");

    if(err){
        res.status(500).send("something went wrong");
    }
    res.send("user details")
})




//listening on port 3000
app.listen(3000, () => {
    console.log("Server is successfully listening on port 3000...")
});



