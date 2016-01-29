var app = angular.module("OMDB");

app.controller('HeaderController', function($scope) {
	$scope.name = 'This is header controller';
});

app.controller('FooterController', function($scope) {
	$scope.name = 'This is footer controller';
});