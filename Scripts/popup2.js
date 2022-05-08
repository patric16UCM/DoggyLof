$( document ).ready(function() {
    var button = document.getElementById('boton2');

    
   

    document.getElementById('numero').addEventListener('change', () => {
        var num =  $('#numero').val()*7;
        document.getElementById('frase').innerHTML ="Tienes comida para "+num+" semanas";
    });
    document.getElementById('boton2').addEventListener('click', () => {
        $('.alimentos').css('display','flex')
        $('.popup-wrapper2').css('display','none')
     
    });
     
    $('#popup-close2').click(function(){
        $('.popup-wrapper2').css('display','none')
        $('.alimentos').css('display','flex')
    });
});
 
function abrirPopUP(){
    var num =  $('#numero').val()*7;
    document.getElementById('frase').innerHTML ="Tienes comida para "+num+" semanas";
    $('.popup-wrapper2').css('display','block')
    $('.alimentos').css('display','none')
}
    // JavaScript source code
    