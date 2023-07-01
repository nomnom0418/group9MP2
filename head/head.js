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
})
