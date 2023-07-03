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
  $('#burgerCon').click(function(){
    $(this).children().eq(1).toggle();
    var rotationAngle = $(this).children().eq(0).data('rotation') ||0;
    if (rotationAngle === 0) {
      $(this).children().eq(0).css({
        'transform': 'rotate(45deg)',
        'top': "+=5px"
      });
      $(this).children().eq(2).css({
        'transform': 'rotate(-45deg)',
        'top': "-=6px"
      });
      rotationAngle = 45;
    }else{
      $(this).children().eq(0).css({
        'transform': 'rotate(0deg)',
        'top': '8px'
      });
      $(this).children().eq(2).css({
        'transform': 'rotate(0deg)',
        'top': '20px'
      });
      rotationAngle = 0;
    }
    $(this).children().eq(0).data('rotation', rotationAngle);
  })

})
