$( document ).ready(function() {
    $('.carousel').carousel()

    $('#inicio').click(
        function(){
            window.location.href="index.html#imagenInicio"
    })
    $('#beneficios').click(
        function(){
            window.location.href="index.html#imagenBeneficios"
    })
    $('#opiniones').click(
        function(){
            window.location.href="index.html#opinionesDIV"
    })
    $('#aseoramiento').click(
        function(){
            window.location.href="index.html#asesoramiento"
    })
    $('#usar').click(
        function(){
            window.location.href="index.html#productosDIV"
    })
});