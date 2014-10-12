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
var player = $( "#un" ).val();
$( "#un" ).val("");

$( "#popupInserir" ).popup( "close" );
var currentdate = new Date(); 
var datetime = "" + currentdate.getDate() + "/"
            + (currentdate.getMonth()+1)  + "/" 
            + currentdate.getFullYear() + " - "  
            + currentdate.getHours() + ":"  
            + currentdate.getMinutes() + ":" 
            + currentdate.getSeconds();
var listItem = '<li><img src="img/jogador.png" class="ui-li-icon">'+player+'<span class="ui-li-count">'+datetime+'</span></li>';
 $('#lista-chegada').append(listItem);
 $("#lista-chegada").listview("refresh");
});
});