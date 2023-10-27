let express = require("express")
let PORT = 8001
let app = express();
app.use(express.json())

//VERBS: Get, Post, Delete, Put 

// to define the requewsts that your app will respond to, you need to identify the: 
// 1. Verb
// 2. Route


//there are 3 different ways to pass in information from front end to the back end 
// 1. query parameter (if information is not required)
app.get("/hello", function (req,res){
  let name = req.query.name;
  let title = req.query.title;
  let fullName;
  if (name && title) {
    fullName = title + " "+ name;
  }
  else if (name) {
    fullName = name;
  }
  else if (title) { 
    fullName = title;
  }
  else {
    fullName = "Partner"
  }
  res.send(`Hello there ${fullName}, how are you today? This is a query parameter.`);

});


// 2. Route or Path parameter (if information is required)
app.post("/hello/:name",function(req, res){
  let name = req.params.name
  res.send(`Hello ${name} how are you today? This is a route or path parameter.`);
});


// 3. Request body (if information is not required)
app.put("/hello", function(req,res){
  let name = req.body.name;
  let title = req.body.title;

  let fullName;
  if(name && title){
    fullName = title+" "+name;
  }
  else if (name){
    fullName = name;
  }
  else if (title){
    fullName = title;
  } else {
    fullName = "Buddy"
  }
  res.send(`Hello There ${fullName}. It's a nice day, yes?`);
})


app.listen(PORT, function (){
  console.log("Application Started on Port", PORT)
});