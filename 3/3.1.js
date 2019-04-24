var s = Number(prompt('Enter number s'));
var p = Number(prompt('Enter number p'));
var min = s - s * p / 100;
var max = s + s * p / 100;

var arr = new Array(1000);
arr.fill(0);

for (var i in arr) {
    arr[i] = min + (max - min) * Math.random();

}

var result = arr.map(function (elem) {
    return (elem % 10).toFixed(5);
}
);

result.sort(function (a, b) {
    return b - a;
}
);
console.log(result);