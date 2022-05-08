$( document ).ready(function() {
    $('.carousel').carousel()

    $('#inicio').click(
        function(){
            window.location.hash="#imagenInicio"
    })
    $('#beneficios').click(
        function(){
            window.location.hash="#imagenBeneficios"
    })
    $('#opiniones').click(
        function(){
            window.location.hash="#opinionesDIV"
    })
    $('#aseoramiento').click(
        function(){
            window.location.hash="#asesoramiento"
    })
    $('#usar').click(
        function(){
            window.location.hash="#productosDIV"
    })
});