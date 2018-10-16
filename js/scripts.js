$(document).ready(function(){
  $("button#bark").click(function(){
    $("h4").remove();
    $("h1#message").after("<h4>Bark!!!</h4>");

  });
  $("button#meow").click(function(){
    $("h4").remove();
    $("h1#message").after("<h4>Meow!!!</h4>");
  });
});
