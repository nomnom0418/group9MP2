createChild(120);

function createChild(createdPost){
  let parent=$('.blogsParent');
  let newChild;
  for(let i=1; i<=createdPost; i++){
  newChild += '<div class="createdChild"> new element</div>';
  parent.html(newChild);
  }
  let createdChild=$('.createdChild');
  createdChild.css({
    'height':'250px',
    'width':'350px',
    'backgroundColor':'white',
    'margin':'5px 5px'
  });
  
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