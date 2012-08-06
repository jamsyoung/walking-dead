/* Image Comics */
var currentSlide = 0;
function swapFade() {
	var total	= $('#slider div').length;
	var slide1	= '#slide' + currentSlide;
	
	if(currentSlide + 1 > total) {
		currentSlide = 1;
	} else {
		currentSlide++;
	}
	
	var slide2 = '#slide' + currentSlide;
	
	$(slide1).css('left', 0);
	$(slide2).css('left', '0');
	$(slide2).css('display', 'none');
	
	$(slide1).fadeOut('slow');
	$(slide2).fadeIn('slow', function() { setTimeout(swapFade, 10000); });

}