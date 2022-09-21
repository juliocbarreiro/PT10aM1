'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  var j = num.split([]).reverse();
  var total = 0;
  for(let i = 0; i < num.length; i++){
  var aux = j[i] * (2 ** i);
  total = total + aux;
}
return (total);

}

function DecimalABinario(num) {
  // tu codigo aca
var j;
var aux;
var arr = [];
while (num !== 0){
  aux = num % 2;
  num = Math.floor(num / 2);
  arr.push(aux);
}
j = arr.reverse().join("");
return j;
}




module.exports = {
  BinarioADecimal,
  DecimalABinario,
}