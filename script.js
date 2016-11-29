var button = $()

$(function() {
  button.click(dealWithIt)
  console.log("HI!");
})

function dealWithIt() {
    $("#glasses").animate({}, 1500)
}