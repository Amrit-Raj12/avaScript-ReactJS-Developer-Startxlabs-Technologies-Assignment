/* 2) You are given  two numbers L and R, you have to find if XOR of all the numbers in range L to R (L,R both inclusive) is odd or even.
Input:
The first line will contain T, number of testcases.
Each testcase contains a single line of input, two integers L,R.

Output:
For each testcase, in the new line print "Odd" if the XOR in the range is odd, else print "Even".
Sample Input:
  4
  1 4
  2 6
  3 3
  2 3

Sample Output:
  Even
  Even
  Odd
  Odd  */

  t=prompt("Enter number of testcases");
  var t; 
  for(var i=0; i<t; i++) {
  var arr;   // L,R
  arr = prompt("Enter two integer").split(" ");
  var ans = 0;
  var l = parseInt(arr[0]);
  var r = parseInt(arr[1]);
  for(var j = l;j<=r;j++){
    ans=ans^j;
  }
  if(ans%2==0){
    console.log("Even");
  }
  else{
    console.log("Odd");
  }
}