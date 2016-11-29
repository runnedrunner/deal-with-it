var button = $(".deal-with-it-button")

$(function() {
  button.click(dealWithIt);
  console.log("HI!");
})

function dealWithIt() {
    $("#glasses").animate({left: "+=50"}, 1500)
}