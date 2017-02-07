$("#accordion div").addClass("section");
$(".section p").addClass("blurb");

function accordioning (event) {
  $(".shown").removeClass("shown");
  var target = $(event.currentTarget).children(".blurb");
  target.addClass("shown");
}

$(".section").click(accordioning);
