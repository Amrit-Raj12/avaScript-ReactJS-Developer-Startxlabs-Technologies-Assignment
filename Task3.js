/* 3) You are given with T number of strings. You need to sort the strings according to their first character.
Input :
4
“AXXX”
“UVVVV”
“PGGGG”
“BOOUU”

Output :
“AXXX”
“BOOUU”
“PGGGG”
“UVVVV”  */

var arr = [];
size=prompt("Enter number of string");
var size; 
for(var i=0; i<size; i++) {
    arr[i] = prompt(i+1);
}
arr.sort();
for(var i=0; i<size; i++) {
  console.log(arr[i]);// printing sorted string
}