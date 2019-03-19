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




