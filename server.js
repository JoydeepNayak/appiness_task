const express = require('express');
const fs = require('fs');
var bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const loginDetails = require('./mock_data/LoginData.json');
const userDetails = require('./mock_data/UserDetails.json');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
// Login api - user details are hardcoded in LoginData.json file. User gets validated from that file
app.post('/login', (req, res) => {
    var email = req.body.email;
    var password = req.body.password;
    var response = null;
    if (email && password) {
        if ((email === loginDetails.username) && (password === loginDetails.password)) {
            response = {
                status: 200,
                message: "User login success!!"
            }
        } else {
            response = {
                status: 401,
                message: "User login failed!!"
            }
        }
    } else {
        response = {
            status: 401,
            message: "Please fill out the required fields!!"
        }
    }
    res.send(response);
});

app.get('/getUsers', (req, res) => {
    res.send(userDetails)
});

app.listen('8081', () => {
    console.log("server listening to the port 8081:");
})