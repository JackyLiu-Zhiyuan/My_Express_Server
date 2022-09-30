const express = require('express');
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.get("/",function(request,response){
  response.send("<h1>Hello World</h1>");
})

app.get("/about",function(request,response){
  response.send("I am Jacky, and I am a bodybuilder,");
})

app.get("/contact",function(request,response){
  response.send("Email: zl2887@columbia.edu");
})

app.get("/hobbies",function(request,response){
  response.send("I like basketball.");
})
