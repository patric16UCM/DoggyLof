$( document ).ready(function() {
    var button = document.getElementById('boton2');
    
    
    document.getElementById('boton2').addEventListener('click', () => {
        $('.popup-wrapper2').css('display','block')
        $('.alimentos').css('display','none')
    });
    document.getElementById('numero').addEventListener('change', () => {
        var num =  $('#numero').value*7;
        $('#frase').innerHTML ="Tienes comida para "+num+"semanas";
    });
    document.getElementById('boton3').addEventListener('click', () => {
        $('.alimentos').css('display','flex')
        $('.popup-wrapper2').css('display','none')
     
    });
     
    $('#popup-close').click(function(){
        $('.popup-wrapper2').css('display','none')
        $('.alimentos').css('display','flex')
    });
    
    });
    
     
    // JavaScript source code
    