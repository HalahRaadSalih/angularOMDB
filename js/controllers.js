var app = angular.module("OMDB");

app.controller('OMDBController', function($scope, $http, $location) {
	$scope.submit = function(form) {
		var movieTitle = $scope.findMovie.replace(' ', '+');
		$scope.results = [];
		// http.get returns a promise, so no need to assign to variable
		$http.get('http://www.omdbapi.com/?s=' + movieTitle).then(function(data){
			$scope.results = data.data.Search;
			console.log($scope.results);
		});
	};
	$scope.singleMovieClick = function() {
		$http.get(href).success(function(data) {
			console.log(data);
		})
	};
});

// app.controller('MovieController', function($scope, $http) {
// 	$scope.results = function() {

// 	}
// });
