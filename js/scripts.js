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
  return "test";
}
