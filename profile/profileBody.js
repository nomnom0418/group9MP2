
$(document).ready(function(){
createChild(6);
//this is for creating children in the body
function createChild(createdPost){
  let blogParentPost=$('#yourPost');
  let picChild="";
  for(let i=1; i<=createdPost; i++){
  picChild = picChild + '<div class="blogContainer"><div class="blogPicture">this is blog picture</div><div class="blogFooter"><div class="creatorPic"> creator </div><div class="blogInfo"> blog information</div><div class="editBlog"><div class="dot1"></div><div class="dot2"></div><div class="dot3"><div class="editDelete"><div class="edit">edit</div><div class="delete">delete</div></div></div></div></div></div>';
  blogParentPost.html(picChild);
  }
  let blogCon=$('.blogContainer');
  blogCon.css({
    'display':'grid',
    'gridTemplateRows':'190px 60px',
    'height':'250px',
    'width':'320px',
    'backgroundColor':'white',
    'margin':'5px 5px',
    'border-radius':'5px',
  });
  $('.blogPicture').css({
    'backgroundColor':'lightblue',
  });
  $('.blogFooter').css({
    'display':'grid',
    
    'color':'white'
  });
  $('.creatorPic').css({
    'cursor':'pointer',
    'height':'40px',
    'width':'40px',
  });
  $('.blogInfo').css({
    'cursor':'pointer'
  });
  closeEdit();
  function closeEdit(){
    $('.editBlog').click(function(){
      $('.editDelete').show();
    })
  }  
 //this is for body height 
  let blogsContainerHeight = ((createdPost/3)*305);
  $('.blogsContainer').css({
    'height': blogsContainerHeight +"px"
  });
  let parentBlogsHeight = blogsContainerHeight-4;
  $('.blogsParent').css({
    'height': parentBlogsHeight +"px"
  });
  let bodyHeight = blogsContainerHeight +200;
  $('.mainContainer').css({
    'height': bodyHeight +"px"
  });
}
closeEdit();
$('.editDelete').hide();

})