const express = require('express');

//creating new server
const app = express();

//using server

// This will override all the below methods because it is starting with "/"
/* app.use("/",(req,res) => {
    res.send("Home page")
}) */

app.use("/test", (req,res) => {
    res.send("Hello from test")
})

// This will override all the below /user methods because it is starting with "/"
app.use("/user" , (req,res) => {
    //save data to DB
    res.send("user details");
})

//This will only handle GET call to /user
app.get("/user", (req,res) => {
    res.send({firstname : "Jyoti" , lastname : "Reddy"});
});

app.post("/user", (req,res) => {
    //save data to DB
    res.send("Data Successfully saved to the database");
});

app.delete("/user" , (req,res) => {
    res.send("User Deleted successfully")
})

//listening on port 3000
app.listen(3000, () => {
    console.log("Server is successfully listening on port 3000...")
});



