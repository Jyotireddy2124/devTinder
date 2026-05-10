const express = require('express');

//creating new server
const app = express();

//using server


app.use("/",(req,res) => {
    res.send("Home page")
})

app.use("/test", (req,res) => {
    res.send("Hello from test")
})

//listening on port 3000
app.listen(3000, () => {
    console.log("Server is successfully listening on port 3000...")
});



