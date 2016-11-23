app.factory('MovementFactory', function() {
	var movementFactory = {};
  var sizes = ['50', '75', '100', '125', '150', '175', '200'];
  var colors = ["rgba(0, 250, 250, 0.5)", "rgba(0, 0, 250, 0.5)", "rgba(250, 0, 250, 0.5)", "rgba(250, 250, 0, 0.5)", "rgba(250, 0, 0, 0.5)", "rgba(0, 250, 0, 0.5)"];
	function randomShake(circle) {
		var movement = Math.floor(4*Math.random());
    var offSet = Math.floor(parseInt(circle.image.width)/20);
   		if (movement === 0) {
   			circle.image.style.top = (parseInt(circle.image.style.top) + offSet) + "px";
   		} else if (movement === 1) {
   			circle.image.style.top = (parseInt(circle.image.style.top) - offSet) + "px";
   		} else if (movement === 2) {
   			circle.image.style.left = (parseInt(circle.image.style.left) + offSet) + "px";
   		} else {
   			circle.image.style.left = (parseInt(circle.image.style.left) - offSet) + "px";
   		}
	}

  function reCreate(circle) {
    var baseMove = 7;
    var factor = 4;
    if (circle.image.tagName == "IMG") {
      circle.image.height = sizes[Math.floor(7*Math.random())];
      circle.image.width = circle.image.height;
      baseMove = 5;
      factor = 3;
    } else {
      circle.image.backgroundColor = colors[Math.floor(6*Math.random())];
    }
    if (circle.directionY > 0) {
      circle.directionY = baseMove + Math.floor(factor*Math.random());
    } else if (circle.directionY < 0) {
      circle.directionY = -baseMove - Math.floor(factor*Math.random());
    } else if (circle.directionX > 0) {
      circle.directionX = baseMove + Math.floor(factor*Math.random());
    } else {
      circle.directionX = -baseMove - Math.floor(factor*Math.random());
    }
  }

  function checkBounds(circle, character) {
    if (parseInt(circle.image.style.left) + parseInt(circle.image.width) + character.xPos < 0) {
      circle.image.style.left = 4500 - character.xPos + 'px';
      circle.image.style.top = Math.floor(3000*Math.random()) + $(window).height()/2 - character.yPos + 'px';
      reCreate(circle);
    }
    if (parseInt(circle.image.style.left) > 4500 - character.xPos) {
      circle.image.style.left = -character.xPos + 'px';
      circle.image.style.top = Math.floor(3000*Math.random()) + $(window).height()/2 - character.yPos + 'px';
      reCreate(circle);
    }
    if (parseInt(circle.image.style.top) + parseInt(circle.image.height) + character.yPos < 0) {
      circle.image.style.top = 4500 - character.xPos + 'px';
      circle.image.style.left = Math.floor(3000*Math.random()) + $(window).width()/2 + - character.xPos + 'px';
      reCreate(circle);
    }
    if (parseInt(circle.image.style.top) > 4500 - character.yPos) {
      circle.image.style.top = -character.yPos + 'px';
      circle.image.style.left = Math.floor(3000*Math.random()) + $(window).width()/2 - character.xPos + 'px';
      reCreate(circle);
    }
  }

  function checkCollision(circle) {
    var character = document.getElementById('character');
    var circleLeft = parseInt(circle.image.style.left);
    var circleRight = circleLeft + parseInt(circle.image.width);
    var circleTop = parseInt(circle.image.style.top);
    var circleBottom = circleTop + parseInt(circle.image.height);
    var left = $(window).width()/2 - parseInt(character.width)/2;
    var right = left + parseInt(character.width);
    var top = $(window).height()/2 - parseInt(character.width)/2;
    var bottom = top + parseInt(character.height);

    if (circle.image.tagName == "DIV") {

      if (circleRight >= left + 10 && circleLeft <= right - 10 && circleTop <= bottom - 10 && circleBottom >= top + 10) {
        if (circle.image.style.backgroundColor == character.style.backgroundColor) {
            character.style.height = parseInt(character.style.height) + 50 + 'px';
            character.style.width = character.style.height;
        } else {
          character.style.backgroundColor = circle.image.style.backgroundColor;
          if (parseInt(character.style.height) > 50) {
            character.style.height = parseInt(character.style.height) - 50 + 'px';
            character.style.width = character.style.height;
          }
        }
        if (circle.directionY > 0) {
          circle.image.style.top = '4000px';
        } else if (circle.directionY < 0) {
          circle.image.style.top = -4000 + 'px';
        } else if (circle.directionX > 0) {
          circle.image.style.left = '4000px';
        } else {
          circle.image.style.left = -4000 +'px';
        }
      }
    } else {
      if (circleRight >= left + 30 && circleLeft <= right - 30 && circleTop <= bottom - 30 && circleBottom >= top + 30) {
        if (parseInt(circle.image.height) < parseInt(character.style.height)) {
            circle.image.className = "magictime puffOut";
            setTimeout(function() {
              if (circle.directionY > 0) {
                circle.image.style.top = '4000px';
              } else if (circle.directionY < 0) {
                circle.image.style.top = -4000 + 'px';
              } else if (circle.directionX > 0) {
                circle.image.style.left = '4000px';
              } else {
                circle.image.style.left = -4000 +'px';
              }
              circle.image.className = "";
            }, 1000)
            
        } else {
          
        }
        
      }
    }
    
    
  }

	movementFactory.circleMovement = function(circles, x, y, character) {
		document.getElementById('character').style.top = $(window).height()/2 - parseInt(document.getElementById('character').height)/2 +'px';
    document.getElementById('character').style.left = $(window).width()/2 - parseInt(document.getElementById('character').width)/2 + 'px';

    circles.forEach(function(el) {
        checkBounds(el, character);
    		el.image.style.left = (parseInt(el.image.style.left) + el.directionX) + "px";
    		el.image.style.top = (parseInt(el.image.style.top) + el.directionY) + "px";
        randomShake(el);
        checkCollision(el);
    	})
       	if (y < $(window).height()/2 && character.yPos > $('#character').position().top) {
	        circles.forEach(function(el) {
           		el.image.style.top = (parseInt(el.image.style.top) + 10) + "px";
           	})
       	} else if (y >= $(window).height()/2 && character.yPos < 3000) {
	        circles.forEach(function(el) {
           		el.image.style.top = (parseInt(el.image.style.top) - 10) + "px";
           	})
       	}
       	if (x < $(window).width()/2 && character.xPos > $('#character').position().left) {
	        circles.forEach(function(el) {
           		el.image.style.left = (parseInt(el.image.style.left) + 10) + "px";
           	})
       	} else if (x >= $(window).width()/2 && character.xPos < 3000) {
	        circles.forEach(function(el) {
           		el.image.style.left = (parseInt(el.image.style.left) - 10) + "px";
           	})
       	}        
	}

	movementFactory.backgroundMovement = function(begin, x, y, character) {
		if (y < $(window).height()/2 && character.yPos > $('#character').position().top) {
       		var up = Math.floor((new Date().getTime()-begin)/5);
	        document.body.style.backgroundPositionY =  up +'px';
	        character.yPos -= 10;
       	} else if (y >= $(window).height()/2 && character.yPos < 3000) {
       		var down = Math.floor((begin - new Date().getTime())/5);
	        document.body.style.backgroundPositionY =  down +'px';
	        character.yPos += 10;
       	}
       	if (x < $(window).width()/2 && character.xPos > $('#character').position().left) {
       		var left = Math.floor((new Date().getTime()-begin)/5);
	        document.body.style.backgroundPositionX =  left +'px';
	        character.xPos -= 10;
       	} else if (x >= $(window).width()/2 && character.xPos < 3000) {
       		var right = Math.floor((begin - new Date().getTime())/5);
	        document.body.style.backgroundPositionX =  right +'px';
	        character.xPos += 10;
       	}
	}




	return movementFactory;
})