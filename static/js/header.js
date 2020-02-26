$(document).ready(function () {
    header.initializeScrollListener();
});

header = {};
header.initializeScrollListener = function ()
{
    $(document).on('scroll', function () {
        header.adjustNavbarSize();
    });
};

header.adjustNavbarSize = function ()
{
    console.log($(document).scrollTop());
    $(document).unbind('scroll')
    if ($(document).scrollTop() <= 50) {
        $('#navigation').animate({
            height: '80px'
        }, 200, function () {
            header.initializeScrollListener();
        });
    } else {
        $('#navigation').animate({
            height: '50px'
        }, 200, function () {
            header.initializeScrollListener();
        });
    }
}