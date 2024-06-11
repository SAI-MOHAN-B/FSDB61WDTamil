var arr = [23,24,25,"guvi"]
// Array Index always starts with 0
//How to access the array elements
// Syntax: var element = arrayname[indexnumber]
console.log(arr[1]);
//Array length;
// Syntax: arrayname.length
console.log(arr.length);
for(var i=0;i<arr.length;i++){
console.log(arr[i]);
}

// Conversion of string to array
var str = "guvi geek";
var ajees = str.split(" ");
console.log(ajees)


// Cpnversion of Array to string
const elements = ['Fire', 'Air', 'Water',32,33];
console.log(elements.join(" "))
