var express = require('express');

var routes = function(Book) {

  var bookRouter = express.Router();
  var bookController = require('../controllers/bookController')(Book);

  bookRouter.route('/')
  .get(bookController.list)
  .post(bookController.create);

  bookRouter.use('/:bookId', function(request, response, next) {
    Book.findById(request.params.bookId, function(err, book) {
      if(err) {
        response.status(500).send(err);
      } else if (book) {
        request.book = book;
        next();
      } else {
        response.status(404).send('Book not found');
      }
    });
  });

  bookRouter.route('/:bookId')
  .get(bookController.find)
  .patch(bookController.update)
  .delete(bookController.remove);

  return bookRouter;

}

module.exports = routes;
