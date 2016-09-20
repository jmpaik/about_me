'use strict';

var answer1 = prompt('Is Michael a student in programming at Code Fellows?');
answer1 = answer1.toLowerCase();
if (answer1 === 'yes' || answer1 === 'y') {
  alert('That\'s correct!');
  console.log('That\'s correct!');
}
else {
  alert ('Sorry that\'s incorrect.');
  console.log('Sorry that\'s incorrect.');
}

var answer2 = prompt('Does Michael practice writing code on a Macbook Pro?');
answer2 = answer2.toLowerCase();
if (answer2 === 'yes' || answer2 === 'y') {
  alert('That\'s correct!');
  console.log('That\'s correct!');
}
else {
  alert ('Sorry that\'s incorrect.');
  console.log('Sorry that\'s incorrect.');
}

var answer3 = prompt('Currently, can Michael build a complex website?');
answer3 = answer3.toLowerCase();
if (answer3 === 'no' || answer3 === 'n') {
  alert('That\'s correct!');
  console.log('That\'s correct!');
}
else {
  alert ('Sorry that\'s incorrect.');
  console.log('Sorry that\'s incorrect.');
}

var answer4 = prompt('Has Michael had any prior experience writing code?');
answer4 = answer4.toLowerCase();
if (answer4 === 'no' || answer4 === 'n') {
  alert('That\'s correct!');
  console.log('That\'s correct!');
}
else {
  alert ('Sorry that\'s incorrect.');
  console.log('Sorry that\'s incorrect.');
}

var answer5 = prompt('Will Michael pass Code Fellows 201 course? (Yes, No, or Maybe?)');
answer5 = answer5.toLowerCase();
if (answer5 === 'maybe' || answer5 === 'm') {
  alert('That\'s correct!');
  console.log('That\'s correct!');
}
else {
  alert ('Sorry that\'s incorrect.');
  console.log('Sorry that\'s incorrect.');
}
/*var usertalent = prompt('What is your talent?');
alert('You must be gifted at ' + usertalent + '.');
console.log('The user\'s talent is ' + usertalent);

var userfood = prompt('What is your favorite food?');
alert('I enjoy eating ' + userfood + ' too.');
console.log('The user\'s favorite food is ' + userfood);

var usersport = prompt('What is your favorite sports event to watch?');
alert('Being able to play ' + usersport + ' sounds difficult but easier to watch.');
console.log('The user\'s favorite sport is ' + usersport);

console.log('Wow, ' + username + ' you know how to ' + usertalent + ' and you probably like to eat ' + userfood + ' while watching ' + usersport + '.');
document.write('Wow, ' + username + ' you must enjoy ' + usertalent + ' and you probably like to eat ' + userfood + ' while watching ' + usersport + '.');*/
