var arrName = ['Ivan', 'Igor', 'Kirill', 'Alina', 'Alla', 'Dina', 'Kristina', 'Larisa', 'Yana', 'Dima', 'Maksim', 'Rosa', 'Olga', 'Oksana', 'Liya'];
var arrPerson = new Array(100);
arrPerson.fill(0);
var minAge = 1;
var maxAge = 90;
var method = {
	sayHi: function () {
		console.log('Hi, I am ' + this.name + ' ' + this.age + ' yrs old!');
	}
}

arrPerson.forEach(function (elem) {
	var human = {

		name: arrName[Math.round((arrName.length - 1) * Math.random())],

		age: Math.round(minAge + (maxAge - minAge) * Math.random())

	}

	elem = human;
	return method.sayHi.call(human);
});








