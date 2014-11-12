
$(document).ready(function(){

	
	// MENU
	$('#menu>li').hover(
		function(){
		$('.submenu',this).stop(true,true).fadeIn('fast');
		},
		function(){
		$('.submenu',this).fadeOut('slow');
		}
	);
	
	
});