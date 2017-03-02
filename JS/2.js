$(document).ready(function(){
	var canvas = $("#myCanvas").get(0);

	$('#pbutt').on('click', function(){
	  // $('body').append('<img src="' + userInput + ' "height="90px">');
	  var userInput= $('#picval').val();
	  var img = new Image();
		img.src = userInput;
	// once the user presses go
		var canvas = $("#myCanvas").get(0);
	// to get the x 
		var context = canvas.getContext("2d"); 
	// canvas set up
		$(userInput).load(function(){
			context.drawImage(img, 0, 0);
			// putting img on the canvas @ (0,0)
			data = context.getImageData(x,y,1,1).data;
			$('#info').apppend(data);
		});


	});

	
	$(canvas).click(function(event){
		// make sure x,y coord shows up on the side 
		$('#info').append("(" + event.pageX + ", " + event.pageY + ")");
	});
});
	
	// type of grid
