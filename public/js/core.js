var agentApp = angular.module('streetRecipe', ['ngRoute', 'recipeService']); //'recipeController', 'recipeService'


agentApp
    .config(['$routeProvider', '$locationProvider', 
             function( $routeProvider, $locationProvider ){
                 
                 $routeProvider
                    .when('/', {
                        controller: 'AddVendorCtrl',
                        templateUrl: 'templates/add-vendor.html'
                    })
                    .otherwise({
                        redirectTo: '/'
                    });
                 
                     $locationProvider.html5Mode({
                        enabled: true
                    });
             }]);

agentApp
    .controller('NavCtrl', [ '$scope', '$route', '$routeParams', '$location', 
		function( $scope, $route, $routeParams, $location ) {
			$scope.heading = "Agent Panel"
	}]);

