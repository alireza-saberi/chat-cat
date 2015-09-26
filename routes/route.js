module.exports = function(express, app){
	var router = express.Router();

	router.get('/', function(req, res, next){
		res.render('index', {title: 'Welcome to the ChatCAT'});
	})

	router.get('/chatrooms', function(req, res, next){
		res.render('chatrooms', {title: 'Chatrooms'});
	})

	router.get('/setcolor', function(req,res, next){
		req.session.favColor = "Red";
		res.send('Setting Favourite color!');
	})

	router.get('/getcolor', function(req,res, next){
		req.session.favColor = "Red";
		res.send('Favourite color: ' + (req.session.favColor==undefined ? "Not found":req.session.favColor));
	})

	app.use('/', router);
}