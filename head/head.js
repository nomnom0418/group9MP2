$(document).ready(function(){
  $('.fa-solid').hide();
 
  $('.homeContainer').mouseenter(function(){
    $('#homeText').hide(500),$('#homeIcon').show(500);
  });
  $('.homeContainer').mouseleave(function(){
    $('#homeText').show(500),$('#homeIcon').hide(500);
  });
  
  $('.popularPostContainer').mouseenter(function(){
    $('#popularPostText').hide(500),$('#popularPostIcon').show(500);
  });
  $('.popularPostContainer').mouseleave(function(){
    $('#popularPostText').show(500),$('#popularPostIcon').hide(500);
  });
  
  $('.categoriesContainer').mouseenter(function(){
    $('#categoriesText').hide(500),$('#categoriesIcon').show(500);
  });
  $('.categoriesContainer').mouseleave(function(){
    $('#categoriesText').show(500),$('#categoriesIcon').hide(500);
  });

  $('.archivesContainer').mouseenter(function(){
    $('#archivesText').hide(500),$('#archivesIcon').show(500);
  });
  $('.archivesContainer').mouseleave(function(){
    $('#archivesText').show(500),$('#archivesIcon').hide(500);
  });

  $('.aboutContainer').mouseenter(function(){
    $('#aboutText').hide(500),$('#aboutIcon').show(500);
  });
  $('.aboutContainer').mouseleave(function(){
    $('#aboutText').show(500),$('#aboutIcon').hide(500);
  });

  //burger----------------
  /*var menuDisplay = $('.burgerMenusContainer').css('display')
  if ($(window).width() >= 741) {
   menuDisplay = 'none';
  }*/
  $('#burgerCon').click(function(){
    $(this).children().eq(1).toggle();
    var rotationAngle = $(this).children().eq(0).data('rotation') ||0;
    if (rotationAngle === 0) {
      $(this).children().eq(0).css({
        'transform': 'rotate(45deg)',
        'transition-duration': '.3s',
        'top': "+=5px"
      });
      $(this).children().eq(2).css({
        'transform': 'rotate(-45deg)',
        'transition-duration': '.3s',
        'top': "-=6px"
      });
      $('.burgerMenusContainer').show();
      rotationAngle = 45;
    }else{
      $(this).children().eq(0).css({
        'transform': 'rotate(0deg)',
        'transition-duration': '.3s',
        'top': '8px'
      });
      $(this).children().eq(2).css({
        'transform': 'rotate(0deg)',
        'transition-duration': '.3s',
        'top': '20px'
      });
      $('.burgerMenusContainer').hide();
      
      rotationAngle = 0;
    }
    $(this).children().eq(0).data('rotation', rotationAngle);
  })


//for burger menus
  $('.burgerHomeContainer').mouseenter(function(){
    $('#burgerHomeText').hide(500),$('#burgerHomeIcon').show(500);
  });
  $('.burgerHomeContainer').mouseleave(function(){
    $('#burgerHomeText').show(500),$('#burgerHomeIcon').hide(500);
  });

  $('.burgerPopularPostContainer').mouseenter(function(){
    $('#burgerPopularPostText').hide(500),$('#burgerPopularPostIcon').show(500);
  });
  $('.burgerPopularPostContainer').mouseleave(function(){
    $('#burgerPopularPostText').show(500),$('#burgerPopularPostIcon').hide(500);
  });

  $('.burgerCategoriesContainer').mouseenter(function(){
    $('#burgerCategoriesText').hide(500),$('#burgerCategoriesIcon').show(500);
  });
  $('.burgerCategoriesContainer').mouseleave(function(){
    $('#burgerCategoriesText').show(500),$('#burgerCategoriesIcon').hide(500);
  });

  $('.burgerArchivesContainer').mouseenter(function(){
    $('#burgerArchivesText').hide(500),$('#burgerArchivesIcon').show(500);
  });
  $('.burgerArchivesContainer').mouseleave(function(){
    $('#burgerArchivesText').show(500),$('#burgerArchivesIcon').hide(500);
  });

  $('.burgerAboutContainer').mouseenter(function(){
    $('#burgerAboutText').hide(500),$('#burgerAboutIcon').show(500);
  });
  $('.burgerAboutContainer').mouseleave(function(){
    $('#burgerAboutText').show(500),$('#burgerAboutIcon').hide(500);
  });
})