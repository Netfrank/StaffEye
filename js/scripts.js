
$(document).ready(function(){

	// BARRA LATERAL IZQUIERDA

	$('#sidebar').hover(function(){
		$(this).addClass('sidebar');
		$('.information').delay(200).fadeIn();
	}, function(){
		$(this).removeClass('sidebar');
		$('.information').hide();
	});


	// MENÚ DE USUARIO

	$('#user-options, #user-options-menu').hover(function(){
		$('#user-options-menu').show();
	}, function(){
		$('#user-options-menu').hide();
	});


	// BARRA LATERAL DERECHA

	$('#user-options-menu li a').click(function(){
		$('#chatbar').show();
	});

	$('#chatbar-out').click(function(){
		$('#chatbar').hide();
	});

	$('#chatbar').mouseleave(function(){
		$('#chatbar').fadeOut();
	});


	// TABLA DESPLEGABLE

	$("#interviews tr:odd").addClass("odd");
    $("#interviews tr:not(.odd)").hide();
    $("#interviews tr:first-child").show();
    
    $("#interviews tr.odd").click(function(){
        $(this).next("tr").toggle(200);
        $(this).find(".arrow").toggleClass("up");
    });


    $('.comment').focus(function(){
    	valor = $(this).val();
    	if(valor=="Write the reason why you can't accept."){
    		$(this).val('');
    	}
    });

    $('.comment').blur(function(){
    	valor = $(this).val();
    	if(valor==""){
    		$(this).val("Write the reason why you can't accept.");
    	}
    });



	
});