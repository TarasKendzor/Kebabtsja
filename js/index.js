
//Preloader configuration.//
setTimeout(function (){
  $('#preloader').fadeOut('slow');
  $('html').removeClass('hidden')

},3000)
 // To add new section block you should make class name same that nav-anchor id.// 
$('.nav-link').click(function(e){
    e.preventDefault();
    let menuScroll = e.target.id;
    let thisBlock = '.'+ menuScroll;
    $('html, body').animate({
        scrollTop: $(thisBlock).offset().top-75
    },700)
})
  $('#logo-img').click(function(e){
     $('html, body').animate({scrollTop: 0}, 500);
        e.preventDefault();
  })
  
  $('.navbar-nav li a').click(function(){
    $('button').addClass('collapsed')
  }, function(){
    $('#navbarNav').removeClass('show')
  });
  // Food-menu hover.//
  $('.test img').hover(
     function(){
       $(this).next('.submenu').fadeIn(500)
      }, 
     function(){
       $(this).next('.submenu').fadeOut(500)
      },
     );
    

 



