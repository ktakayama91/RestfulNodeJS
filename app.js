var express = require('express'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser');

var db = mongoose.connect('mongodb://127.0.0.1:27017/bookAPI');
var Book = require('./models/bookModel');


var app = express();
var port = process.env.PORT;
var router = express.Router();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

router.route('/books')
  .post(function(req,res) {
    var book = new Book(req.body);

    book.save();
    res.status(201).send(book);

  })
  .get(function(request,response) {
    // var responseJson = {response: "This is my API"};
    Book.find(function(err,books){
      if(err) {
        response.status(500).send(err);
      } else {
          response.json(books);
      }
    });
    // response.json(responseJson);
  });

app.use('/api',router);

app.get('/',function(request,response){
  response.send('WELCOME TO MY API');
});

app.listen(port,function(){
  console.log('Gulp is running on port: ' + port);
})
