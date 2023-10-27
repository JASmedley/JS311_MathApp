let express = require("express")
let PORT = 8001
let app = express();
app.use(express.json())


//GET /add - to accept 2 query parameters called: num1, num 2
app.get("/add", function (req,res){
  let num1 = req.query.num1;
  let num2 = req.query.num2;
  let Product = parseInt(num1) + parseInt(num2)
  res.json(Product);

});

//POST /double/:num - this route accepts a numbeer as a path parameter and returns double the number as a resonse. Must convert the string of numbers to integers.
app.post("/double/:num",function(req, res){
  let num = req.params.num
  let DoubleIt = 2 * parseInt(num)
  res.json(DoubleIt);
});


// PUT /multiply - this route accepts 2 numbers in teh request body and returns the product of both numbers. Must convert num1 string to integer.
app.put("/multiply", function(req,res){
  let num1 = req.body.num1
  let num2 = req.body.num2
  let Multiply = parseInt(num1) * num2
  res.json(Multiply);
})


app.listen(PORT, function (){
  console.log("Application Started on Port", PORT)
});