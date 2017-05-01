
//
// var dark = $('button');
// dark.attr("class", "switch on");
//1
$("button").click(function(){
  $("body").toggleClass("dark");
  $("h1").toggleClass("dark");
  $("h1").text("Hey, who turned off the lights?");
});
