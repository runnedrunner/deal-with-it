var button = $(".deal-with-it-button")
var counter = true;
$(function() {
  button.click(dealWithIt);
  console.log("HI!");
})

function dealWithIt() {
  if (counter) {
    $("#glasses").animate({top: "+=250"}, 250);
    counter = false;
  }
  else {
    $("#glasses").animate({top: "-=250"}, 250);
  }
}