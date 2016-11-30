app.config(function ($stateProvider) {
    $stateProvider.state('start', {
        url: '/',
        templateUrl: 'js/start/start.html',
        controller: 'StartCtrl'
    });
});

app.controller('StartCtrl', function($scope, $rootScope, $state) {
	$scope.players = ["1.png", "2.png", "3.png", "4.png"];
	$rootScope.mainCharacter = "1.png";
	$scope.select = function(character) {
		$rootScope.mainCharacter = character;
		$state.go("home");
	}
});