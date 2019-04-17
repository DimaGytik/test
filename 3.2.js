var arrName = ['Ivan','Igor','Kirill','Alina','Alla','Dina','Kristina','Larisa','Yana','Dima','Maksim','Rosa','Olga','Oksana','Liya'];
var arrPerson = new Array(100);
arrPerson.fill(0);
var minAge = 1;
var maxAge = 90;


for (var i in arrPerson) {
	
	var human = {
	
	name: arrName[Math.round (arrName.length * Math.random())],

	age: Math.round (minAge + (maxAge - minAge) * Math.random()),
		
	sayHi: function () {
		console.log ('Hi, I am ' +this.name+' '+this.age+' yrs old!');
		}

    };
   
	arrPerson[i] = human;

human.sayHi();
}

