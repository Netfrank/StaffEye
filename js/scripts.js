
$(document).ready(function(){	
	
	// INSTANCIA DE PRETTYPHOTO
	
	$("a[rel^='prettyPhoto']").prettyPhoto({
		theme: 'light_square',
		show_title: false,
		social_tools: ''
	});
	
	
	// SLIDER
	
	$("#slider").easySlider({
		auto: true,
		continuous: true,
		speed: 800,
		pause: 3500,
		controlsShow: false
	});
	
	$('#prevBtn, #nextBtn').css({'display':'none'});

	
	// MENU
	$('#menu>li').hover(
		function(){
		$('.submenu',this).stop(true,true).fadeIn('fast');
		},
		function(){
		$('.submenu',this).fadeOut('slow');
		}
	);
	
	
	// ENVIAR MAIL DE CONTACTO
	
	$('#contactar').click(function(){
		nombre = $('#fnombre').val();
		telefono = $('#ftelefono').val();
		email = $('#femail').val();
		consulta = $('#fconsulta').val();
		if(nombre==""){
			$('#lnombre').html('(Campo requerido)');
		} else if(email==""){
			$('#lemail').html('(Campo requerido)');
		} else if(consulta==""){
			$('#lconsulta').html('(Campo requerido)');
		} else {
			$.post('exe/send-contacto.php',{'nombre':nombre,'telefono':telefono,'email':email,'consulta':consulta},function(resp){
				if(resp=="ok"){
					$('#cancelar').trigger('click');
					$('#respuesta').css({'display':'block'});
				} else {
					$('#respuesta').html('<span style="color: red;">Hubo un problema con el envío. Intente de nuevo.</span>');
					$('#respuesta').css({'display':'block'});
				}				
			});
		}
	});
	
	$('#cancelar').click(function(){
		$('#formulario input, #formulario textarea').val('');
	});
	
});