//TEMPLATING
// const express=require("express");
// const app=express();
// const port=8080;
// app.listen(port,()=>{
//     console.log(`listening on port ${port}`);
// });


//USING EJS
// const express = require("express");
// const app = express();
// const port = 8080;
// app.set("view engine", "ejs");
// app.get("/", (req, res) => {
//     // res.send("this is root");
//     res.render("home.ejs");
// });
// app.listen(port, () => {
//     console.log(`listening on port ${port}`);
// });


//VIEWS DIRECTORY 
// const express = require("express");
// const app = express();
// const path = require("path");
// const port = 8080;
// app.set("view engine", "ejs");
// app.set("views", path.join(__dirname, "/views"));
// app.get("/", (req, res) => {
//     res.render("home.ejs");
// });
// app.get("/hello", (req, res) => {
//     res.send("hello");
// });
// app.listen(port, () => {
//     console.log(`listening on port ${port}`);
// });


//PASSING DATA TO EJS
// const express = require("express");
// const app = express();
// const path = require("path");
// const port = 8080;
// app.set("view engine", "ejs");
// app.set("views", path.join(__dirname, "/views"));
// app.get("/", (req, res) => {
//     res.render("home.ejs");
// });
// app.get("/hello", (req, res) => {
//     res.send("hello");
// });
// app.get("/rolldice", (req, res) => {
//     let diceVal = Math.floor(Math.random()*6)+1
//     // res.render("rolldice.ejs", {num: diceVal});
//     res.render("rolldice.ejs", {diceVal: diceVal});
// });
// app.listen(port, () => {
//     console.log(`listening on port ${port}`);
// });


//INSTAGRAM EJS
// const express = require("express");
// const app = express();
// const path = require("path");
// const port = 8080;
// app.set("view engine", "ejs");
// app.set("views", path.join(__dirname, "/views"));
// app.get("/", (req, res) => {
//     res.render("home.ejs");
// });
// app.get("/ig/:username",(req,res)=>{
//     let{username}=req.params;
//     // console.log(username);
//     res.render("instagram.ejs",{username});
// });
// app.get("/hello", (req, res) => {
//     res.send("hello");
// });
// app.get("/rolldice", (req, res) => {
//     let diceVal = Math.floor(Math.random()*6)+1
//     // res.render("rolldice.ejs", {num: diceVal});
//     res.render("rolldice.ejs", {diceVal: diceVal});
// });
// app.listen(port, () => {
//     console.log(`listening on port ${port}`);
// });


//LOOPS (to print ig follower list)
// const express = require("express");
// const app = express();
// const path = require("path");
// const port = 8080;
// app.set("view engine", "ejs");
// app.set("views", path.join(__dirname, "/views"));
// app.get("/", (req, res) => {
//     res.render("home.ejs");
// });
// app.get("/ig/:username",(req,res)=>{
//     const followers =["adam", "bob", "steve" , "abc"];
//     let{username}=req.params;
//     // console.log(username);
//     // res.render("instagram.ejs",{username});
//     res.render("instagram.ejs",{username, followers});
// });
// app.get("/hello", (req, res) => {
//     res.send("hello");
// });
// app.get("/rolldice", (req, res) => {
//     let diceVal = Math.floor(Math.random()*6)+1
//     // res.render("rolldice.ejs", {num: diceVal});
//     res.render("rolldice.ejs", {diceVal: diceVal});
// });
// app.listen(port, () => {
//     console.log(`listening on port ${port}`);
// });


//INSTAGRAM PAGE WITH EJS
// const express = require("express");
// const app = express();
// const path = require("path");
// const port = 8080;
// app.set("view engine", "ejs");
// app.set("views", path.join(__dirname, "/views"));
// app.get("/", (req, res) => {
//     res.render("home.ejs");
// });
// app.get("/ig/:username",(req,res)=>{
//     let {username}=req.params;
//     const instaData = require ("./data.json");
//     // console.log(InstaData);
//     const data= instaData[username];
//     // console.log(data);
//     if(data){
//         res.render("instagram.ejs",{data});
//     } else {
//        res.render("error.ejs");
//     }
//     });
// app.get("/hello", (req, res) => {
//     res.send("hello");
// });
// app.get("/rolldice", (req, res) => {
//     let diceVal=Math.floor(Math.random()*6)+1;
//     res.render("rolldice.ejs",{diceVal:diceVal});
// });
// app.listen(port, () => {
//     console.log(`listening on port ${port}`);
// });



//SERVING STATIC FILES
const express = require("express");
const app = express();
const path = require("path");
const port = 8080;
// app.use(express.static("public"));
app.use(express.static(path.join(__dirname,"public")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.get("/", (req, res) => {
    res.render("home.ejs");
});
app.get("/ig/:username",(req,res)=>{
    let {username}=req.params;
    const instaData = require ("./data.json");
    // console.log(InstaData);
    const data= instaData[username];
    // console.log(data);
    if(data){
        res.render("instagram.ejs",{data});
    } else {
       res.render("error.ejs");
    }
    });
app.get("/hello", (req, res) => {
    res.send("hello");
});
app.get("/rolldice", (req, res) => {
    let diceVal=Math.floor(Math.random()*6)+1;
    res.render("rolldice.ejs",{diceVal:diceVal});
});
app.listen(port, () => {
    console.log(`listening on port ${port}`);
});

