// 일정 높이값이 되면 클래스를 추가하거나 없앰

window.addEventListener('scroll', function() {
    if ( checkVisible($('#striking')) ) {
        $('.studios_container').addClass('black');
        $('.w_img').hide();
        $('.b_img').show();
    } else if ( checkVisible($('#unknown')) ) {
        $('.studios_container').addClass('black');
        $('.w_img').hide();
        $('.b_img').show();
    }
});
function checkVisible( elm, eval ) {
    eval = eval || "object visible";
    var viewportHeight = $(window).height(), // Viewport Height
        scrolltop = $(window).scrollTop(), // Scroll Top
        y = $(elm).offset().top,
        elementHeight = $(elm).height();   
    
    if (eval == "object visible") return ((y < (viewportHeight + scrolltop)) && (y > (scrolltop - elementHeight)));
    if (eval == "above") return ((y < (viewportHeight + scrolltop)));
};

// 스크롤 위로 올리면 함수 실행
var lastScrollTop2 = 0, delta = 15;
$(window).scroll(function(){
    var scrollTop = $(this).scrollTop()
    if(Math.abs(lastScrollTop2 - scrollTop) <= delta)
    return;

    if ((scrollTop > lastScrollTop2) && (lastScrollTop2>0)) {

    } else {
        $('.studios_container').removeClass('black');
        $('.b_img').hide();
        $('.w_img').show();
    }

    lastScrollTop2 = scrollTop;
});