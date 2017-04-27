var should = require('should'),
    sinon = require('sinon');

describe('Book Controller Test',function() {
  describe('Create', function() {
    it('Should not allow an empty title on post', function() {
      var Book = function(book){this.save = function(){}};

      var request = {
        body: {
          author: 'Author Test'
        }
      }

      var response = {
        status: sinon.spy(),
        send: sinon.spy()
      }

      var bookController = require('../controllers/bookController')(Book);

      bookController.create(request,response);

      response.status.calledWith(400).should.equal(true, 'Bad Status ' + response.status.args[0][0]);
      response.send.calledWith('Title is required').should.equal(true);

    });
  });
});
