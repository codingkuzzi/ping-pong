//FRONT END
$(document).ready(function() {
  $("form#formOne").submit(function(event) {
    var number = parseInt($("#inputNumber").val());
    $("#result").text(ping_pong(number));
    event.preventDefault();
    $("#reset").click(function() {
      $("ul").empty();
    });
  });
});

// BACK END
var arrayResult = [];
function ping_pong(number) {
  var arrayResult = Array.from({
    length: number
  }, (v, k) => k + 1);
  arrayResult.forEach(function(number) {
    if (number % 15 === 0) {
      arrayResult.splice((number - 1), 1, "ping-pong");
    } else if (number % 5 === 0) {
      arrayResult.splice((number - 1), 1, "pong");
    } else if (number % 3 === 0) {
      arrayResult.splice((number - 1), 1, "ping");
    } else {
      return arrayResult
    }
  });
  arrayResult.forEach(function(number) {
    $("ul").append("<li>" + number + "</li>");
  });
}
