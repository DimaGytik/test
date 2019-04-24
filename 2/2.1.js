var length = Number(prompt('enter length arroy'));
var max = Number(prompt('enter max number in arroy'));

var randomArray = function (length, max) {

   var arr = new Array(length);
   arr.fill();
   result = arr.map(function () {
      return Math.round(Math.random() * max);
   });

   return result;
}

var enterArroy = randomArray(length, max);

var obj = {
   total: 0,
   sum: 0
}

for (var i in enterArroy) {

   if (enterArroy[i] % 3 == 0) {
      obj.total++;
      obj.sum += enterArroy[i];
   }
}

alert('Random arroy = ' + enterArroy + '   Total = ' + obj.total + ', Sum = ' + obj.sum);