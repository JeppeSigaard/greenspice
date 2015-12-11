var flipHeader = function(){
        
    var breakPoint = $('.hero').innerHeight() - $('.site-header').innerHeight()*2;
    
    if($(window).scrollTop() > breakPoint){
        
        $('.site-header').addClass('bg');
    }
    else{
        $('.site-header').removeClass('bg');
    }
    
}

$(document).ready(function(){
    flipHeader();
});
$(window).scroll(function(){
    flipHeader();
});