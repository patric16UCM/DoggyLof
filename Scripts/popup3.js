$( document ).ready(function() {
    
    document.getElementById('numero').addEventListener('change', () => {
        var num =  $('#numero').val()*7;
        document.getElementById('frase').innerHTML ="Tienes comida para "+num+" semanas";
    });
    document.getElementById('boton4').addEventListener('click', () => {
        $('.alimentos').css('display','flex')
        $('.popup-wrapper3').css('display','none')
     
    });
     
    $('#popup-close3').click(function(){
        $('.popup-wrapper3').css('display','none')
        $('.alimentos').css('display','flex')
    });
});
 
function abrirPopUP3(){
    var num =  $('#numero').val()*7;
    document.getElementById('frase').innerHTML ="Tienes comida para "+num+" semanas";
    $('.popup-wrapper3').css('display','block')
    $('.alimentos').css('display','none')
}
    // JavaScript source code
    