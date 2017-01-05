  var express = require('express');

  var app = express();

  var port = process.env.PORT || 3000;

  var router = express.Router();

  router.route('/books')
      .get(function(request,response){
        var responseJson = {response: "This is my API"};
        response.json(responseJson);
      });

  app.use('/api',router);

  app.get('/',function(request,response){
    response.send('WELCOME TO MY API');
  });

  app.listen(port,function(){
    console.log('Gulp is running on port: ' + port);
  })
