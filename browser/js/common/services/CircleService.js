app.factory('CircleService', function() {
	
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

	Circle.prototype.move = function() {
		this.image.style.left = (parseInt(this.image.style.left) + this.directionX) + 'px';
		this.image.style.top = (parseInt(this.image.style.top) + this.directionY) + 'px';
	}


	return Circle;
})