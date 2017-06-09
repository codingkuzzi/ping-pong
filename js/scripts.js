//FRONT END
$(document).ready(function() {
  $("form#formOne").submit(function(event) {
    event.preventDefault();
    var number = parseInt($("#inputNumber").val());
    $("#result").text(ping_pong(number));
  });
});

// BACK END
var arrayResult = [];
function ping_pong(number) {
  var arrayResult = Array.from({length: number}, (v, k) => k+1);
  arrayResult.forEach(function(number) {
    if (number % 15 === 0) {
      arrayResult.splice((number-1), 1, "ping-pong");
    } else if (number % 5 === 0) {
      arrayResult.splice((number-1), 1, "pong");
    } else if (number % 3 === 0) {
      arrayResult.splice((number-1), 1, "ping");
    } else {
      return arrayResult
    }
   //var result = (arrayResult.push(number)).toString();
  });
  arrayResult.forEach(function(number) {
    $("ul").append("<li>" + number + "</li>");
  });
}
//ranks.forEach(function(rank) {
//      $("ul").append('<li class="' + suit + '">' + rank + " of " + suit + "</li>");
//    });
