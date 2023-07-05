createChild(50);
//this is for creating children in the body
function createChild(createdPost){
  let blogParentPost=$('.blogsParent');
  let picChild;
  for(let i=1; i<=createdPost; i++){
  picChild += '<div class="blogContainer"><div class="blogPicture">this is blog picture</div><div class="blogFooter"><div class="creatorPic"> creator </div><div class="blogInfo"> blog information</div></div></div>';
  blogParentPost.html(picChild);
  }
  let blogCon=$('.blogContainer');
  blogCon.css({
    'display':'grid',
    'gridTemplateRows':'170px 60px',
    'height':'230px',
    'width':'350px',
    'backgroundColor':'white',
    'margin':'5px 5px'
  });
  $('.blogPicture').css({
    'backgroundColor':'lightblue',
  });
  $('.blogFooter').css({
    'display':'grid',
    'gridTemplateColumns':'50px 300px',
    'backgroundColor':'gray',
    'color':'white'
  });
  $('.creatorPic').css({
    'backgroundColor':'lightred',
  });
  $('.blogInfo').css({
    'backgroundColor':'lightgreen',
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