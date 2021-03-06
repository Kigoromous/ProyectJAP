$( document ).ready(function() {

	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {

	    $("#flipper").click(function(){
				$("#tips").toggleClass("hideElement");
				$("#tips2").toggleClass("hideElement");
				$("#thirdTitulo h2").toggleClass("hideElement");
			});

		$("#mainDatos a").click(function(){
			var midata = $(this).data('info');
			$(".infoPop[data-info=" + midata + "]").removeClass("hidenInfo");
		});
		$(".infoPop .closeArrow").click(function(){
			$(this).parent().addClass("hidenInfo");
		});

		$('#exampleModal').on('show.bs.modal', function (e) {
	    var image = $(e.relatedTarget).attr('src');
	    $(".modalImg").attr("src", image);
	  });

		$('#myModal').on('shown.bs.modal', function () {
	  	$('#myInput').trigger('focus')
		})

	} else {
		$("#flipper").mouseover(function(){
		$("#tips").addClass("hideElement");
		$("#tips2").toggleClass("hideElement");
		$("#thirdTitulo h2").toggleClass("hideElement");
		});

		$("#flipper").mouseout(function(){
			$("#tips").removeClass("hideElement");
			$("#tips2").toggleClass("hideElement");
			$("#thirdTitulo h2").toggleClass("hideElement");
		});

		setTimeout(function(){
			$("#mainNav").toggleClass("hideNav");
			$("#wrapper").toggleClass("principal");
			setTimeout(function(){ $("#botonMenu").toggleClass("hideElement"); }, 2000);
			setTimeout(function(){ $("#botonMenu").toggleClass("hideMenBot"); }, 2250);
		}, 750);

		$('[data-toggle="tooltip"]').tooltip();

	  $('#exampleModal').on('show.bs.modal', function (e) {
	    var image = $(e.relatedTarget).attr('src');
	    $(".modalImg").attr("src", image);
	  });

		//Mostrar y ocultar Datos extra
		$("#mainDatos a").click(function(){
			var midata = $(this).data('info');
			$(".infoPop[data-info=" + midata + "]").removeClass("hidenInfo");
		});
		$(".infoPop .closeArrow").click(function(){
			$(this).parent().addClass("hidenInfo");
		});

		$("#menuClose").click(function(){
			$("#mainNav").toggleClass("hideNav");
			$("#wrapper").toggleClass("principal");
			setTimeout(function(){ $("#botonMenu").toggleClass("hideElement"); }, 2000);
			setTimeout(function(){ $("#botonMenu").toggleClass("hideMenBot"); }, 2250);
		});

		$("#botonMenu").click(function(){
			$("#botonMenu").toggleClass("hideMenBot");
			setTimeout(function(){ $("#botonMenu").toggleClass("hideElement"); }, 750);
			setTimeout(function(){ $("#mainNav").toggleClass("hideNav"); }, 750);
			setTimeout(function(){ $("#wrapper").toggleClass("principal"); }, 750);
		});

		$('#myModal').on('shown.bs.modal', function () {
	  	$('#myInput').trigger('focus')
		})
	}
});
