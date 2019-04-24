var str = prompt('Enter simbol');

var counter = 0;

for (var i = 0; i <= str.length; i++) {

      if (str[i] == '(') {
            counter++;
      }

      if (str[i] == ')') {
            counter--;
      }

      if (counter < 0) {
            break;
      }
}

if (str.length == 0 || counter < 0) {
      alert('incorrect input');
}


else {
      alert('true');

}

