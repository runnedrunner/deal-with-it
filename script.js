var button = $(".deal-with-it-button")
var counter = true;
$(function() {
  button.click(dealWithIt);
  console.log("HI!");
})

function dealWithIt() {
  if (counter) {
    $("#glasses").animate({top: "+=350"}, 250);
    counter = false;
    button.html("Reset");
  }
  else {
    $("#glasses").animate({top: "-=350"}, 1);
    counter = true;
  }
}