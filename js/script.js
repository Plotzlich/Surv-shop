$(document).ready(function(){
	$.easing.def = "easeOutBounce";
	$('.left_sidebar > ul > li > a').click(function(e){
		var left_nav_nav = $(this).next();
		$('.left_nav_nav').not(left_nav_nav).slideUp('slow');
		left_nav_nav.slideToggle('slow');
		e.preventDefault();
	})	
});