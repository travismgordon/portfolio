$(function(){

	var canvasHeight = $(window).height();
	var rubyWar = $("#ruby-war");
	var imageHeight = rubyWar.height();
	var lowerBound = canvasHeight - imageHeight;
	var duration = 10000;

	function bannerMoveDown(){
    $("#ruby-war").animate({top:lowerBound}, duration, 'linear', bannerMoveUp);
	}
	function bannerMoveUp(){
	    $("#ruby-war").animate({top:0}, duration, 'linear', bannerMoveDown);
	}
	
	bannerMoveDown();

	// $(document).on('mousemove', function(e){
	// 	$('#ruby-war').css({
	// 		left: e.pageX,
	// 		top: e.pageY

	// 	});
	// });


});
