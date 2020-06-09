const express = require('express');
const app = express();

const mongoose = require('mongoose');
const postroute = require("./routes/post")
const bodyparser = require('body-parser')


require("dotenv/config")

app.use(bodyparser.json())


mongoose.connect(
process.env.DB_CONNETION,
{ useNewUrlParser: true,useUnifiedTopology: true },
() => {
    console.log("DB Connected")
})


app.get('/',(req,res) => {
    res.send("We are with you !")
})


app.use("/post",postroute);

app.listen(3000);
