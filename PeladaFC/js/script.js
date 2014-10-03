/**
 * @author Alexandre
 */
$(function(){

$('#jogo-rapido').click(function() {  
	$.mobile.changePage("#pagina-jogo-rapido", "fade");
});
});

$(function(){

$( "#formularioInserir" ).submit(function( event ) {
var a = $( "#un" ).val();
  alert(a);
});
});