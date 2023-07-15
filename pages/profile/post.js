createChild(6);
//this is for creating children in the body
function createChild(createdPost){
  let blogParentPost=$('.parentDiv');
  let picChild="";
  for(let i=1; i<=createdPost; i++){
  picChild = picChild+ '<div class="blogContainer blogContainer'+i+'"><div class="blogPicture blogPicture'+i+'"></div><div class="blogFooter blogFooter'+i+'"><div class="creatorPic creatorPic'+i+'"></div><div class="blogInfo blogInfo'+i+'"></div> <div class="closeOpen closeOpen'+i+'"><div class="dot1"></div><div class="dot2"></div><div class="dot3"></div></div> </div><div class="editDelete editDelete'+i+'"><div class="edit edit'+i+'">edit</div><div class="delete delete'+i+'">delete</div></div></div>';
  blogParentPost.html(picChild);
  }
  let closeOpenArr = [];
  let editDeleteArr= [];
  for(let i=1; i<=createdPost; i++){
    closeOpenArr.push($(".closeOpen"+i+""));
    editDeleteArr.push($(".editDelete"+i+""));
  }
  for(let i=0; i<closeOpenArr.length; i++){
    closeOpenArr[i].click(function(){
      editDeleteArr[i].slideToggle(400);
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