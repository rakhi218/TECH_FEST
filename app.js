var express = require('express');
var bodyParser = require('body-parser');
var ejs = require('ejs');
var mongoose = require('mongoose');
var {participate} = require('./ParticipantsSchema');

var app = express();
var PORT = 3000;

var url = "mongodb+srv://rakesh:rakesh@cluster0.dd37o.mongodb.net/?retryWrites=true&w=majority";
mongoose.set('strictQuery', true);
mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected!");
  })
  .catch((err) => {
    console.log("oh no error");
    console.log(err);
  });

app.set('view engine','ejs'); 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"))

app.get("/",(req,res) => {
    res.render("index");  
});

app.get("/register",(req,res) => {
    res.render("register");
})

app.post("/register",(req,res) => {
    var newParticipant = new participate(
        {
            Name : req.body.Name, 
            Email : req.body.Email, 
            College : req.body.College, 
            Mobile : req.body.Mobile,
            TransactionId : req.body.Transaction
        });

        newParticipant.save(function(err,data) {
            if(err){
                console.log(err);
            }else{
                console.log("Data inserted Successfull");
            }
        })
    console.log(req.body);
    res.redirect("/");
})

app.listen(PORT,async() => {;
    console.log(`App listing on port ${PORT}`);
});