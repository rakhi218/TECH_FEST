var express = require('express');
var bodyParser = require('body-parser');
var ejs = require('ejs');
var {participate} = require('./ParticipantsSchema');

var app = express();
var PORT = 3000;

app.set('view engine','ejs'); 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"))

app.get("/",(req,res) => {
    res.render("index");  
});

app.listen(PORT,async() => {;
    console.log(`App listing on port ${PORT}`);
});