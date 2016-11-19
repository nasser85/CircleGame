app.factory('MainCharacterService', function() {
	function Character() {
		this.yPos = 1000 + $('#character').position().top;
    	this.xPos = 1000 + $('#character').position().left;
	}

	return Character;
})