/*     Exercises: Level 1 

Q. Use the Date object to do the following activities 
o What is the year today? 
o What is the month today as a number? 
o What is the date today? 
o What is the day today as a number? 
o What is the hours now? 
o What is the minutes now? 
o Find out the numbers of seconds elapsed from January 1, 1970 to now. */

/*
const year = new Date() 
console.log(year.getFullYear()) // 2021

const month = new Date() 
console.log(month.getMonth()) // 8, because the month is September, month(0-11)

const date = new Date() 
console.log(date.getDate()) // 20, day(1-31)

const day = new Date() 
console.log(day.getDay()) // 1 (0-6)

const hour = new Date() 
console.log(hour.getHours()) // 20

const min = new Date() 
console.log(min.getMinutes()) // 36

const now = new Date() // 
console.log(now.getTime()) // 1631775174842, this is the number of seconds passed from January 1, 1970 to Thu Sep 20 2021 20:43:54
*/





/* Exercises: Level 2

Q. Write a script that prompt the user to enter number of years. Calculate the number of seconds a 
person can live. Assume some one lives just hundred years 
o Enter number of yours you live: 100 
o You lived 3153600000 seconds. */

/*
const age=prompt("enter your age","20");
console.log(`You lived ${age*365*24*60*60}`)
*/





/*
Q. Create a human readable time format using the Date time object 
o YYYY-MM-DD HH:mm 
o DD-MM-YYYY HH:mm 
o DD/MM/YYYY HH:mm 
*/ 

/*
const now = new Date() 
const year = now.getFullYear() // return year 
const month = now.getMonth() + 1 // return month(0 - 11) 
const date = now.getDate() // return date (1 - 31) 
const hours = now.getHours() // return number (0 - 23) 
const minutes = now.getMinutes() // return number (0 -59)
console.log(`${year}-${month}-${date} ${hours}:${minutes}`) //2021-9-20 21:21
console.log(`${date}-${month}-${year} ${hours}:${minutes}`) //20-9-2021 21:20
console.log(`${date}/${month}/${year} ${hours}:${minutes}`) // 20/9/2021 21:21
*/




/*
Exercises: Level 3

Q. Create a human readable time format using the Date time object. The hour and the minute should be 
all the time two digits (7 hours should be 07 and 5 minutes should be 05 ) 
o YYYY-MM-DD HH:mm eg. 2021-09-16 12:05 
*/

/*
const now = new Date() 
const year = now.getFullYear() // return year 
const month = now.getMonth() + 1 // return month(0 - 11) 
const date = now.getDate() // return date (1 - 31) 
const hours = now.getHours() // return number (0 - 23) 
const minutes = now.getMinutes() // return number (0 -59)

if (month < 10) {month = "0" + month;}
if (date < 10) {date = "0"+date;}
if (hours < 10) {hours = "0"+hours;}
if (minutes < 10) {minutes = "0"+minutes;}

console.log(`${year}-${month}-${date} ${hours}:${minutes}`) 
*/