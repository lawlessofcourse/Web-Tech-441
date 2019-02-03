//External Javascript file
console.log('I am logging to the console');
console.log('My name is Jack Lawless');
console.log('I like to code and am excited to integrate JavaScript into my webpages.');
console.log('My favorite resturants are.. James Bar for a burger and beer.');
console.log('Any Hots resturant back in Rochester, NY to get a super awesome Garbage Plate, if you dont know ask');
console.log('and Schooners Riverside Pub, where I grew up eating and working.');
console.log('I like to munch on a good trail mix, pretzels, and ice cream if that counts.');
console.log('Canteloupe no doubt. A perfectly ripe Mango, and watermelon');

var today = new Date();
var hourNow = today.getHours();
var greeting;

if(hourNow>18){
  greeting = 'Good evening';
} else if(hourNow > 12) {
  greeting = 'Good afternoon';
} else if(hourNow > 0){
  greeting = 'Good morning';
}else {
  greeting = 'Welcome';
}
document.write(greeting);
