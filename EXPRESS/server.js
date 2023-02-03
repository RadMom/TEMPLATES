const express=require("express");           
const morgan=require("morgan");             //https://www.npmjs.com/package/morgan
require("dotenv").config();

//MongoDB set-up
const mongoose=require('mongoose');
const db=process.env.MONGO_URL
console.log(db);
mongoose.connect(db,{ useNewUrlParser: true, useUnifiedTopology: true })
.then(result=>app.listen(3000,()=>{
console.log('db is connected and server is live on port 3000');
}))
.catch(err=>{
    console.log(`Some ERR here - ${err}`);
});

const app=express();
const port=3000;

app.set("view engine","ejs");               //https://ejs.co/
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.use(morgan("tiny"))                     

app.get("/",(req,res)=>{
    res.render("home");
});


app.get("/about",(req,res)=>{
    res.render("about");
});

app.get("/create",(req,res)=>{
    res.render("create");
});

app.use((req,res)=>{
    res.status(404).render("404");
})
