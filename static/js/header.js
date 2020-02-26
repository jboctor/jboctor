$(document).ready(function () {
    window.addEventListener('scroll', header.adjustNavbarSize);
});

header = {};
header.adjustNavbarSize = function ()
{
    if (window.scrollY <= 50 && $('#navigation').outerHeight() != 80) {
        window.removeEventListener('scroll', header.adjustNavbarSize);
        $('#navigation').animate({
            height: '80px'
        }, 200, function (){
            window.addEventListener('scroll', header.adjustNavbarSize);
        });
    } else if (window.scrollY > 50 && $('#navigation').outerHeight() != 50) {
        window.removeEventListener('scroll', header.adjustNavbarSize);
        $('#navigation').animate({
            height: '50px'
        }, 200, function (){
            window.addEventListener('scroll', header.adjustNavbarSize);
        });
    }
}