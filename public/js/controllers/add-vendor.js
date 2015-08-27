agentApp
    .controller('AddVendorCtrl', [ '$scope', '$http', 'Recipes',
		function( $scope, $http, Recipes ) {
			
            $scope.vendorData = {};
            $scope.$parent.loading = false;
            
            $scope.createRecipes = function(){
                    
                if( $scope.vendorData !== undefined ) {
                    $scope.$parent.loading = true;
                    
                    Recipes.create($scope.vendorData)
					.success(function(data) {
						$scope.$parent.loading = false;
						$scope.vendorData = {}; // clear the form so our user is ready to enter another
						console.log(data)
					});
                }
                
            };
                
                
//                if ($scope.formData.name != undefined) {
//				$scope.loading = true;
//
//				// call the create function from our service (returns a promise object)
//				Recipes.create($scope.formData)
//
//					// if successful creation, call our get function to get all the new todos
//					.success(function(data) {
//						$scope.loading = false;
//						$scope.formData = {}; // clear the form so our user is ready to enter another
//						$scope.todos = data; // assign our new list of todos
//					});
//			}
            
	}]);