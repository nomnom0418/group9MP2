$(document).ready(function(){

$('.navIcon').hide();
$('.burgerIcons').hide();
//this is for navbar menu animation
enterLeave($('.homeContainer'),$('#homeText'),$('#homeIcon'))
enterLeave($('.popularPostContainer'),$('#popularPostText'),$('#popularPostIcon'))
enterLeave($('.categoriesContainer'),$('#categoriesText'),$('#categoriesIcon'))
enterLeave($('.archivesContainer'),$('#archivesText'),$('#archivesIcon'))
enterLeave($('.aboutContainer'),$('#aboutText'),$('#aboutIcon'))
//this is for burger menu animation
enterLeave($('.burgerHomeContainer'),$('#burgerHomeText'),$('#burgerHomeIcon'))
enterLeave($('.burgerPopularPostContainer'),$('#burgerPopularPostText'),$('#burgerPopularPostIcon'))
enterLeave($('.burgerCategoriesContainer'),$('#burgerCategoriesText'),$('#burgerCategoriesIcon'))
enterLeave($('.burgerArchivesContainer'),$('#burgerArchivesText'),$('#burgerArchivesIcon'))
enterLeave($('.burgerAboutContainer'),$('#burgerAboutText'),$('#burgerAboutIcon'))
enterLeave($('.burgerProfileContainer'),$('#burgerProfileText'),$('#burgerProfileIcon'))
function enterLeave(enterLeave,text,icon){
    enterLeave.mouseenter(function(){
      text.hide(500),icon.show(500);
   });  
    enterLeave.mouseleave(function(){
      text.show(500),icon.hide(500);
   });
  }
 
/*this is for burger icon animation-----------*/  
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
      $('.burgerMenusContainer').slideDown();
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
      $('.burgerMenusContainer').slideUp();
      
      rotationAngle = 0;
    }
    $(this).children().eq(0).data('rotation', rotationAngle);
  })
  $('#profile').click(function(){
    window.location="../userProfile/userProfile.php?id=";
  })
  $('.homeContainer').click(function(){
    window.location="../home/home1.php";
  })  
})

