app.config(function ($stateProvider) {
    $stateProvider.state('home', {
        url: '/',
        templateUrl: 'js/home/home.html',
        controller: 'HomeCtrl'
    });
});

app.controller('HomeCtrl', function($scope, UtilsFactory, MovementFactory, MainCharacterService) {
		$scope.skulls = 0;
    $(document).ready(function() {
    	UtilsFactory.initializeGame();
    	var creatures = UtilsFactory.createCreatureWave();
    	var gems = UtilsFactory.createGemWave();
    	var mainCharacter = new MainCharacterService();
    	var mouseX = $(window).width()/2;
    	var mouseY = $(window).height()/2;
        console.log(mouseX, mouseY)
        var startTime = new Date().getTime();
       

        setInterval(function() {MovementFactory.circleMovement(creatures, mouseX, mouseY, mainCharacter)}, 50);
        setInterval(function() {MovementFactory.circleMovement(gems, mouseX, mouseY, mainCharacter)}, 50);
        setInterval(function() {MovementFactory.backgroundMovement(startTime, mouseX, mouseY, mainCharacter)}, 50);


        $(document).mousemove(function(event){
		    mouseX = event.clientX;
		    mouseY = event.clientY;
		});
            
     
    });
        
});