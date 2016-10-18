var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');

var app = express();
var routes = require('./routes');

var PORT = 3000;
app.set('port',process.env.PORT || PORT);
app.set('views',path.join(__dirname,'views'));
app.engine('.hbs', exphbs({
  defautlLayout: 'index',
  partials: path.join(app.get('views'),'partials'),
  extname:'.hbs'
}));
app.set('view engine','.hbs');

app.use('/',routes);

app.use(express.static(path.join(__dirname,'public')));

app.listen(app.get('port'),() => {
  console.log('http://localhost:',app.get('port'));
})
