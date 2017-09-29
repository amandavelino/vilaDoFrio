var botaoMenu = $("#menu-mobile"),
header = $("#hd-principal"),
menu = $(".nav-menu"),
logo = $(".logo > img"),
scrolled = $(window).scrollTop();

function goToSessao(e)
{
    var sessao = $(e).offset().top - 71;
    $("html, body").stop().animate({ scrollTop: sessao }, 700, "easeInOutQuad", function(){});
}//end goToSessao

function openMenu()
{
    header.stop().animate({
        height: "240px"
    }, 500, "easeInOutQuad", function() {
        $(this).addClass("menu-ativo");
    }); 
}//end openMenu

function closeMenu()
{
    header.stop().animate({
        height: "78px"
    }, 500, "easeInOutQuad", function() {
        $(this).removeClass("menu-ativo");
    });  
}//end closeMenu

$(document).ready(function(){

    $(menu).find(".link-menu").click(function(event)
    {
        closeMenu();
        var sessao = $(this).attr("href");
        $(".ativo").removeClass("ativo");
        if(!$(this).hasClass("ativo")){
            $(this).addClass("ativo");
        }//end if
        goToSessao(sessao);
        return false;
    });//

    //Menu Mobile
    botaoMenu.click(function(){

        if(!header.hasClass("menu-ativo")){
            openMenu();
        }else{
            closeMenu();
        }
        return false;
    });//

    //Galeria Apartamento
    $('.owl-galeria-apartamento').owlCarousel({
        //autoplay: true,
        //autoplayTimeout: 7000,
        //autoplayHoverPause: true,
        items: 2,
        loop: true,
        margin: 25,
        nav: true,
        navText: ['<i class="fa fa-chevron-left" aria-hidden="true"></i>','<i class="fa fa-chevron-right" aria-hidden="true"></i>'],
        smartSpeed: 600,
        responsive:
        {
            // breakpoint from 0 up
            0 : { items: 1 },
            // breakpoint from 565 up
            565 : { items: 2 },
            // breakpoint from 600 up
            600 : { items: 3 },            
            // breakpoint from 768 up
            768 : { items: 3 },
            // breakpoint from 992 up
            992 : { items: 2 }  
        }              
    });

    //Galeria Lazer
    $('.owl-galeria-lazer').owlCarousel({
        //autoplay: true,
        //autoplayTimeout: 8000,
        //autoplayHoverPause: true,        
        items: 1,
        loop: true,
        margin: 0,
        nav: true,
        navText: ['<i class="fa fa-chevron-left" aria-hidden="true"></i>','<i class="fa fa-chevron-right" aria-hidden="true"></i>'],
        smartSpeed: 900        
    });    

    //Informações
    $(".aba > a").on("click", function(){

        var sessao = $(this).attr("href");
        console.log(sessao);

        //Removendo e ativando os estados selecionados das abas
        $(".selecionada").removeClass("selecionada");
        $(this).addClass("selecionada");

        //Removendo e ativando os estados selecionados das boxes
        $(".box-selecionada").removeClass("box-selecionada");
        $(sessao).addClass("box-selecionada");

        return false;

    });

});//