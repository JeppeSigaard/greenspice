$(function(){
  
    $('a').click(function(e){
        var t = $(e.target),
            dest = t.attr('href');
        if(/^#/.test(dest) === true){
            e.preventDefault();
            
            if($(dest).length){
                $('html,body').animate({scrollTop: $(dest).offset().top},1500);   
                
            }
        }
        
        if(t.is('.site-header-nav a') && $(window).width() < 640){
            
            $('body').toggleClass('menu-toggle');
        }
        
    });
    
});