app.factory('GemService', function() {
	function Gem(color, x, y, directionX, directionY) {
		this.image = document.createElement('DIV');
		this.image.style.backgroundColor = color;
		this.image.className = "gems"
        this.image.style.position = 'absolute';
        this.image.style.left = x + 'px';
        this.image.style.top = y + 'px';
        this.directionX = directionX;
        this.directionY = directionY;
	}

	Gem.prototype.move = function() {
		this.image.style.left = (parseInt(this.image.style.left) + this.directionX) + 'px';
		this.image.style.top = (parseInt(this.image.style.top) + this.directionY) + 'px';
	}


	return Gem;
})