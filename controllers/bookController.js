var bookController = function(Book){

  var post = function(request, response) {

    var book = new Book(request.body);

    if(!request.body.title) {
      response.status(400);
      response.send('Title is required');
    } else {
      book.save();
      response.status(201);
      response.send(book);
    }

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

    response.json(request.book);

  }

  var update = function(request, response) {

    if(request.body._id) {
      delete request.body._id;
    }

    for(var p in request.body) {
      request.book[p] = request.body[p];
    }
    
    request.book.save(function(err) {
      if(err) {
        response.status(500).send(err);
      } else {
        response.json(request.book);
      }
    });

  }

  var remove = function(request, response) {

    request.book.remove(function(err) {
      if(err) {
        response.status(500).send(err);
      } else {
        response.status(204).send('Book deleted');
      }
    });

  }

  return {
    create: post,
    list: get,
    find: find,
    update: update,
    remove: remove
  }

}

module.exports = bookController;
