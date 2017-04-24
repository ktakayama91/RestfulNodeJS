var bookController = function(Book){

  var post = function(request, response) {
    var book = new Book(request.body);
    book.save();
    response.status(201).send(book);
  }

  var get = function(request, response) {
    var query = {};
    if(request.query.genre) {
      query.genre = request.query.genre;
    }
    Book.find(query, function(err, books){
      if(err) {
        response.status(500).send(err);
      } else {
          response.json(books);
      }
    });
  }

  var find = function(request, response) {
    Book.findById(request.params.bookId, function(err, book) {
      if(err) {
        response.status(500).send(err);
      } else {
        response.json(book);
      }
    });
  }

  return {
    create: post,
    list: get,
    find: find
  }

}

module.exports = bookController;
