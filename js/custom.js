// Javascript for Jumpotron Image and Bllur Filter

var jumboHeight = $('.jumbotron').outerHeight();
function parallax(){
    var scrolled = $(window).scrollTop();
    $('.bg').css('height', (jumboHeight-scrolled) + 'px');
}

$(window).scroll(function(e){
    parallax();
});
// modal auto focus

$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').focus()
})
