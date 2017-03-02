var userInput = $('#picval').val();
$('#pbutt').on('click', function(){
  $('body').append('<img src="' + userInput + ' "height="90px">');
});

$(document).ready(function(){
	var canvas = $("#myCanvas").get(0);
	// to get the x 
	var context = canvas.getContext("2d"); 
	$(userInput).load(function(){
		context.drawImage(image, 0, 0);
		// putting img on the canvas @ (0,0)
	}});

	$(canvas).click(function(event){
		// make sure x,y coord shows up on the side 
		$('body').append("(" + event.pageX + ", " + event.pageY + ")");
	});
});
	
	// type of grid
