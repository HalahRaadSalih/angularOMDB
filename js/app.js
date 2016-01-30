var app = angular.module("OMDB", ["ngRoute"]);

app.config(function($routeProvider) {
	$routeProvider
		.when('/movie', {
			templateUrl: 'partials/movie.html',
			controller: 'OMDBController'
		});
});