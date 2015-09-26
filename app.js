var express = require('express'),
	app = express(),
	path = require('path'),
	cookieParser = require('cookie-parser'),
	session = require('express-session');
// app.set('views', path.join(__dirname,'views'));
// app.engine('html', require('ejs-express'));

// set the view emgine to ejs
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());
app.use(session({secret:'AliSaberi'}));

require('./routes/route.js')(express, app);

app.listen(3000, function(){
	console.log('chatCAT is running');
});