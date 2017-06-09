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
  arrayResult.forEach(calculate);
  function calculate(number) {
    if (number % 15 === 0) {
      arrayResult.splice((number-1), 1, "ping-pong");
    } else if (number % 5 === 0) {
      arrayResult.splice((number-1), 1, "pong");
    } else if (number % 3 === 0) {
      arrayResult.splice((number-1), 1, "ping");
    } else {
      return number;
    }
   //var result = (arrayResult.push(number)).toString();
   return result;
  }

}

//arrayResult.splice(number-1, 1);
//function range(start, end) {
  //  var foo = [];
    //for (var i = start; i <= end; i++) {
      //  foo.push(i);
    //}
    //return foo;
//}
