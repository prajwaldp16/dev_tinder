const express = require("express");

const app = express();



app.use("/homePage", (req, res) => {
    res.send("Hi, this is the home page");
});

app.use("/aboutPage", (req, res) => {
    res.send("Hi, this is the about page");
});

app.use("/login", (req, res) => {
    res.send("Hi, this is the login page");
});

app.use("/", (req, res) => {
    res.send("Hi, this is a new project");
});

app.listen(3000, () => {
    console.log("Server is started...!");
});

console.log("hi");
