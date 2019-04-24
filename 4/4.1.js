var str = prompt('Enter string');
var choice = prompt('Select a(tel),b(site),c(address),d(htmlteg)?')
var tel = /(\+?[0-9]{3}\s*[0-9]{2}\s*|[0-9]{2}\s*)?[0-9]{3}-?\s*[0-9]{2}-?\s*[0-9]{2}/g;
var htmlteg = /<[a-z]+?[^><]>/gi;
var address = /([a-z]{0,3}\.{1})?[A-Z]?[a-z]+\s*-?\,?([a-z]{0,3}\.\s*)?[0-9]{1,5}\s*-?\,?([a-z]{0,3}\.\s*)?[0-9]{1,5}/g;
var site = /(https\:\/\/)?(www)?[a-z\.\-\_]+\.[a-z]{2,3}/g;

switch (choice) {
    case 'a':
        resul = str.match(tel);
        break;
    case 'b':
        resul = str.match(site);
        break;
    case 'c':
        resul = str.match(address);
        break;
    case 'd':
        resul = str.match(htmlteg);
        break;
    default:
        resul = ('incorrect input');
}

console.log(resul);