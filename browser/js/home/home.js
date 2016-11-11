app.config(function ($stateProvider) {
    $stateProvider.state('home', {
        url: '/',
        templateUrl: 'js/home/home.html',
        controller: 'HomeCtrl'
    });
});

app.controller('HomeCtrl', function($scope) {
		
		function Circle(imageUrl, x, y, size, directionX, directionY) {
			this.image = document.createElement('IMG');
	        this.image.src = imageUrl;
	        this.image.height = size.toString();
	        this.image.width = size.toString();
	        this.image.style.position = 'absolute';
	        this.image.style.left = x + 'px';
	        this.image.style.top = y + 'px';
	        this.directionX = directionX;
	        this.directionY = directionY;
		}
		var circles = [];
		var creatureImages = ['1.png', '2.png', '2.png', '4.png', '5.png', 'skull.png'];
		var objectImages = ['green.png', 'yellow.png', 'orange.png', 'blue.png'];

		function createWave() {
			for (var i = 0; i < 10; i ++) {
				circles.push(new Circle(creatureImages[5], Math.floor(2000*Math.random()) + $('#character').position().top, Math.floor(2000*Math.random()) + $('#character').position().top, 100 + Math.floor(100*Math.random())));
			}
		}
		createWave();
		circles.forEach(function(el) {
        	document.body.appendChild(el.image);
        })



        $(document).ready(function() {
        	var background = document.body;
        	background.style.backgroundPosition = "700px, 880px";
        	background.style.height = '500px';
        background.style.width = '100%';
        	var x = $('body').width()/2;
        	var y = $('body').height()/2;
        	var yPos = 1000 + $('#character').position().top;
        	var xPos = 1000 + $('#character').position().left;

	        var begin= new Date().getTime();
	        
	        console.log($('body').width(), $('body').height())

	        setInterval(function() {
	           	if (y < $('body').height()/2 && yPos > $('#character').position().top) {
	           		var up = Math.floor((new Date().getTime()-begin)/5);
			        background.style.backgroundPositionY =  up +'px';
			        yPos -= 10;
			        circles.forEach(function(el) {
		           		el.image.style.top = (parseInt(el.image.style.top) + 10) + "px"
		           		var movement = Math.floor(4*Math.random());
		           		if (movement === 0) {
		           			el.image.style.top = (parseInt(el.image.style.top) + 10) + "px"
		           		} else if (movement === 1) {
		           			el.image.style.top = (parseInt(el.image.style.top) - 10) + "px"
		           		} else if (movement === 2) {
		           			el.image.style.left = (parseInt(el.image.style.left) + 10) + "px"
		           		} else {
		           			el.image.style.left = (parseInt(el.image.style.left) - 10) + "px"
		           		}
		           	})
	           	} else if (y >= $('body').height()/2 && yPos < 3000) {
	           		var down = Math.floor((begin - new Date().getTime())/5);
			        background.style.backgroundPositionY =  down +'px';
			        yPos += 10;
			        circles.forEach(function(el) {
		           		el.image.style.top = (parseInt(el.image.style.top) - 10) + "px"
		           		var movement = Math.floor(4*Math.random());
		           		if (movement === 0) {
		           			el.image.style.top = (parseInt(el.image.style.top) + 10) + "px"
		           		} else if (movement === 1) {
		           			el.image.style.top = (parseInt(el.image.style.top) - 10) + "px"
		           		} else if (movement === 2) {
		           			el.image.style.left = (parseInt(el.image.style.left) + 10) + "px"
		           		} else {
		           			el.image.style.left = (parseInt(el.image.style.left) - 10) + "px"
		           		}
		           	})
	           	}
	           	if (x < $('body').width()/2 && xPos > $('#character').position().left) {
	           		var left = Math.floor((new Date().getTime()-begin)/5);
			        background.style.backgroundPositionX =  left +'px';
			        xPos -= 10;
			        circles.forEach(function(el) {
			        	var movement = Math.floor(4*Math.random());
		           		el.image.style.left = (parseInt(el.image.style.left) + 10) + "px"
		           		if (movement === 0) {
		           			el.image.style.top = (parseInt(el.image.style.top) + 10) + "px"
		           		} else if (movement === 1) {
		           			el.image.style.top = (parseInt(el.image.style.top) - 10) + "px"
		           		} else if (movement === 2) {
		           			el.image.style.left = (parseInt(el.image.style.left) + 10) + "px"
		           		} else {
		           			el.image.style.left = (parseInt(el.image.style.left) - 10) + "px"
		           		}
		           	})
	           	} else if (x >= $('body').width()/2 && xPos < 3000) {
	           		var right = Math.floor((begin - new Date().getTime())/5);
			        background.style.backgroundPositionX =  right +'px';
			        xPos += 10;
			        circles.forEach(function(el) {
			        	var movement = Math.floor(4*Math.random());
		           		el.image.style.left = (parseInt(el.image.style.left) - 10) + "px"
		           		if (movement === 0) {
		           			el.image.style.top = (parseInt(el.image.style.top) + 10) + "px"
		           		} else if (movement === 1) {
		           			el.image.style.top = (parseInt(el.image.style.top) - 10) + "px"
		           		} else if (movement === 2) {
		           			el.image.style.left = (parseInt(el.image.style.left) + 10) + "px"
		           		} else {
		           			el.image.style.left = (parseInt(el.image.style.left) - 10) + "px"
		           		}
		           	})
	           	}        

		    }, 50);


	        $(document).mousemove(function(event){
			    x = event.clientX;
			    y = event.clientY;
			});
	            
         
        })
        
});