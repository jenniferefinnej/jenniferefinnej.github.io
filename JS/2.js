$(document).ready(function(){
	// var canvas = $("#myCanvas").get(0);
var context = $('canvas').get(0).getContext("2d"); 
	$('#pbutt').on('click', function(){
	  // $('body').append('<img src="' + userInput + ' "height="90px">');
	  var userInput= $('#picval').val();
	  var img = new Image();
		img.src = userInput;
	// once the user presses go
		// var canvas = $("#myCanvas").get(0);
	// to get the x 
		
	// canvas set up
		$(img).load(function(){
			context.drawImage(img, 0, 0);
			// putting img on the canvas @ (0,0)
		});


	});

	
	$("canvas").click(function(event){
		var actualX;
		var actualY;
		// make sure x,y coord shows up on the side 
	
		var canvasGap = $("canvas").offset();
			actualX = Math.floor(event.pageX- canvasGap.left);
			actualY = Math.floor(event.pageY- canvasGap.top);
		$('#info').append("(" + event.pageX + ", " + event.pageY + ")");
		var data = context.getImageData(actualX,actualY,1,1).data;
		

		var pixelData = context.getImageData(actualX, actualY, 1, 1);
		var data = pixelData.data;
		var pixelColor = "rgb(" +data[0] + ", " + data[1]+ ", " + data[2]+ ", " + data[3] + ")";
		$('#info').apppend(pixelColor);
		$("#display").css("backgroundColor", pixelColor);
	});
});
	
	// type of grid
