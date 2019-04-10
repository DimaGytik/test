var arr = [1, 2, 3, 3, 6, 9, 0, 0];
var obj = {
total: 0,
sum: 0
}

for (var i in arr) {
	if(arr[i]%3==0) {
		obj.total++;
		obj.sum+=arr[i];
	}
}
console.log(arr);
console.log("Total = " + obj.total + ", Sum = " + obj.sum);