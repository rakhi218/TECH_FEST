var express = require('express');
var bodyParser = require('body-parser');
var ejs = require('ejs');

var app = express();
var PORT = 3000;

app.set('view engine','ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"))

app.get("/",(req,res) => {
    res.render("index");
});


app.listen(PORT,async() => {
    //var poolConnection = await sql.connect(config);
    console.log(`App listing on port ${PORT}`);
});