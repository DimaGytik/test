var str1 = abc(prompt('enter the first string'));
var str2 = abc(prompt('enter the second string'));

function abc(z) {
	var arr = z.split("");
    arr.sort();
   return arr.join("");
}

if (str1 == str2) {
  alert ('strings anagrams');
  }
  else {
     alert ('not anagrams');
  }