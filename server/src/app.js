var express = require('express');
var app = express();
const bodyParser = require('body-parser');
const axios = require('axios');
var request = require('request');

app.use(bodyParser.json());



app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.get('/', (req, res) => {
    res.send('hello');
  });

app.get('/api', (req, res) => {

    request('https://cat-fact.herokuapp.com/facts',  (error, response, body) => {
        if(error) {
            // If there is an error, tell the user 
            res.send('An erorr occured')
        }
        // Otherwise do something with the API data and send a response
        else {
            var fact = JSON.parse(body);
            console.log(fact.all[0].text);
            res.send(fact.all[0].text)
        }
    });
});



module.exports = app;