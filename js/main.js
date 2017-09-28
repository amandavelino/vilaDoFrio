$(document).ready(function(){

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
            // breakpoint from 480 up
            565 : { items: 2 },
            // breakpoint from 600 up
            600 : { items: 3 },            
            // breakpoint from 768 up
            768 : { items: 3 },
            // breakpoint from 991 up
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