var str = prompt('Enter simbol'); 

var right = 0; 

for (var i = 0; i<=str.length; i++) { 
if (str[i]=='(') { 
right++ 

} 
else if (str[i]==')') { 
right-- 

} 
} 

if (str[0] ==')'|| str[str.length-1] =='(' ||  right != 0){
alert('false'); 
}
 else if (str.length == 0) {
alert('incorrect input'); 
} 


else { 
alert('true'); 

} 
 
