$(document).ready(function(){
    $('.owl-carousel').each(function(){
        var itemsDesk = $(this).data('md-qnt') || 1,
            itemsTabl = $(this).data('sm-qnt') || 1,
            itemsMobi = $(this).data('xs-qnt') || 1,
            margin    = $(this).data('margin') || 10;

        $(this).owlCarousel({
            loop: true,
            margin: margin,
            responsiveClass: true,
            video: true,
            lazyLoad:true,
            animateIn: 'fadeIn',
            animateOut: 'fadeOut',
            autoplay:true,
            autoplayTimeout:5000,
            autoplayHoverPause:true,
            nav: false,
            responsive:{
                0:{
                    items: itemsMobi,
                    nav: false
                },
                768:{
                    items: itemsTabl,
                    nav: false
                },
                992:{
                    items: itemsDesk,
                    nav: false
                }
            }
        });
    });

    $('[data-event="prev"]').on('click', function(event){
        event.preventDefault();

        var target = $(this).attr('href');
        // $(target).trigger("owl.prev");
        $(target).trigger("prev.owl");
    });

    $('[data-event="next"]').on('click', function(event){
        event.preventDefault();

        var target = $(this).attr('href');
        // $(target).trigger("owl.next");
        $(target).trigger("next.owl");
    });
});

$("[data-collapsing]").click(function(){
    var icone = $(this).find('.icone'),
        status = $(this).data('collapsing')
        fa = $(icone).find('.fa');

    if( $(this).hasClass("open")){
        $(this).removeClass("open");
    }else{
        $(this).addClass("open");
    }

    if (icone.hasClass("close")){
        icone.removeClass("close");

        $(fa).removeClass("fa-minus");
        $(fa).addClass("fa-plus");
    }else{
        icone.addClass("close");;

        $(fa).removeClass("fa-plus");
        $(fa).addClass("fa-minus");
    }
});

function makeVideo(url, modal){
    var idVideo = url.replace('https://www.youtube.com/watch?v=','');
    var iframe = '<iframe src="https://www.youtube.com/embed/'+idVideo+'" frameborder="0" allowfullscreen=""></iframe>';


    $( modal ).find('.iframe-modal').html(iframe);


    $( modal ).on('hidden.bs.modal', function (e) {
      $( modal ).find('.iframe-modal').html("");
    });
    $( modal ).on('hide.bs.modal', function (e) {
      $( modal ).find('.iframe-modal').html("");
    });

    $( modal ).modal({
      keyboard: false
    });
}

$("[data-youtube]").click(function() {
    var t       =   $(this),
        url     =   t.data('youtube'),
        modal   =   t.data('modal');

        makeVideo(url, modal);
});

$("[data-youtube]").each(function() {
    var data = $(this).data("youtube");
    var id = data.replace('https://www.youtube.com/watch?v=','');
    var item = '<img src="https://img.youtube.com/vi/'+id+'/hqdefault.jpg" alt="" class="img-responsive" />';
    
    var alvo = $(this).find('.picture');
    alvo.html( item );
    
});

