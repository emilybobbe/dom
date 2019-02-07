$(document).ready(function() {
  $("button#cat").click(function() {
    $("ul#cat2").append("<li class='disappear-cat'>meow meow</li>");
    $("ul#cat2").append("<img src='img/cat.jpg'>");
    $("ul#dog2").append("<li>How dare you!</li>");
  });

  $("button#dog").click(function() {
    $("ul#cat2").append("<li>RUDE</li>");
    $("ul#dog2").append("<li>ruff ruff</li>");
  });

  // $(".clickable2").click(function() {
  $("#initially-showing2").toggle();
  // $("#initially-hidden1").toggle();
  // });

  $("#disappear").click(function() {
    $(".disappear-cat").toggle();
  })
});
