app.config(function ($stateProvider) {
    $stateProvider.state('home', {
        url: '/',
        templateUrl: 'js/home/home.html',
        controller: 'HomeCtrl'
    });
});

app.controller('HomeCtrl', function($scope) {
		

        $(document).ready(function() {
        	var background = document.body;
        	background.style.backgroundPosition = "700px, 880px";

        	var x = $(document).width()/2;
        	var y = $(document).height()/2;

	        var begin= new Date().getTime();
	        
	        

	        setInterval(function() {
	           	if (y < $(document).height()/2) {
	           		var up = Math.floor((new Date().getTime()-begin)/5);
			        background.style.backgroundPositionY =  up +'px';
	           	} else {
	           		var down = Math.floor((begin - new Date().getTime())/5);
			        background.style.backgroundPositionY =  down +'px';

	           	}
	           	if (x < $(document).width()/2) {
	           		var left = Math.floor((new Date().getTime()-begin)/5);
			        background.style.backgroundPositionX =  left +'px';
	           	} else {
	           		var right = Math.floor((begin - new Date().getTime())/5);
			        background.style.backgroundPositionX =  right +'px';

	           	}
			            
		           
		    }, 50);


	        $(document).mousemove(function(event){
	        	console.log(event.pageX, event.pageY, $('body').width(), $('body').height());
			    x = event.pageX;
			    y = event.pageY;
			});
	            
         
        })
        
});