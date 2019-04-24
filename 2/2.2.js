var str1 = checkAnagrams(prompt('enter the first string'));
var str2 = checkAnagrams(prompt('enter the second string'));

function checkAnagrams(string) {

  var arr = string.split("");
  return arr.sort().join("");
}

if (str1 == str2) {

  alert('strings anagrams');

}

else {

  alert('not anagrams');

}