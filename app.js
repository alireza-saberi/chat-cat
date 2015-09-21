var express = require('express'),
	app = express(),
	path = require('path');
app.set('views', path.join(__dirname,'views'));
app.engine('html', require('hogan-express'));
app.set('view engine', 'html');
app.use(express.static(path.join(__dirname, 'views')));

app.get('/', function(req, res, next){
	// res.send('<h2>Hello World!</h2>');
	res.render('index', {title:'kos nagoo'});
});
// require('./routes/route.js')(express, app);

app.listen(3000, function(){
	console.log('chatCAT is running');
});