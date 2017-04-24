var express = require('express');

var routes = function(Book) {

  var bookRouter = express.Router();
  var bookController = require('../controllers/bookController')(Book);

  bookRouter.route('/')
  .get(bookController.list)
  .post(bookController.create);

  bookRouter.route('/:bookId')
  .get(bookController.find);

  return bookRouter;

}

module.exports = routes;
