app.config(function ($stateProvider) {
    $stateProvider.state('home', {
        url: '/',
        templateUrl: 'js/home/home.html',
        controller: 'HomeCtrl'
    });
});

app.controller('HomeCtrl', function($scope, UtilsFactory, MovementFactory, MainCharacterService) {
		
    $(document).ready(function() {
    	UtilsFactory.initializeGame();
    	var creatures = UtilsFactory.createCreatureWave();
    	var mainCharacter = new MainCharacterService();
    	var mouseX = $('body').width()/2;
    	var mouseY = $('body').height()/2;
        var startTime = new Date().getTime();
       

        setInterval(function() {MovementFactory.circleMovement(creatures, mouseX, mouseY, mainCharacter)}, 50);
        setInterval(function() {MovementFactory.backgroundMovement(startTime, mouseX, mouseY, mainCharacter)}, 50);


        $(document).mousemove(function(event){
		    mouseX = event.clientX;
		    mouseY = event.clientY;
		});
            
     
    });
        
});