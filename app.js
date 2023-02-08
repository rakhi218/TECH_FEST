var express = require('express');
var bodyParser = require('body-parser');
var ejs = require('ejs');
const sql = require('mssql');

const config = {
    user: 'azureUser', // better stored in an app setting such as process.env.DB_USER
    password: 'Pass@123', // better stored in an app setting such as process.env.DB_PASSWORD
    server: 'tech-fest-nittt.database.windows.net', // better stored in an app setting such as process.env.DB_SERVER
    port: 1433, // optional, defaults to 1433, better stored in an app setting such as process.env.DB_PORT
    database: 'TECH_FEST', // better stored in an app setting such as process.env.DB_NAME
    authentication: {
        type: 'default'
    },
    options: {
        encrypt: true 
    }
}

var app = express();
var PORT = 3000;

app.set('view engine','ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"))

app.get("/",(req,res) => {
    res.render("index");
});

app.get("/register",(req,res) => {
    res.render("register.ejs");
})

app.listen(PORT,async() => {
    //var poolConnection = await sql.connect(config);
    console.log(`App listing on port ${PORT}`);
});