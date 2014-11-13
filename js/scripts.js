
$(document).ready(function(){
	
	// MENU
	/*$('#menu>li').hover(
		function(){
		$('.submenu',this).stop(true,true).fadeIn('fast');
		},
		function(){
		$('.submenu',this).fadeOut('slow');
		}
	);*/

	$('#sidebar').hover(function(){
		$(this).addClass('sidebar');
		$('.information').delay(200).fadeIn();
	}, function(){
		$(this).removeClass('sidebar');
		$('.information').hide();
	});

	
});