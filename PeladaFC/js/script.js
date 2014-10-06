/**
 * @author Alexandre
 */
$(function(){

$('#jogo-rapido').click(function() {  
	$.mobile.changePage("#pagina-jogo-rapido", "fade");
});
});

$(function(){

$( "#btInserir" ).click(function( event ) {
var a = $( "#un" ).val();
  alert(a);
$( "#popupInserir" ).popup( "close" );
var listItem = '<li><a href="#"><img src="img/jogador.png" class="ui-li-icon">'+a+'</a></li>';
 $('ul').append(listItem);
 $("#lista-chegada").listview("refresh");
});
});