$('#pbutt').on('click', function(){
  var userInput = $('#picval').val();
  $('body').append('<img src="' + userInput + ' "height="90px">');
});

$(document).ready(function(){
	var canvas = $("#myCanvas").get(0);
	<!-- to get as dom element -->
	var context = canvas.getContext("2d");
	});