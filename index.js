window.addEventListener('DOMContentLoaded', function() {
  let myImage1 = document.getElementById('myImg1');
  let myImage2 = document.getElementById('myImg2');
  let myImage3 = document.getElementById('myImg3');
  function updateImageSrc() {
    if (window.matchMedia('(520px <= width <= 820px)').matches) {
      myImage1.src = 'blogImages/natureImage2.png'; // Change image for smaller screens
      myImage2.src = 'blogImages/foodImage2.png';
      myImage3.src = 'blogImages/techImage2.png';
    } 
    else{
      myImage1.src = 'blogImages/natureImage1.png';
      myImage2.src = 'blogImages/foodImage1.jpg';
      myImage3.src = 'blogImages/techImage1.png';
    }
  }

  // Call the function initially
  updateImageSrc();

  // Call the function whenever the window is resized
  window.addEventListener('resize', updateImageSrc);
});

//form
function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}