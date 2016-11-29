var button = $(".deal-with-it-button")
var counter = true;
$(function() {
  button.click(dealWithIt);
  console.log("HI!");
})

function dealWithIt() {
  if (counter) {
    $("#glasses").animate({top: "+=340"}, 250);
    counter = false;
    button.html("Reset");
  }
  else {
    $("#glasses").animate({top: "-=250"}, 1);
    counter = true;
  }
}