$( document ).ready(function() {
    
    document.getElementById('numVal').addEventListener('change', () => {
        var num =  $('#numVal').val();
        document.getElementById('numCant1').innerHTML =2*num;
        document.getElementById('numCant2').innerHTML =2*num;
        document.getElementById('numCant3').innerHTML =num;
        document.getElementById('precioPack').innerHTML =(9/7*num*3 + 3*8/7*num + 1*16/7*num).toFixed(2);
    });
    document.getElementById('boton4').addEventListener('click', () => {
        $('.alimentos').css('display','flex')
        $('.popup-wrapper3').css('display','none')
     
    });
     
    $('#popup-close3').click(function(){
        $('.popup-wrapper3').css('display','none')
        $('.alimentos').css('display','flex')
        $('#ayudaBtn').css('display','flex')
    });
});
 
function abrirPopUP3(){
    var num =  $('#numVal').val();
    document.getElementById('numCant1').innerHTML =3*num;
    document.getElementById('numCant2').innerHTML =3*num;
    document.getElementById('numCant3').innerHTML =num;
    document.getElementById('precioPack').innerHTML =(9/7*num*3 + 3*8/7*num + 16/7*num).toFixed(2);
    $('.popup-wrapper3').css('display','block')
    $('.alimentos').css('display','none')
    $('#ayudaBtn').css('display','none')
}
    // JavaScript source code
    