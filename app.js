$(function (){


  $(window).scroll(function (event) {
    var y = $(window).scrollTop();
    console.log('y: ' + y);


});


$(window).scroll(function() {
  $( ".wrapper" ).append( "<div class='dot'></div>" );
});



}) //end jquery init
