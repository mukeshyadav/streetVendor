var Recipe = require('./models/recipe');

function getRecipes(res){
	Recipe.find(function(err, recipes) {

			// if there is an error retrieving, send the error. nothing after res.send(err) will execute
			if (err)
				res.send(err)

			res.json(recipes); // return all recipes in JSON format
		});
};

module.exports = function(app) {

	// api ---------------------------------------------------------------------
	// get all recipes
	app.get('/api/recipes', function(req, res) {

		// use mongoose to get all recipes in the database
		getRecipes(res);
	});

	// create recipe and send back all recipes after creation
	app.post('/api/recipes', function(req, res) {

		// create a recipe, information comes from AJAX request from Angular
		Recipe.create({
			name         :  req.body.name,
            category     :  req.body.category,
            famous       :  req.body.famous,
            location     :  req.body.location,
            address      :  req.body.address,
            pincode      :  req.body.pincode,
            tel          :  req.body.tel,
            price        :  req.body.price,
            persons      :  req.body.persons,
            lat          :  req.body.lat,
            long         :  req.body.long,
            img          :  req.body.img,
			done         :   false
		}, function(err, recipe) {
			if (err)
				res.send(err);
            //res.end();
			// get and return all the recipes after you create another
			getRecipes(res);
		});
        

	});

	// delete a recipe
	app.delete('/api/recipes/:recipe_id', function(req, res) {
		Recipe.remove({
			_id : req.params.recipe_id
		}, function(err, recipe) {
			if (err)
				res.send(err);

			getRecipes(res);
		});
	});

	// application -------------------------------------------------------------
	app.get('*', function(req, res) {
		res.sendfile('./public/index.html');
	});
};