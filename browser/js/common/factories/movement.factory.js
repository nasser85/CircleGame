app.factory('MovementFactory', function() {
	var movementFactory = {};
	function randomShake(circle) {
		var movement = Math.floor(4*Math.random());
   		if (movement === 0) {
   			circle.image.style.top = (parseInt(circle.image.style.top) + 10) + "px"
   		} else if (movement === 1) {
   			circle.image.style.top = (parseInt(circle.image.style.top) - 10) + "px"
   		} else if (movement === 2) {
   			circle.image.style.left = (parseInt(circle.image.style.left) + 10) + "px"
   		} else {
   			circle.image.style.left = (parseInt(circle.image.style.left) - 10) + "px"
   		}
	}

  function checkBounds(circle) {
    if (parseInt(circle.image.style.left) + parseInt(circle.image.style.width) <= 0) {
      circle.image.style.left = '3000px';
      circle.image.style.top = Math.floor(3000*Math.random()) - parseInt(circle.image.style.height);
    }
    if (parseInt(circle.image.style.left) >= 3000) {
      circle.image.style.left = -circle.image.style.width;
      circle.image.style.top = Math.floor(3000*Math.random()) - parseInt(circle.image.style.height);
    }
    if (parseInt(circle.image.style.top) + parseInt(circle.image.style.height) <= 0) {
      circle.image.style.top = '3000px'
      circle.image.style.left = Math.floor(3000*Math.random()) - parseInt(circle.image.style.width);
    }
    if (parseInt(circle.image.style.top) >= 3000) {
      circle.image.style.top = -circle.image.style.height;
      circle.image.style.left = Math.floor(3000*Math.random()) - parseInt(circle.image.style.width);
    }
  }

	movementFactory.circleMovement = function(circles, x, y, character) {
		circles.forEach(function(el) {
        checkBounds(el);
    		el.image.style.left = (parseInt(el.image.style.left) + el.directionX) + "px"
    		el.image.style.top = (parseInt(el.image.style.top) + el.directionY) + "px"
    	})
       	if (y < $('body').height()/2 && character.yPos > $('#character').position().top) {
	        circles.forEach(function(el) {
           		el.image.style.top = (parseInt(el.image.style.top) + 10) + "px"
           		randomShake(el);
           	})
       	} else if (y >= $('body').height()/2 && character.yPos < 3000) {
	        circles.forEach(function(el) {
           		el.image.style.top = (parseInt(el.image.style.top) - 10) + "px"
           		var movement = Math.floor(4*Math.random());
           		randomShake(el);
           	})
       	}
       	if (x < $('body').width()/2 && character.xPos > $('#character').position().left) {
	        circles.forEach(function(el) {
           		el.image.style.left = (parseInt(el.image.style.left) + 10) + "px"
           		randomShake(el);
           	})
       	} else if (x >= $('body').width()/2 && character.xPos < 3000) {
	        circles.forEach(function(el) {
           		el.image.style.left = (parseInt(el.image.style.left) - 10) + "px"
           		randomShake(el);
           	})
       	}        
	}

	movementFactory.backgroundMovement = function(begin, x, y, character) {
		if (y < $('body').height()/2 && character.yPos > $('#character').position().top) {
       		var up = Math.floor((new Date().getTime()-begin)/5);
	        document.body.style.backgroundPositionY =  up +'px';
	        character.yPos -= 10;
       	} else if (y >= $('body').height()/2 && character.yPos < 3000) {
       		var down = Math.floor((begin - new Date().getTime())/5);
	        document.body.style.backgroundPositionY =  down +'px';
	        character.yPos += 10;
       	}
       	if (x < $('body').width()/2 && character.xPos > $('#character').position().left) {
       		var left = Math.floor((new Date().getTime()-begin)/5);
	        document.body.style.backgroundPositionX =  left +'px';
	        character.xPos -= 10;
       	} else if (x >= $('body').width()/2 && character.xPos < 3000) {
       		var right = Math.floor((begin - new Date().getTime())/5);
	        document.body.style.backgroundPositionX =  right +'px';
	        character.xPos += 10;
       	}
	}




	return movementFactory;
})