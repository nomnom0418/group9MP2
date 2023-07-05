createChild(50);

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
  let bodyHeight = (createdPost/3)*305;
  $('.mainContainer').css({
    'height': bodyHeight +"px"
  });
}