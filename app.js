var express     = require('express'),
    mongoose    = require('mongoose'),
    bodyParser  = require('body-parser');

var db = mongoose.connect('mongodb://127.0.0.1:27017/bookAPI');
var Book = require('./models/bookModel');

var app = express();
var port = process.env.PORT;

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

var bookRoutes = require('./routes/bookRoutes')(Book);

app.use('/api/books',bookRoutes);

app.get('/',function(request,response){
response.send('WELCOME TO MY API');
});

app.listen(port,function(){
console.log('Gulp is running on port: ' + port);
})
