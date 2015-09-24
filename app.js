var express = require('express'),
	app = express(),
	path = require('path');
// app.set('views', path.join(__dirname,'views'));
// app.engine('html', require('ejs-express'));

// set the view emgine to ejs
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

require('./routes/route.js')(express, app);
// app.get('/', function(req, res, next){
// 		res.render('index', {title: 'Welcome to the ChatCAT'});
// 	});

// app.get('/chatrooms', function(req, res, next){
// 		res.render('chatrooms', {title: 'Chatrooms'});
// 	})

app.listen(3000, function(){
	console.log('chatCAT is running');
});