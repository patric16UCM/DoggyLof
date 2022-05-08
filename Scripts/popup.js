$( document ).ready(function() {
var button = document.getElementById('boton');


document.getElementById('boton').addEventListener('click', () => {
    $('.popup-wrapper').css('display','block')
});
 
$('#popup-closef').click(function(){
    $('.popup-wrapper').css('display','none')
});
});

 
// JavaScript source code
