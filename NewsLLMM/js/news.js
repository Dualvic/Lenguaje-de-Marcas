/*Cargamos los json de las noticias al cargar la pagina para trabajar con ellos */
var noticiasJSON1;
var noticiasJSON2;
var scroll = false;
var scroll1 = false;
var contadorNoticia = 0;


$(document).ready(function () {
    $("#adv").click(function(){
        $(this).hide(1000);
    });
})




$( document ).ready(function() {
    fechaHora();
    cargarJson();
    $(window).scroll(function() {
        fillNews();
    });
});

function cargarJson()
{
    $.getJSON('data/1.json', function(jsonObject) {
        noticiasJSON1 = jsonObject;
    });

    $.getJSON('data/2.json', function(jsonObject) {
        noticiasJSON2 = jsonObject;
    });

}

function addNews1()
{
    $.each(noticiasJSON1, function(index) {
        $("#blog").append("<div class='col-md-10 blogShort'> <h1>" +
            noticiasJSON1[index].titulo + "</h1> <img src=" +
            noticiasJSON1[index].imagen + " class='pull-left img-responsive thumb margin10 img-thumbnail' width='304' height='236'> <div id='datetime'><span class='glyphicon glyphicon-calendar'></span><em>" +
            noticiasJSON1[index].fecha + "</em></div><hr><article><p>" +
            noticiasJSON1[index].desc + "</p></article></div>");
    });
}

function addNews2()
{
    $.each(noticiasJSON2, function(index) {
        $("#blog").append("<div class='col-md-10 blogShort'> <h1>" +
            noticiasJSON2[index].titulo + "</h1> <img src=" +
            noticiasJSON2[index].imagen + " class='pull-left img-responsive thumb margin10 img-thumbnail' width='304' height='236'> <div id='datetime'><span class='glyphicon glyphicon-calendar'></span><em>" +
            noticiasJSON2[index].fecha + "</em></div><hr><article><p>" +
            noticiasJSON2[index].desc + "</p></article></div>");
    });
}

function fechaHora()
{
    $("#datetime").text( (new Date).getFullYear() );
}

function fillNews()
{
    if($(window).scrollTop() + $(window).height() == $(document).height()) {
        if (scroll == false) {
            addNews1();
            scroll = true;
        }else if(scroll == true && scroll1 == false){
            addNews2();
            scroll1 = true;
        }
    }
}