angular.module('recipeService', [])

	// super simple service
	// each function returns a promise object 
	.factory('Recipes', ['$http',function($http) {
		return {
			get : function() {
				return $http.get('/api/recipes');
			},
			create : function(recipesData) {
				return $http.post('/api/recipes', recipesData);
			},
			delete : function(id) {
				return $http.delete('/api/recipes/' + id);
			}
		}
	}]);