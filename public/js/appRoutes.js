angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		// home page
		.when('/', {
			templateUrl: 'views/home.html',
			controller: 'ChallengeListController'
		})

		.when('/create', {
			templateUrl: 'views/create.html',
			controller: 'CreateChallengeController'
		});

	$locationProvider.html5Mode(true);

}]);
