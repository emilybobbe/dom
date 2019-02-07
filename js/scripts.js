$(document).ready(function() {
  $("button#cat").click(function() {
    $("ul").prepend("<li>meow</li>");
  });

  $("button#dog").click(function() {
    $("ul").prepend("<li>ruff</li>");
  });
});
