var button = $(".deal-with-it-button")

$(function() {
  button.click(dealWithIt);
  console.log("HI!");
})

function dealWithIt() {
  $("#glasses").animate({top: "+=250"}, 250);
  button.
}