// import package yang dibutuhkan
const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();

// import User Controller
const user = require("./Controllers/UserController")

// middleware
app.use(cors());
app.use(express.static(path.join(__dirname, "Public")));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// use Routing user
app.use("/", user);

// listeners untuk jalankan server
app.listen(3000, ()=> {
    console.log("Server terhubung di port 3000");
})