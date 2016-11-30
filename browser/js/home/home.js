app.config(function ($stateProvider) {
    $stateProvider.state('home', {
        url: '/play',
        templateUrl: 'js/home/home.html',
        controller: 'HomeCtrl'
    });
});

app.controller('HomeCtrl', function($scope, $rootScope, UtilsFactory, MovementFactory, MainCharacterService, $state) {
        $scope.player = $rootScope.mainCharacter || "1.png";

    $(document).ready(function() {
        var creatures;
        var gems;
        var mainCharacter;
        var mouseX;
        var mouseY;
        var startTime;
        var creatureAnimation;
        var gemAnimation;
        var backgroundAnimation;
        

        function startGame() {
            UtilsFactory.initializeGame();
            creatures = UtilsFactory.createCreatureWave();
            gems = UtilsFactory.createGemWave();
            mainCharacter = new MainCharacterService();
            mainCharacter.skulls = 0;
            mouseX = $(window).width()/2;
            mouseY = $(window).height()/2;
            startTime = new Date().getTime();
            creatureAnimation = setInterval(function() {MovementFactory.circleMovement(creatures, mouseX, mouseY, mainCharacter)}, 50);
            gemAnimation = setInterval(function() {MovementFactory.circleMovement(gems, mouseX, mouseY, mainCharacter)}, 50);
            backgroundAnimation = setInterval(function() {MovementFactory.backgroundMovement(startTime, mouseX, mouseY, mainCharacter)}, 50);
            $scope.game = true;
        }

        function destroyGame() {
            creatures.forEach(function(el) {
                el.image.parentNode.removeChild(el.image);
            });
            gems.forEach(function(el) {
                el.image.parentNode.removeChild(el.image);
            });
            clearInterval(creatureAnimation);
            clearInterval(gemAnimation);
            document.getElementById('game-menu').style.display = 'none';
        }

    	startGame();

        $scope.replay = function() {
            destroyGame();
            startGame();
        }
        $scope.mainMenu = function() {
            destroyGame();
            $state.go("start");
        }
        
        $(document).mousemove(function(event){
		    mouseX = event.clientX;
		    mouseY = event.clientY;
            if (!mainCharacter.alive) {
                clearInterval(backgroundAnimation);
            }
		});
            
     
    });
        
});