var express = require('express'),
	app = express(),
	path = require('path'),
	cookieParser = require('cookie-parser'),
	session = require('express-session'),
	config = require('./config/config.js'),
	connectMongo = require('connect-mongo')(session);

// set the view emgine to ejs
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());
var env = process.env.NODE_ENV || 'development';
	if(env === 'development'){
		// dev specific settings
		app.use(session({secret:config.sessionSecret}));
		//app.use(session({secret:'AliSaberi'}));
	} else {
		// production specific settings
		//app.use(session({}));
		app.use(session({
			secret:config.sessionSecret,
			store: new connect-mongo({
				url: config.dbURL,
				stringify: true
			})
		}));
	}

require('./routes/route.js')(express, app);

app.listen(3000, function(){
	console.log('chatCAT is running on port 3000. Press ctrl+C to exit');
	console.log('Mode is ' + env);
});