let express=require('express');
let app=express();
let path=require('path');
let port=8989;

let bodyParser=require("body-parser");
app.use(bodyParser.urlencoded({extended:false}));


app.get("/", function(req,res){
res.sendFile(path.join(__dirname+"/home.html"));
});

app.post("/game",function(req,res){
  res.sendFile(path.join(__dirname+"/game-window.html"));
});

app.listen(port,function(){
    console.log("sto in ascolto sulla porta "+port);
  });
