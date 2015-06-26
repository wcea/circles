$( document ).ready(function() {
    
    var createNew = function(){
    //generate random rgb values using the following
    var random = function(){
        return parseInt(256*(Math.random()))
    };
    
    $(this).append('<span class="circle new-circle top-left" style="background:rgb('+random()+','+random()+','+random()+')"></span>
        <span class="circle new-circle top-right"></span>
        <span class="circle new-circle bottom-left"></span>
        <span class="circle new-circle bottom-right"></span>')
        .off('mouseover').css('background','transparent').children().on('mouseover', createNew);
    }

    //function call on mouseover event
    $('.circle').on('mouseover', createNew );
    
});
