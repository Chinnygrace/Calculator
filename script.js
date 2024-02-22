function clearOutput() {
  document.getElementById('output').value = '0';
 }

 function updateOutput(number) {
  let output = document.getElementById('output');
    if (output.value === '0'  && number !== '.') {
    output.value = number;
    } else if ((output.value + number).length <= 8) {
  output.value += number;
 }
}

function updateSign(sign) {
  document.getElementById('output').value += sign;
 }

function invertSign() {
let output = document.getElementById('output');
if (output.value !== '0' && output.value !== '') {
// Parse the output value as a number
let number = parseFloat(output.value);
// Toggle the sign by multiplying the number by -1
output.value = (-1 * number).toString();
}
}
  