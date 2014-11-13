
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

	$('#sidebar, #sidebar-expand').hover(function(){
		$('#sidebar-expand').css({'display':'block'});
	}, function(){
		$('#sidebar-expand').css({'display':'none'});
	});

	
});