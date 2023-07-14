let addChildNumber=6;
let childNumber=6;
console.log(addClick(addChildNumber,childNumber))
function addClick(num,add){
  $('.moreContainer').click(function(){
    num=num+add;
    createChild(num);
  })
  return num;
}

createChild(childNumber);
//this is for creating children in the body
function createChild(passNumber){
  console.log(passNumber)
  let blogParentPost=$('.blogsParent');
  let picChild="";
  for(let i=1; i<=passNumber; i++){
  picChild = picChild+ '<div class="blogContainer blogContainer'+i+'"><div class="blogPicture blogPicture'+i+'"></div><div class="blogFooter blogFooter'+i+'"><div class="creatorPic creatorPic'+i+'"></div><div class="blogInfo blogInfo'+i+'"></div>  </div></div>';
  blogParentPost.html(picChild);
  }

 //this is for body height 
  let blogsContainerHeight=0;
  let parentBlogsHeight =0;
  let bodyHeight =0;
  let screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  let screenHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
  if (screenWidth > 1230){
    blogsContainerHeight = ((passNumber/3)*280);
    $('.blogsContainer').css({
      'height': blogsContainerHeight +"px"
    });
    parentBlogsHeight = blogsContainerHeight-4;
    $('.blogsParent').css({
      'height': parentBlogsHeight +"px"
    });
    bodyHeight = blogsContainerHeight +200;
    $('.mainContainer').css({
      'height': bodyHeight +"px"
    });
  }else if (screenWidth==912 && screenHeight==1368) {
    blogsContainerHeight = ((passNumber/2)*280);
    $('.blogsContainer').css({
      'height': blogsContainerHeight +"px"
    });
    parentBlogsHeight = blogsContainerHeight-4;
    $('.blogsParent').css({
      'height': parentBlogsHeight +"px"
    });
    bodyHeight = blogsContainerHeight +495;
    $('.mainContainer').css({
      'height': bodyHeight +"px"
    });

    
  }else if (screenWidth<=1230 && screenWidth>=824) {
    blogsContainerHeight = ((passNumber/2)*280);
    $('.blogsContainer').css({
      'height': blogsContainerHeight +"px"
    });
    parentBlogsHeight = blogsContainerHeight-4;
    $('.blogsParent').css({
      'height': parentBlogsHeight +"px"
    });
    bodyHeight = blogsContainerHeight +200;
    $('.mainContainer').css({
      'height': bodyHeight +"px"
    });

    } else{
    blogsContainerHeight = (passNumber*280);
    $('.blogsContainer').css({
      'height': blogsContainerHeight +"px"
    });
    parentBlogsHeight = blogsContainerHeight-4;
    $('.blogsParent').css({
      'height': parentBlogsHeight +"px"
    });
    bodyHeight = blogsContainerHeight +200;
    $('.mainContainer').css({
      'height': bodyHeight +"px"
    });
  }
}





