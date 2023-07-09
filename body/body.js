createChild(50);
//this is for creating children in the body
function createChild(createdPost){
  let blogParentPost=$('.blogsParent');
  let picChild="";
  for(let i=1; i<=createdPost; i++){
  picChild = picChild+ '<div class="blogContainer'+i+'"><div class="blogPicture'+i+'">this is blog picture</div><div class="blogFooter'+i+'"><div class="creatorPic'+i+'"> creator </div><div class="blogInfo'+i+'"> blog information</div></div></div>';
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