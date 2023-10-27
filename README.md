# JS311_MathApp

<h3>Create an express application that has the following 3 routes: </h3>
<ol>
<li>GET /add - to accept 2 query parameters called: num1, num 2
<br> This route should return the sum of both numbers. Must convert the string of numbers to integers.</li>
<p><b>Example:</b>
<br>
Request: GET /add?num1=5&num2=4
<br>
Response: 9</p>
<li>POST /double/:num - this route accepts a numbeer as a path parameter and returns double the number as a resonse. Must convert the string of numbers to integers.</li>
<p><b>Example:</b>
<br>
Request: POST /double/5
<br>
Response: 10</p>
<li>PUT /multiply - this route accepts 2 numbers in teh request body and returns the product of both numbers. Must convert num1 string to integer.</li>
<p><b>Example:</b>
<br>
Request: PUT /multiply {num1: 15, num2: 3}
<br>
Response: 45</p>
</ol>