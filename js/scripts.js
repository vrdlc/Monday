$(document).ready(function() {

  // $("body").hover(function() {
  //   alert("This is the body.");
  // });

  $("h1").click(function() {
    alert("This is a header.");
  });

//   $("p"). click(function() {
//   alert("This is a paragraph.");
// });

  $("img").dblclick(function() {
    alert("This is an image.");
  });

  $("h2").click(function() {
    alert("This is a smaller header.");
  });

  $(".clickable-food").click(function(){
    $(".food-hidden").toggle();
  });
  $(".clickable").click(function(){
    $(".list-hidden").toggle();
  });

});
