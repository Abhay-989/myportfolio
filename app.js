
const express= require("express");
const app = express();
app.set("view engine","ejs");
const path=require("path");
app.set("views",path.join(__dirname,"/views"));
app.use(express.static('public')); 
app.get("/home",(req,res)=>{
    res.render("Home.ejs")
})
app.get("/",(req,res)=>{
    res.render("Home.ejs")
})
app.get("/about",(req,res)=>{
    res.render("About.ejs")
})
app.get("/skills",(req,res)=>{
    res.render("Skills.ejs")
})
app.get("/project",(req,res)=>{
    res.render("Project.ejs")
})
app.get("/contact",(req,res)=>{
    res.render("Contact.ejs")
})
app.get("/project4",(req,res)=>{
    res.render("index.ejs")
})


app.listen(8080,()=>{
    console.log(`app listening on port 8080`)
})