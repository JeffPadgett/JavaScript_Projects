//Function constructor

/*

var john = {
    name: 'John',
    yearOfBirth: 1986,
    job: 'teacher'
};

//This is considered a constructor, which is basically a class in almost all other langauges. 
var Person = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
};

//This adds the class ONLY to every instance that is created after the Person object.
Person.prototype.calculateAge = function() {
    console.log(2019 - this.yearOfBirth);
    }

//this is an instance of the person object. When we use the new operator it creates an empty object, then the constructor function "person" is called
//which creates a new execution context, then the this variable points to the new object, then last, var john is set to that new person. 
var john = new Person('John', 1990, 'teacher');
var jane = new Person('Jane', 1969, 'designer');
var mark = new Person('mark', 1948, 'retired');

john.calculateAge();

*/


// Primitives vs Objects

//A big difference between primitives and objects, is that variables contianing primitives, actually hold that data, inside of the variable itself, on objects, its very different.
//veriables assoisated with objects do not actually contain the object, but instead contain a reference in to the place in memory where the object sits or where the object is stored.
// It just points to the object. 
/*
var a = 23;
var b = a;
a = 46;
console.log(a);
console.log(b);
//two variables holding primitives are really two different things.

var obj1 = {
    name: 'John',
    age: 26
};
var obj2 = obj1;
obj1.age = 30;
console.log(obj1.age);
console.log(obj2.age);
//They are both 30... This is because when we set object 1 should be equal to object 2, we did not create a new object, all that we did was create a new reference that points to the first object.

//FUNCTIONS 
var age = 27;
var obj = {
    name: 'Jonas',
    city: "Lisbon"
};

function change (a,b) {
    a = 30;
    b.city = "San Francisco";
}

change (age, obj);

console.log(age);
console.log(obj);
*/

/********************Lecture: Passing functions as arguments */

/*
var years = [1986, 1965, 1937, 2005, 1998];
var ages = [32, 42, 18, 24, 59, 60];



function arrayCalc(array, fctn) {
    var tempArray = [];
    for (var i = 0; i < array.length; i++)
    {
        tempArray.push(fctn(array[i]));
    }
    return tempArray;
}

//callback functions are functions that do only one simple task, they are called callback functions because they are functions that we pass into functions that call them later
function calculateAge(el) {
    return 2019 - el;
}

function isFullAge(el){
    return el >= 18;
}

function maxHeartRate(el) {
    if (el >= 18 && el <= 81) {
        return Math.round(206.9 - (0.67 * el));
    } else { 
        return -1;
    }
}

var heartRate = arrayCalc(ages,maxHeartRate);
console.log(heartRate);
*/

/***************FUNCTIONS RETURNING FUNCTIONS*************************** */

/*
function interviewQuestion(job) {
    if (job === 'designer') {
        return function(name) {
            console.log(name + ', can you please explain what UX design is?');
        }  
    } else if (job ==='teacher') {
        return function(name){
            console.log('What subject do you teach ' + name + '?')
        }
    } else {
        return function(name){
            console.log('Hello ' + name + ' what do you do?');
        }
    }
}

var designerQuestion = interviewQuestion('designer');
var teacherQuestion = interviewQuestion('teacher');

teacherQuestion('John');
designerQuestion('Peggy');
designerQuestion('Mark');
teacherQuestion('Sally');

interviewQuestion('designer')('Paparao');
*/

/*********************IIFE********************************/
//Imediately invoked function expressions
//Used to maintain data privacy. 
//This is just for data privacy
//This works because the javascript parser knows that whats inside of prenthenses can not be a statement

/*
function game() {
    var score = Math.random() * 10;
    console.log(score >= 5);
}
game();

(function () {
    var score = Math.random() * 10;
    console.log(score >= 5);
})();

(function (goodLuck) {
    var score = Math.random() * 10;
    console.log(score >= 5 - goodLuck);
})(5); //we pass the good luck paramater here 
*/


/***** Lecture: Closures */

function retirement(retirementAge) {
    var a = ' years left until retirement.';
    return function (yearOfBirth) {
        var age = 2019 - yearOfBirth;
        console.log((retirementAge - age) + a);
    }
}




