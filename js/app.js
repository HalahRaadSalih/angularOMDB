var app = angular.module("OMDB", ["ngRoute"]);

app.config(function($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'partials/header.html',
			controller: 'HeaderController'
		}).when('/second', {
			templateUrl: 'partials/footer.html',
			controller: 'FooterController'
		});
});