/*1) Get number of hours, minutes and seconds from number of seconds.
For example :  If number of seconds provided are 129 , then number of hours will be 0 , minutes 2, seconds 9.
Input :  Number of seconds.
Output : “Hours = ‘number of hours’, minutes = ‘number of minutes’ , seconds = ‘number of seconds’ ” */

var sec = prompt("Enter number of seconds: ");

var hours = Math.floor(sec / 3600);
sec = sec - hours * 3600;

var minutes = Math.floor(sec / 60);

var seconds = sec - minutes * 60;

alert("Converted time are: " + hours+"hours,"+minutes+"minutes,"+seconds+"seconds");