//FRONT END
$(document).ready(function() {
  $("form#formOne").submit(function(event) {
    event.preventDefault();
    var number = parseInt($("#inputNumber").val());
    $("#result").text(ping_pong(number));
  });
});

// BACK END
function ping_pong(number) {
  for (i = 1; i <= number; i++) {
    if (number % 15 === 0) {
      number = "ping_pong";
      return number;
    } else if (number % 5 === 0) {
      number = "pong";
      return number;
    } else if (number % 3 === 0) {
      number = "ping";
      return number;
    }

  }

}
