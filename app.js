  var express = require('express');

  var app = express();

  var port = process.env.PORT || 3000;

  app.get('/',function(request,response){
    response.send('WELCOME TO MY API');
  });

  app.listen(port,function(){
    console.log('Gulp is running on port: ' + port);
  })
