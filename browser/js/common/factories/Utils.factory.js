app.factory('UtilsFactory', [ 'CircleService', function(CircleService) {
	var utilsFactory = {};
	var creatureImages = ['1.png', '2.png', '3.png', '4.png', '5.png', 'skull.png'];

	utilsFactory.initializeGame = function() {
    	document.body.style.backgroundPosition = "700px, 880px";
    	document.body.style.height = '500px';
    	document.body.style.width = '100%';
	}

	utilsFactory.createCreatureWave = function(number) {
		var num = number || 20;
		var img = creatureImages[5];
		var sizes = ['50', '75', '100', '125', '150', '175', '200'];
		var x;
		var y;
		var size;
		var dX;
		var dY;
		var circles = [];
		for (var i = 0; i < num; i ++) {
			x = Math.floor(2000*Math.random()) + $('#character').position().left;
			y = Math.floor(2000*Math.random()) + $('#character').position().top;
			size = sizes[Math.floor(7*Math.random())];
			if (i%4 === 0) {
				dX = 0;
				dY = 5 + Math.floor(3*Math.random());
			} else if (i%3 === 0) {
				dX = 5 + Math.floor(3*Math.random());
				dY = 0;
			} else if (i%2 === 0) {
				dX = 0;
				dY = -5 - Math.floor(3*Math.random());
			} else {
				dX = -5 - Math.floor(3*Math.random());
				dY = 0;
			}
			circles.push(new CircleService(img, x, y, size, dX, dY));
		}
		circles.forEach(function(el) {
	    	document.body.appendChild(el.image);
	    })
		return circles;
	}

	return utilsFactory;

}]);