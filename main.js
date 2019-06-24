var log = function () {
    console.log.apply('console', arguments);
}

var windowsHeight = window.innerHeight;
var headerHeight = $('header').outerHeight();
var searchHeight = $('.search').outerHeight();
var chatsHeight = windowsHeight - headerHeight - searchHeight;
$('.chats-list').css('height', chatsHeight);
$('.chat-content').css('height', chatsHeight);


var action = true;
$('.drop-down').on('click', function () {
    if (action === true) {
        $('.down-list').addClass('active');
        action = false;
    } else {
        $('.down-list').removeClass('active');
        action = true;
    }
})


function active(elemt) {
    var a = $(elemt)
    $(a).on('click', function(){
        $(a).removeClass('active')
        $(this).addClass('active')
    })
}

var b = $('.items li')
var c = $('.part li')
var d = $('.chats-list li')
active(b)
active(c)
active(d)
