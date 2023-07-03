$(document).ready(function(){
  $('.fa-solid').hide();
 
  $('.homeContainer').mouseenter(function(){
    $('.home').hide(500),$('.fa-house').show(500);
  });
  $('.homeContainer').mouseleave(function(){
    $('.home').show(500),$('.fa-house').hide(500);
  });
  
  $('.popularPostContainer').mouseenter(function(){
    $('.popularPost').hide(500),$('.fa-fire').show(500);
  });
  $('.popularPostContainer').mouseleave(function(){
    $('.popularPost').show(500),$('.fa-fire').hide(500);
  });
  
  $('.categoriesContainer').mouseenter(function(){
    $('.categories').hide(500),$('.fa-list').show(500);
  });
  $('.categoriesContainer').mouseleave(function(){
    $('.categories').show(500),$('.fa-list').hide(500);
  });

  $('.archivesContainer').mouseenter(function(){
    $('.archives').hide(500),$('.fa-box-archive').show(500);
  });
  $('.archivesContainer').mouseleave(function(){
    $('.archives').show(500),$('.fa-box-archive').hide(500);
  });

  $('.aboutContainer').mouseenter(function(){
    $('.about').hide(500),$('.fa-address-card').show(500);
  });
  $('.aboutContainer').mouseleave(function(){
    $('.about').show(500),$('.fa-address-card').hide(500);
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
