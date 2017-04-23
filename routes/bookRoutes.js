var express = require('express');

var routes = function(Book) {

  var bookRouter = express.Router();

  bookRouter.route('/')
  .get(function(request, response) {
    Book.find(function(err, books){
      if(err) {
        response.status(500).send(err);
      } else {
          response.json(books);
      }
    });
  });

  .post(function(request, response) {
    var book = new Book(req.body);
    book.save();
    res.status(201).send(book);
  })

  return bookRouter;

};

module.exports = routes;
