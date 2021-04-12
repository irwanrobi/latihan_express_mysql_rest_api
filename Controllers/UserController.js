// import express
const express = require("express");

// membuat variable bernama user sebagai router
const user = express.Router();

const getAllUsers = require("../Models/UserModel")

// endpoint "/" dengan method GET
user.get("/", (req, res) => {
    // render json
    res.json(getAllUsers);
})


module.exports = user;