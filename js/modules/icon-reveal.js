$(window).scroll(function(){
    
    $('.section-icon.hide').each(function(){
        
        if($(this).offset().top < $(window).scrollTop() + $(window).height() - 100){
            
            $(this).removeClass('hide');
           
        }
        
    });
})

