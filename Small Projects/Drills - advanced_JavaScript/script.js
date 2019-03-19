//Function constructor

var john = {
    name: 'John',
    yearOfBirth: 1986,
    job: 'teacher'
};

var Person = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
};

Person.prototype.calculateAge =function() {
    console.log(2019 - this.yearOfBirth);
    }

//this is an instance of the person object. When we use the new operator it creates an empty object, then the constructor function "person" is called
//which creates a new execution context, then the this variable points to the new object, then last, var john is set to that new person. 
var john = new Person('John', 1990, 'teacher');
var jane = new Person('Jane', 1969, 'designer');
var mark = new Person('mark', 1948, 'retired');

john.calculateAge();
