var app = angular.module("OMDB", ["ngRoute"]);

app.config(function($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'partials/header.html',
			controller: 'Header'
		}).when('/second', {
			templateUrl: 'partials/footer.html',
			controller: 'Footer'
		});
});

app.controller('Header', function($scope) {
	$scope.name = 'This is header controller'
});

app.controller('Footer', function($scope) {
	$scope.name = 'This is footer controller'
});