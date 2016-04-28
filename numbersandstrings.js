var count = 0;
var sum = 0;
var avg;
var concatString = "";

displayInput ();

//relied heavily on week one assignment and stack overflow
$('#submit').on('click', calculateInput);
function calculateInput(evt) {
  var val = $('#input').val();
  var num = +val;
  if (isNaN(num)) {
    calculateString(val);
  } else {
    calculateNumbers(num);
  }
  evt.preventDefault(); //what's the difference between this and return false;?
}

$('#reset').on('click', reset);
function reset() {
  count = 0;
  sum = 0;
  avg = 0;
  string = "";
  
  displayInput ();
}

function calculateNumbers(number) {
  ++count;
  sum += number;
  if (count > 0) {
    avg = sum / count;
  } else {
    avg = undefined;
  }
  
  displayInput ();
}

function calculateString (string) {
  concatString += string;
  
  displayInput();
}

function displayInput () {
  show('#myNumbers', count);
  show('#sum', sum);
  show('#avg', avg);
  show('#string', concatString);
}

//referred back to assignment one
function show (selector, value) { 
  if (value === undefined) {
    $(selector).empty();
  } else {
    $(selector).text(value);
  }
}
               
               
               