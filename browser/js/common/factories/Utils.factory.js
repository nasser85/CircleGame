app.factory('UtilsFactory', [ 'CircleService', 'GemService', function(CircleService, GemService) {
	var utilsFactory = {};
	var creatureImages = ['1.png', '2.png', '3.png', '4.png', '5.png', 'skull.png'];
	var colors = ["rgba(0, 250, 250, 0.5)", "rgba(0, 0, 250, 0.5)", "rgba(250, 0, 250, 0.5)", "rgba(250, 250, 0, 0.5)", "rgba(250, 0, 0, 0.5)", "rgba(0, 250, 0, 0.5)"];

	utilsFactory.initializeGame = function() {
    	document.body.style.backgroundPosition = "700px, 880px";
    	document.body.style.height = '500px';
    	document.body.style.width = '100%';
    	document.getElementById('character').style.backgroundColor = colors[Math.floor(6*Math.random())];
    	document.getElementById('character').style.height = '50px';
    	document.getElementById('character').style.width = '50px';
    	document.getElementById('character').style.top = $(window).height()/2 - parseInt(document.getElementById('character').height)/2 + 'px';
    	document.getElementById('character').style.left = $(window).width()/2 - parseInt(document.getElementById('character').width)/2 +'px';
	}

	utilsFactory.createCreatureWave = function(number) {
		var num = number || 40;
		var img = creatureImages[5];
		var sizes = ['50', '75', '100', '125', '150', '175', '200'];
		var x;
		var y;
		var size;
		var dX;
		var dY;
		var circles = [];
		for (var i = 0; i < num; i ++) {
			x = Math.floor(4000*Math.random()) - $(window).width()/2;
			y = Math.floor(4000*Math.random()) - $(window).height()/2;
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

	utilsFactory.createGemWave = function(number) {
		var num = number || 120;
		var gems = [];
		var color;
		var x;
		var y;
		var dX;
		var dY;
		for (var i = 0; i < num; i++) {
			color = colors[Math.floor(6*Math.random())];
			y = Math.floor(4000*Math.random()) + $('#character').position().left;
			x = Math.floor(4000*Math.random()) + $('#character').position().left;
			if (i%4 === 0) {
				dX = 0;
				dY = 7 + Math.floor(4*Math.random());
			} else if (i%3 === 0) {
				dX = 7 + Math.floor(4*Math.random());
				dY = 0;
			} else if (i%2 === 0) {
				dX = 0;
				dY = -7 - Math.floor(4*Math.random());
			} else {
				dX = -7 - Math.floor(4*Math.random());
				dY = 0;
			}
			gems.push(new GemService(color, x, y, dX, dY));
		}
		gems.forEach(function(el) {
	    	document.body.appendChild(el.image);
	    })
		return gems;
	}

	return utilsFactory;

}]);