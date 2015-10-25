module.exports = function(passport, FacebookStrategy, config, db, mongojs){

	var User = mongojs('chatUsers', ['chatUsers']);
	passport.serializeUser(function(user, done){
		done(null, user.id);
	});

	passport.deserializeUser(function(id, done){
		User.chatUsers.find({'profileID': profile.id}, function(error, user){
			done(error, user);
		});
	});


	// passport.serializeUser(function(user, done) {
	//   done(null, user);
	// });

	// passport.deserializeUser(function(user, done) {
	//   done(null, user);
	// });

	

	passport.use(new FacebookStrategy({
    clientID: config.fb.appID,
    clientSecret: config.fb.appSecret,
    callbackURL: config.fb.callbackURL,
    profileFields: ['id', 'displayName', 'photos']
  },
  function(accessToken, refreshToken, profile, done) {
  	// check if the user exists in our mongoDB database
  	// if not create on and retrun the profile
  	// if the user exist simply return the profile

    User.chatUsers.find({'profileID': profile.id}, function(err, user) {
      if (err) { return done(err); }
      if (user){
      	done(null, user);
      }else{
      	newUser = {
      		"profileID": profile.id,
      		"fullname": profile.displayName,
      		"profilePic": profile.photos[0].value | '' 		
      	};
      	User.chatUsers.insert(newUser, function(error, doc){
      		done(null, newUser);
      	});
      }
    });
  }
));

};